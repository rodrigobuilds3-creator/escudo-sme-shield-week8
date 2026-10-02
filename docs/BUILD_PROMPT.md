# Build prompt Escudo SME Shield Week 8

**Nota de procedencia:** esta es la especificación revisada después del primer prototipo local. No constituye evidencia de que el packet antecedió a todo el código.

Construye una demo académica estática, en español, para el navegador de incidentes de SME Shield. La propuesta de negocio está en `BUSINESS_CASE.md`, el alcance/criterios en `PACKET.md` y las decisiones en `DECISIONS.md`.

## Tarea principal

Permite que una persona de una pequeña organización seleccione una señal de daño, marque qué parte del negocio está afectada, reciba próximos pasos generales y revise un índice de evidencia/cronología exportable que no contenga datos sensibles. Añade una vista “Preparar” que muestre controles por revisar, sin afirmar que se conectó o validó un sistema.

## Límites obligatorios

- No backend, cuentas, base de datos, API externa, analítica o telemetría.
- No formularios abiertos, carga de archivos ni datos personales.
- Nunca solicitar contraseñas, PIN, e.firma, estado de cuenta, credencial oficial o registros de clientes.
- No enviar información a bancos, CONDUSEF, Guardia Nacional, proveedores, aseguradoras o socios.
- No confirmar intrusión/filtración, atribuir responsabilidad, diagnosticar malware o prometer restauración/reembolso.
- No activar acciones de respuesta ni cambiar configuraciones; cualquier acción empresarial crítica requiere aprobación humana y sistema real.
- Incluir nota visible de demo, incertidumbre y necesidad de escalar casos de alto impacto.
- Presentar CONDUSEF como canal cuyo alcance y requisitos deben confirmarse para cada caso; presentar 088 como orientación de reporte de ciberdelito.
- No fingir IA: esta entrega es una lógica de decisión declarativa. Cualquier IA futura necesita justificación, límites y revisión humana.

## Casos de uso

1. Dinero no reconocido: contactar al banco por ruta oficial ya conocida; conservar fecha, hora y folios; comprobar elegibilidad antes de CONDUSEF.
2. Acceso a cuenta posiblemente tomado: contactar al proveedor desde su dominio/canal oficial, revisar desde un medio confiable y escalar a TI; no ingresar contraseñas en la demo.
3. Datos posiblemente expuestos: registrar categoría/fecha como pendiente, limitar distribución adicional, consultar al responsable de privacidad/abogado y responder humano.
4. Sistemas bloqueados/interrumpidos: proteger continuidad con el proveedor de TI y humano; no borrar/restaurar desde esta demo.
5. Señal incierta: indicar lo desconocido y no clasificarla como incidente confirmado.

## Aceptación

- Navegación por teclado, etiquetas y foco visibles.
- El estado preventivo comienza “por revisar”; el resultado no dice “protegido”.
- El resumen local contiene solo elecciones predefinidas y enlaces oficiales.
- La persona elige imprimir/descargar; no se transmite nada.
- La experiencia informa quién debería decidir el siguiente paso y permite detener la automatización.
- Ningún resultado presenta benchmark estadounidense como canal mexicano.

## Construcción por cortes pequeños

1. **Base:** sitio accesible con modos Preparar y Responder, sin recolectar datos. Aceptación: navegación por teclado; los cuatro estados preventivos dicen «Por revisar».
2. **Triage:** cinco señales de lista cerrada y cuatro áreas opcionales. Aceptación: cada combinación muestra incertidumbre, pasos conservadores y persona responsable; entrada desconocida produce ruta incierta.
3. **Seguridad y fuentes:** enlaces oficiales con descripción de alcance, sin contacto automático. Aceptación: banco/proveedor se alcanza desde canal que el usuario ya conoce; CONDUSEF/088 no se presentan como solución garantizada.
4. **Resumen:** exportación local que incluya elecciones, pasos, índice y rutas. Aceptación: nada se envía ni persiste, y no hay campos libres.
5. **Dragon Stack (código preparado, activación pendiente):** el modo Preparar envía solo un tema permitido a `api/guide.js`, que pide a Gemini una explicación rutinaria; `api/kev.js` consulta la fuente pública CISA KEV por proveedor permitido; el modo Responder automatiza un resumen local. Aceptación: fuente y límites visibles, clave solo en variables de entorno, ninguna salida IA para decisiones de incidente. Sin clave o fuente disponible, informar indisponibilidad; nunca mostrar una respuesta ficticia como si fuera en vivo.

## Plan de commits y despliegues

El historial debe reflejar trabajo real; no crear commits retrospectivos para aparentar «packet antes de código». Si se publica este proyecto por primera vez, hacer commits separados por cambios verificables: (1) packet y fuentes, (2) interfaz base, (3) triage, (4) exportación/fuentes, (5) corrección surgida de prueba. Primer despliegue después del corte 4; segundo después de la corrección. Registrar URLs, hashes y capturas cuando ocurran. La versión actual aún no tiene ese historial propio ni dos despliegues.

## Session Close

Al final de cada sesión: actualizar `DECISIONS.md` con decisión, evidencia y siguiente primer movimiento; realizar commit y push solo si el repositorio remoto está disponible. Nunca registrar como hecho un push o despliegue que no ocurrió.
