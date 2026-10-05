# Registro de prueba local - Escudo Week 8

## 1 oct 2026, pasada mecánica local

- Ejecución inicial: `node --test tests/smoke.test.mjs` desde la raíz del workspace. Resultado: 2 pruebas, 2 aprobadas.
- Sintaxis: `node --check site/app.js`. Resultado: sin errores.
- Inspección de HTML con `html.parser`: ningún campo libre, de correo, contraseña o archivo; solo casillas predefinidas.
- Los casos cubiertos fueron movimiento de dinero sin área identificada, reinicio del flujo y orientación de datos potencialmente expuestos con enlace a CERT-MX.

## Defecto encontrado y corregido

Al pulsar «Empezar de nuevo», el panel con ese botón se ocultaba pero el foco del teclado quedaba en el botón ya oculto. Una persona que usa teclado podía perder su posición. `site/app.js` ahora mueve el foco a la primera opción de incidente; la prueba `uncertain area remains explicitly uncertain and restart restores focus` lo comprueba en el DOM simulado. La prueba no es sustituto de una pasada con navegador y lector de pantalla.

## Corrección de comprensión

Una simulación preliminar de persona sugirió que «Puedes elegir varias opciones» hacía parecer obligatoria la selección de un área. La ayuda ahora dice que se puede continuar sin marcar ninguna si aún no se sabe; el resultado muestra «Área afectada: aún no identificada» en lugar de interpretarlo como omisión. Véase `PERSONA_SIMULADA_PRELIMINAR.md`.

## 4 oct 2026, primer despliegue y defecto observado en vivo

- Primer despliegue de Vercel: `dpl_9mr8AQuW4rZwRqy25aZ9iXtDfEDg`, commit `028cb11bbae3411e7af323095e4aa14301474775`, [URL de versión](https://escudo-sme-shield-week8-lsgcfjvk2-rodrigo-builds3.vercel.app/).
- En la [URL principal](https://escudo-sme-shield-week8.vercel.app/) se abrió el modo incidente, se eligió «Movimiento de dinero» y se continuó sin marcar un área. El resultado conservó «Área afectada: aún no identificada» y mostró la ruta financiera y el índice de evidencia.
- La consulta real a `/api/kev?vendor=Microsoft` devolvió tres entradas y la versión `2026.10.04` del catálogo CISA. El botón de IA mostró la indisponibilidad honesta porque todavía no hay `GEMINI_API_KEY` configurada; no se simuló una respuesta.
- **Defecto de la primera versión:** al mostrar resultados KEV, `site/app.js` reemplazaba el contenido inicial de `#kev-output` y eliminaba el enlace visible a la fuente CISA. La persona ya no podía abrir el catálogo desde ese panel para verificar la información.
- **Corrección preparada:** el resultado ahora incluye un enlace fijo a `https://github.com/cisagov/kev-data`, con `rel="noopener noreferrer"`. Se añadió prueba de regresión al DOM simulado. `npm test`: **8/8**; `npm run check`: correcto. Falta verificar el segundo despliegue y el enlace en la URL viva.

## Integración LLM y feed: pasada local adicional

Después de añadir `api/guide.js` y `api/kev.js`, se ejecutó `node --test tests/*.test.mjs`: 5 pruebas, 5 aprobadas. Luego se añadieron encabezados de seguridad, foco al mostrar resultados y límites de salida del LLM: `npm test` aprobó **7 pruebas**. Se comprobó rechazo de texto extra/no permitido y cargas grandes, respuesta 503 sin clave, que el prompt enviado al LLM no incluya la clave, rechazo de enlaces de contacto inventados, filtrado de proveedor sobre un feed ficticio, política de despliegue, resumen exportable y rutas del DOM simulado. `node --check` aprobó los tres archivos JavaScript. Los dobles de prueba **no** prueban conectividad real a Gemini ni al feed CISA, ni el comportamiento del sitio desplegado.
