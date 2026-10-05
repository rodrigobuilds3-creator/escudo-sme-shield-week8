import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('../site/app.js', import.meta.url), 'utf8');

function makeElement(extra = {}) {
  const listeners = new Map();
  const attrs = new Map();
  return {
    hidden: false, checked: false, value: '', textContent: '', innerHTML: '', tabIndex: 0,
    focused: false, children: [],
    dataset: {},
    classList: { toggle() {} },
    addEventListener(name, fn) { listeners.set(name, fn); },
    setAttribute(name, value) { attrs.set(name, value); },
    getAttribute(name) { return attrs.get(name); },
    focus() { this.focused = true; },
    scrollIntoView() {},
    appendChild(...nodes) { this.children.push(...nodes); },
    replaceChildren(...nodes) { this.children = nodes; },
    trigger(name, event = {}) { return listeners.get(name)?.(event); },
    ...extra,
  };
}

function setup(fetchImpl = async () => ({ ok: false })) {
  const selectors = [
    '#tab-prepare', '#tab-incident', '#prepare-panel', '#incident-panel',
    '#step-counter', '#impact-step', '#impact-step legend', '#plan-card',
    '#plan-title', '#plan-intro', '#action-list', '#evidence-list',
    '#route-links', '#plan-impacts', '#incident-choices', '#show-plan',
    '#start-over', '#download-summary', '#print-summary',
    '#ask-ai', '#ai-topic', '#ai-output', '#check-kev', '#kev-vendor', '#kev-output',
  ];
  const one = Object.fromEntries(selectors.map((selector) => [selector, makeElement()]));
  one['#impact-step'].hidden = true;
  one['#plan-card'].hidden = true;
  const choices = ['money', 'account', 'data', 'system', 'unsure'].map((kind) => makeElement({ dataset: { incident: kind } }));
  const impacts = ['Pagos o banca', 'Correo o identidad', 'Datos de clientes', 'Operación diaria']
    .map((value) => makeElement({ value }));
  const document = {
    querySelector(selector) { return selector === '.choice-card' ? choices[0] : one[selector]; },
    querySelectorAll(selector) {
      if (selector === '.choice-card') return choices;
      if (selector === '.impact-options input' || selector === '.impact-options input:checked') {
        return selector.endsWith(':checked') ? impacts.filter((item) => item.checked) : impacts;
      }
      return [];
    },
    createElement() { return makeElement({ click() {} }); },
  };
  const context = {
    document,
    window: { print() {} },
    Blob,
    URL,
    setTimeout,
    fetch: fetchImpl,
  };
  runInNewContext(source + '\nglobalThis.__makeSummary = makeSummary;', context);
  return { one, choices, impacts, makeSummary: context.__makeSummary };
}

test('uncertain area remains explicitly uncertain and restart restores focus', () => {
  const { one, choices } = setup();
  one['#tab-incident'].trigger('click');
  choices[0].trigger('click');
  one['#show-plan'].trigger('click');
  assert.equal(one['#plan-card'].hidden, false);
  assert.equal(one['#plan-card'].focused, true);
  assert.equal(one['#plan-impacts'].textContent, 'Área afectada: aún no identificada');
  assert.match(one['#action-list'].innerHTML, /canal oficial/);
  one['#start-over'].trigger('click');
  assert.equal(one['#plan-card'].hidden, true);
  assert.equal(choices[0].focused, true);
  assert.equal(one['#step-counter'].textContent, 'PASO 1 DE 2');
});

test('CISA results retain a direct source link after the live response', async () => {
  const { one } = setup(async () => ({
    ok: true,
    json: async () => ({
      source: 'CISA KEV', vendor: 'Microsoft', catalogVersion: '2026.10.04',
      entries: [{ cveID: 'CVE-2026-0001', product: 'Windows', dateAdded: '2026-10-01' }],
    }),
  }));
  await one['#check-kev'].trigger('click');
  const children = one['#kev-output'].children;
  assert.equal(children.length, 3);
  assert.equal(children[2].href, 'https://github.com/cisagov/kev-data');
  assert.equal(children[2].textContent, 'Ver catálogo CISA KEV ↗');
  assert.equal(children[2].rel, 'noopener noreferrer');
});

test('changing incident updates guidance without collecting free text', () => {
  const { one, choices, impacts, makeSummary } = setup();
  choices[2].trigger('click');
  impacts[2].checked = true;
  one['#show-plan'].trigger('click');
  assert.match(one['#plan-title'].textContent, /exposición/);
  assert.match(one['#plan-impacts'].textContent, /Datos de clientes/);
  assert.match(one['#route-links'].innerHTML, /gob\.mx\/gncertmx/);
  const summary = makeSummary();
  assert.match(summary, /Señal seleccionada: Datos posiblemente expuestos/);
  assert.match(summary, /ORIENTACIÓN/);
  assert.match(summary, /Involucra a la persona responsable\./);
  assert.match(summary, /gob\.mx\/gncertmx/);
  const html = readFileSync(new URL('../site/index.html', import.meta.url), 'utf8');
  assert.doesNotMatch(html, /<input[^>]+type=["'](?:text|email|password|file)["']/i);
  assert.doesNotMatch(source, /\b(?:localStorage|sessionStorage)\s*\(/);
  assert.match(source, /fetch\("\/api\/guide"/);
  assert.match(source, /fetch\(`\/api\/kev\?vendor=/);
});
