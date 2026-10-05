# Business Bending Week 8 - estado frente a Brightspace

Fuente consultada el 1 de octubre de 2026: [Business Bending Week 8 en Brightspace](https://d2l.ibero.mx/d2l/le/lessons/895920/topics/4001584). La página indica que esta entrega individual vale 55% de la semana y pide una pieza funcional del vacío declarado bajo las condiciones del Blueprint.

| Requisito | Evidencia disponible | Estado honesto |
|---|---|---|
| Packet con usuario, éxito, mockup generado, Mermaid, benchmark, visión, alcance, arquitectura y test plan | `docs/PACKET.md`, `assets/mockup-incidente-generado.png` | Contenido presente; revisión posterior al primer código, así que no prueba cronología packet-antes-de-código |
| Prompt de implementación con criterios y plan de commits | `docs/BUILD_PROMPT.md` | Presente |
| Dragon Stack: LLM + herramienta/API de seguridad + tercer componente | `api/guide.js`, `api/kev.js`, exportación local y ocho pruebas automatizadas | CISA KEV y sitio comprobados en vivo; **LLM aún sin clave ni prueba en vivo** |
| Cinco commits, dos despliegues | Más de cinco commits publicados; primer despliegue Vercel registrado en `docs/DEPLOY.md` | Historial y primer despliegue cumplidos; **segundo despliegue pendiente** |
| Seguridad básica | Sin secretos, cuenta, base de datos, texto libre ni personas reales en el sitio; entradas de lista cerrada | Revisado localmente; inspección de despliegue pendiente |
| Prueba mecánica, bug, corrección y nuevo despliegue | `tests/smoke.test.mjs`, `tests/api.test.mjs`, `docs/TEST_LOG.md` | Defecto del enlace CISA detectado en vivo, corrección y ocho pruebas locales; nuevo despliegue pendiente |
| Persona en conversación nueva con capturas ordenadas | `docs/PERSONA_SIMULADA_PRELIMINAR.md` | Ensayo narrativo simulado, **no** test de la rúbrica con conversación y capturas reales |
| Video 3:00 + 0:30 reflexión | `docs/DEMO_SCRIPT.md` | Guion preparado; grabación pendiente |
| PDF packet, persona y BuildChat | Se generan desde scripts del proyecto | Diferenciar material simulado de una exportación real |
| URL pública + GitHub link + entrega en un dropbox | [Sitio Vercel](https://escudo-sme-shield-week8.vercel.app/) y [repositorio público](https://github.com/rodrigobuilds3-creator/escudo-sme-shield-week8) | URL y GitHub presentes; **dropbox de Brightspace pendiente** |

La rúbrica asigna 4/10 a que funcione en una URL, 2/10 a evidencia de packet antes de código, 2/10 a condiciones del Blueprint y shadow clause, 1/10 al ciclo test-corrección-nuevo despliegue y 1/10 a profundidad de BuildChat. Este registro no reemplaza una entrega en Brightspace.
