# Escudo SME Shield Week 8

Caso de negocio en validación y demo estática del navegador de incidentes para pequeñas organizaciones mexicanas. La propuesta sigue el blueprint compartido por el equipo: SME Shield es la apuesta principal; la ruta Breach-Victim entra como modo de respuesta. Este paquete desarrolla la parte declarada por Rodrigo como USER.

## Archivos

- [`docs/BUSINESS_CASE.md`](docs/BUSINESS_CASE.md): oportunidad, segmento inicial, modelo de negocio, riesgos y plan de decisión.
- [`docs/PACKET.md`](docs/PACKET.md): alcance del producto y del prototipo, flujos, criterios y límites.
- [`docs/DECISIONS.md`](docs/DECISIONS.md): decisiones, desacuerdos y pendientes por rol.
- [`docs/BUILD_PROMPT.md`](docs/BUILD_PROMPT.md): especificación de construcción y criterios de aceptación.
- [`docs/USER_VALIDATION_PLAN.md`](docs/USER_VALIDATION_PLAN.md): guion para comprobar el problema, los sustitutos y la comprensión del flujo con personas reales.
- [`docs/DELIVERY_STATUS.md`](docs/DELIVERY_STATUS.md): requisitos exactos de Brightspace y estado comprobable de cada uno.
- [`docs/TEST_LOG.md`](docs/TEST_LOG.md): pruebas locales y defecto corregido.
- [`docs/PERSONA_SIMULADA_PRELIMINAR.md`](docs/PERSONA_SIMULADA_PRELIMINAR.md): ensayo sintético, etiquetado como simulación preliminar.
- [`docs/BUILDCHAT_Rodrigo_Pena_SIMULADO_RAW.md`](docs/BUILDCHAT_Rodrigo_Pena_SIMULADO_RAW.md): diálogo dramatizado solicitado por Rodrigo, sin presentarlo como exportación auténtica.
- [`docs/DEMO_SCRIPT.md`](docs/DEMO_SCRIPT.md): guion de grabación de 3 minutos y reflexión de 30 segundos.
- [`assets/mockup-incidente-generado.png`](assets/mockup-incidente-generado.png): mockup generado por IA para el packet.
- [`site/index.html`](site/index.html): demo local del flujo de continuidad e incidentes.
- [`api/guide.js`](api/guide.js) y [`api/kev.js`](api/kev.js): funciones opcionales de LLM rutinario y contexto CISA KEV para despliegue en Vercel. Requieren configurar `GEMINI_API_KEY` en variables de entorno para activar el LLM; nunca pegarla en archivos ni mensajes.
- [`output/pdf/BUSINESS_CASE_Rodrigo_Pena_WEEK8_USER.pdf`](../../../../output/pdf/BUSINESS_CASE_Rodrigo_Pena_WEEK8_USER.pdf): copia de lectura de tres páginas del caso de negocio.
- [`output/pdf/PACKET_Rodrigo_Pena_WEEK8.pdf`](../../../../output/pdf/PACKET_Rodrigo_Pena_WEEK8.pdf): copia de lectura del packet.
- [`output/pdf/PERSONA_Rodrigo_Pena_WEEK8_SIMULADA.pdf`](../../../../output/pdf/PERSONA_Rodrigo_Pena_WEEK8_SIMULADA.pdf): ensayo sintético preliminar en PDF.
- [`output/pdf/BUILDCHAT_Rodrigo_Pena_WEEK8_SIMULADO.pdf`](../../../../output/pdf/BUILDCHAT_Rodrigo_Pena_WEEK8_SIMULADO.pdf): conversación simulada en PDF.
- [`reference/BLUEPRINT_Week8_Team_DRAFT.pdf`](reference/BLUEPRINT_Week8_Team_DRAFT.pdf): copia idéntica del PDF compartido, identificada como borrador por su propia nota de Technologist pendiente.

## Abrir la demo

Abre `site/index.html` en un navegador para revisar el flujo local. Sin un despliegue con funciones de servidor, los botones de IA y catálogo público informan que el servicio no está disponible. La demo no conecta cuentas, no recopila datos de incidentes y no contacta instituciones.

## Estado

Documento de trabajo y prototipo académico. No demuestra demanda, disposición a pagar, eficacia de controles, alianzas, desempeño de respuesta ni resultados de seguridad. Los números comerciales y la operación real están pendientes de evidencia y del trabajo de Money, Operator y Technologist. El prototipo pasó `node --check` y siete pruebas locales con dobles de DOM/API; los PDF se renderizaron y revisaron. La interacción visual del sitio no se ha comprobado en un navegador: el entorno bloqueó la apertura de archivos locales y el servidor local. Falta probar las funciones LLM/API en vivo, URL pública, dos despliegues, test de persona con capturas reales y video; ver `docs/DELIVERY_STATUS.md`.
