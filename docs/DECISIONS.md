# Decisiones y supuestos

| Tema | Decisión de trabajo | Evidencia / estado |
|---|---|---|
| Producto principal | SME Shield con navegador de incidentes incluido | Apuesta del blueprint; hay disenso conservado |
| Corte de Rodrigo | Flujo de respuesta a incidentes | Declaración USER explícita en blueprint |
| Comprador inicial | Dirección/operaciones/finanzas de pequeñas organizaciones digitales | Hipótesis por validar |
| Segmento de descubrimiento | Servicios, 11-50 personas, CDMX, sin equipo de seguridad | Recorte propuesto, no decisión validada |
| Tecnología de la demo | HTML/CSS/JS, reglas declarativas en incidente, funciones de servidor opcionales para preparación | No demuestra necesidad ni eficacia comercial de IA |
| Datos | Sin entradas libres, archivos, credenciales, cuenta ni almacenamiento de servidor | Decisión de prototipo derivada de shadow clause |
| Canales | MSP/IT, asociaciones, contadores; bancos/aseguradoras solo si el conflicto se controla | Hipótesis comercial |
| Precio | No fijado; pendiente de costos y prueba con compradores | Le corresponde desarrollar a Money |
| Evidencia del caso | Dromómanos aporta testimonio de fraude financiero y fricción de recuperación | No acredita breach/ransomware ni demanda |
| Mercado | INEGI CE 2024 como contexto, no como TAM | 5,468,180 establecimientos; participaciones redondeadas |
| Estado del equipo | Blueprint de trabajo, no versión final idéntica aprobada | Archivo adjunto señala Technologist declaration pendiente |
| Requisito Dragon Stack | No declarar integración viva antes de despliegue | Código LLM y CISA KEV preparado y probado con dobles; clave y prueba pública pendientes |
| Pruebas | Mantener prueba mecánica y ensayo sintético separados | Dos tests locales aprobados; el ensayo de persona no cumple capturas/chat nuevo |
| Publicación | Preparar artefactos antes de enlazar GitHub y URL pública | `gh` no está autenticado en CLI; Vercel web no tiene sesión; no hay despliegues |

## Cambio de postura

La posición individual de Rodrigo prefería Breach-Victim como vacío principal por el dolor inmediato. El blueprint conserva esa opinión, pero establece SME Shield como producto principal para permitir continuidad e ingresos recurrentes, con respuesta incorporada. Esta entrega sigue el acuerdo provisional a nivel de producto, y mantiene el navegador como la pieza de Rodrigo. No elimina el desacuerdo ni inventa un voto.

## Cierre de sesión - 1 oct 2026

Se leyó la consigna completa de Business Bending en Brightspace y se completó el packet con mockup generado, Mermaid de flujo y carriles, benchmark, visión a tres años, arquitectura y plan de pruebas. Se corrigió una ambigüedad del área de impacto y el foco oculto después de reiniciar. Se prepararon funciones Gemini y CISA KEV para tareas rutinarias/contexto; cinco pruebas locales aprobaron, sin llamadas reales a esos servicios. Los PDFs de packet, persona simulada y BuildChat simulado fueron generados y revisados visualmente. **Primer movimiento siguiente:** activar la clave solo en Vercel, desplegar, probar funciones en URL real y grabar el video. No hubo commit, push ni deploy de este proyecto en esta sesión.
