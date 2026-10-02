import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const guide = require('../api/guide.js');
const kev = require('../api/kev.js');

function response() {
  return {
    statusCode: 200, payload: null, headers: {},
    setHeader(name, value) { this.headers[name] = value; },
    status(code) { this.statusCode = code; return this; },
    json(value) { this.payload = value; return this; },
  };
}

test('LLM endpoint rejects free text and has honest no-key status', async () => {
  const prior = process.env.GEMINI_API_KEY;
  delete process.env.GEMINI_API_KEY;
  try {
    const bad = response();
    await guide({ method: 'POST', headers: {}, body: { topic: 'backup', personalInfo: 'secret' } }, bad);
    assert.equal(bad.statusCode, 400);
    const unavailable = response();
    await guide({ method: 'POST', headers: {}, body: { topic: 'backup' } }, unavailable);
    assert.equal(unavailable.statusCode, 503);
    assert.equal(unavailable.payload.error, 'llm_not_configured');
  } finally {
    if (prior === undefined) delete process.env.GEMINI_API_KEY;
    else process.env.GEMINI_API_KEY = prior;
  }
});

test('LLM endpoint sends only approved prompt to upstream and labels live output', async () => {
  const oldKey = process.env.GEMINI_API_KEY;
  const oldFetch = global.fetch;
  process.env.GEMINI_API_KEY = 'test-only';
  let sent;
  global.fetch = async (_url, options) => {
    sent = JSON.parse(options.body);
    return { ok: true, json: async () => ({ candidates: [{ content: { parts: [{ text: 'Revisa el respaldo con la persona responsable.' }] } }] }) };
  };
  try {
    const res = response();
    await guide({ method: 'POST', headers: {}, body: { topic: 'backup' } }, res);
    assert.equal(res.statusCode, 200);
    assert.equal(res.payload.source, 'gemini-live');
    assert.match(sent.contents[0].parts[0].text, /respaldo/);
    assert.doesNotMatch(JSON.stringify(sent), /test-only/);
  } finally {
    global.fetch = oldFetch;
    if (oldKey === undefined) delete process.env.GEMINI_API_KEY;
    else process.env.GEMINI_API_KEY = oldKey;
  }
});

test('security feed keeps a fixed source and filters allowed vendor', async () => {
  const oldFetch = global.fetch;
  let url;
  global.fetch = async (input) => {
    url = input;
    return { ok: true, json: async () => ({ catalogVersion: 'test', vulnerabilities: [
      { vendorProject: 'Microsoft', product: 'Example', cveID: 'CVE-2099-0001', dateAdded: '2099-01-01' },
      { vendorProject: 'Google', product: 'Other', cveID: 'CVE-2099-0002', dateAdded: '2099-01-02' },
    ] }) };
  };
  try {
    const denied = response();
    await kev({ method: 'GET', query: { vendor: 'https://evil.test' } }, denied);
    assert.equal(denied.statusCode, 400);
    const allowed = response();
    await kev({ method: 'GET', query: { vendor: 'Microsoft' } }, allowed);
    assert.equal(allowed.statusCode, 200);
    assert.match(url, /raw\.githubusercontent\.com\/cisagov\/kev-data/);
    assert.deepEqual(allowed.payload.entries.map((item) => item.cveID), ['CVE-2099-0001']);
    assert.match(allowed.payload.limitation, /no se inspeccionó/);
  } finally { global.fetch = oldFetch; }
});
