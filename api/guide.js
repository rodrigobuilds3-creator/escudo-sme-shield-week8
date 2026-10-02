const TOPICS = Object.freeze({
  backup: 'Explica cómo una pequeña organización puede comprobar con su proveedor si una copia de respaldo se puede restaurar, sin ejecutar cambios desde esta aplicación.',
  contacts: 'Explica cómo preparar una lista interna de contactos oficiales de banco, proveedor de TI y responsable de operaciones, sin solicitar nombres ni números en esta aplicación.',
  access: 'Explica cómo identificar quién administra los accesos de trabajo y cómo documentar una ruta de recuperación, sin pedir credenciales.'
});

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (Number(req.headers['content-length'] || 0) > 256) return res.status(413).json({ error: 'too_large' });
  let body;
  try { body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body; }
  catch { return res.status(400).json({ error: 'invalid_json' }); }
  if (JSON.stringify(body ?? null).length > 256) return res.status(413).json({ error: 'too_large' });
  if (!body || typeof body !== 'object' || Array.isArray(body) ||
      Object.keys(body).length !== 1 || !Object.hasOwn(body, 'topic') ||
      typeof body.topic !== 'string' || !Object.hasOwn(TOPICS, body.topic)) {
    return res.status(400).json({ error: 'invalid_topic' });
  }
  if (!process.env.GEMINI_API_KEY) return res.status(503).json({ error: 'llm_not_configured' });

  const payload = {
    system_instruction: { parts: [{ text: 'Responde en español de México, en máximo 110 palabras. Solo explica la tarea rutinaria indicada. No solicites datos, no diagnostiques incidentes, no prometas protección ni recomiendes modificar cuentas o sistemas. Recuerda que una persona responsable debe verificar y autorizar cambios. Evita nombres de instituciones específicas.' }] },
    contents: [{ parts: [{ text: TOPICS[body.topic] }] }],
    generationConfig: { maxOutputTokens: 180 }
  };
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': process.env.GEMINI_API_KEY },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000)
    });
    if (!response.ok) return res.status(502).json({ error: 'llm_unavailable' });
    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.map((part) => part.text || '').join(' ').trim();
    if (!text || text.length > 900 || /https?:\/\/|www\.|\b\S+@\S+\.\S+\b/i.test(text)) {
      return res.status(502).json({ error: 'llm_invalid_output' });
    }
    return res.status(200).json({ source: 'gemini-live', topic: body.topic, explanation: text });
  } catch {
    return res.status(502).json({ error: 'llm_unavailable' });
  }
};
