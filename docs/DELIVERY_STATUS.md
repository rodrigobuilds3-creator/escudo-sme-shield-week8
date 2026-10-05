# Business Bending Week 8 - estado frente a Brightspace

Fuente consultada el 1 de octubre de 2026: [Business Bending Week 8 en Brightspace](https://d2l.ibero.mx/d2l/le/lessons/895920/topics/4001584). La página indica que esta entrega individual vale 55% de la semana y pide una pieza funcional del vacío declarado bajo las condiciones del Blueprint.

| Requisito | Evidencia disponible | Estado honesto |
|---|---|---|
| Packet con usuario, éxito, mockup generado, Mermaid, benchmark, visión, alcance, arquitectura y test plan | `docs/PACKET.md`, `assets/mockup-incidente-generado.png` | Contenido presente; revisión posterior al primer código, así que no prueba cronología packet-antes-de-código |
| Prompt de implementación con criterios y plan de commits | `docs/BUILD_PROMPT.md` | Presente |
| Dragon Stack: LLM + herramienta/API de seguridad + tercer componente | `api/guide.js`, `api/kev.js`, exportación local y ocho pruebas automatizadas | CISA KEV y sitio comprobados en vivo; **LLM sin prueba en vivo**. Vercel marca `GEMINI_API_KEY` como Config/Needs Attention; el propietario debe sustituirla por una clave nueva de tipo Secret en Production y volver a desplegar |
| Cinco commits, dos despliegues | Más de cinco commits publicados; dos despliegues Vercel registrados en `docs/DEPLOY.md` | **Cumplido** |
| Seguridad básica | Sin secretos, cuenta, base de datos, texto libre ni datos de incidentes en el sitio; entradas de lista cerrada | Flujo y límites inspeccionados en la URL pública; no es una auditoría de seguridad |
| Prueba mecánica, bug, corrección y nuevo despliegue | `tests/smoke.test.mjs`, `tests/api.test.mjs`, `docs/TEST_LOG.md` | Defecto del enlace CISA detectado en vivo, corrección, ocho pruebas locales y segundo despliegue verificado |
| Persona en conversación nueva con capturas ordenadas | `output/pdf/PERSONA_Rodrigo_Pena_WEEK8_SIMULADA.pdf` y `output/evidence/persona-*.png` | PDF con capturas reales y diálogo explícitamente simulado; **no** es una conversación independiente ni prueba con una persona real |
| Video 3:00 + 0:30 reflexión | `output/video/DEMO_Rodrigo_Pena.mp4`, guion en `docs/DEMO_SCRIPT.md` | MP4 producido de 3:30 con montaje de capturas del sitio y voz sintética; no es una grabación continua |
| PDF packet, persona y BuildChat | `output/pdf/` en el workspace | Packet y BuildChat están disponibles; persona simulada identificada como tal. No presentar diálogo simulado como exportación auténtica |
| URL pública + GitHub link + entrega en un dropbox | [Sitio Vercel](https://escudo-sme-shield-week8.vercel.app/) y [repositorio público](https://github.com/rodrigobuilds3-creator/escudo-sme-shield-week8) | URL y GitHub presentes; **dropbox de Brightspace pendiente** |

La rúbrica asigna 4/10 a que funcione en una URL, 2/10 a evidencia de packet antes de código, 2/10 a condiciones del Blueprint y shadow clause, 1/10 al ciclo test-corrección-nuevo despliegue y 1/10 a profundidad de BuildChat. El material preparado no está enviado: falta adjuntar los archivos en el dropbox de Brightspace. Para Gemini, el propietario debe generar una clave nueva en AI Studio, guardar `GEMINI_API_KEY` como tipo Secret para Production en Vercel y volver a desplegar. Nunca compartir la clave por chat ni guardarla en el repositorio.
