const VENDORS = new Set(['Microsoft', 'Google', 'Cisco']);
const SOURCE = 'https://raw.githubusercontent.com/cisagov/kev-data/develop/known_exploited_vulnerabilities.json';
let cache = null;

module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=300');
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });
  const vendor = req.query?.vendor;
  if (typeof vendor !== 'string' || !VENDORS.has(vendor)) return res.status(400).json({ error: 'invalid_vendor' });
  try {
    if (!cache || Date.now() - cache.loadedAt > 300000) {
      const response = await fetch(SOURCE, { signal: AbortSignal.timeout(8000) });
      if (!response.ok) throw new Error('upstream');
      const data = await response.json();
      if (!Array.isArray(data.vulnerabilities) || typeof data.catalogVersion !== 'string') throw new Error('schema');
      cache = { loadedAt: Date.now(), data };
    }
    const entries = cache.data.vulnerabilities
      .filter((item) => item.vendorProject === vendor)
      .sort((a, b) => String(b.dateAdded).localeCompare(String(a.dateAdded)))
      .slice(0, 3)
      .map((item) => ({ cveID: item.cveID, product: item.product, dateAdded: item.dateAdded }));
    return res.status(200).json({
      source: 'CISA KEV',
      sourceUrl: 'https://github.com/cisagov/kev-data',
      catalogVersion: cache.data.catalogVersion,
      vendor,
      entries,
      limitation: 'Contexto público; no se inspeccionó ningún sistema ni se atribuyó un incidente.'
    });
  } catch {
    return res.status(502).json({ error: 'source_unavailable' });
  }
};
