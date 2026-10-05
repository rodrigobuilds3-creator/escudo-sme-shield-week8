# Publicación de Escudo Week 8

## Estado

Repositorio público y primer despliegue verificados el 4 de octubre de 2026. La clave Gemini sigue sin configurarse. El segundo despliegue para corregir el enlace CISA está pendiente de verificación; registrar aquí su URL y commit cuando existan.

| Despliegue | Commit | URL / evidencia | Estado |
|---|---|---|---|
| 1 | `028cb11bbae3411e7af323095e4aa14301474775` | [Versión Vercel](https://escudo-sme-shield-week8-lsgcfjvk2-rodrigo-builds3.vercel.app/), ID `dpl_9mr8AQuW4rZwRqy25aZ9iXtDfEDg` | Publicado; sitio, flujo de incidente y CISA KEV comprobados en navegador |
| 2 | Por registrar | Por registrar | Corrección de enlace a fuente CISA preparada; despliegue pendiente |

## Repositorio

Este directorio es el proyecto de Escudo. `reference/` queda fuera del repositorio público porque contiene el blueprint compartido por el equipo. El archivo `.env.example` solo nombra la variable y no tiene valor. Antes del primer push, revisar `git status`, `git ls-files` y un escaneo de secretos.

## Vercel

1. Repositorio importado al proyecto `rodrigo-builds3/escudo-sme-shield-week8` con framework «Other». `vercel.json` establece `site` como directorio de salida y reconoce las funciones en `api/`.
2. Crear una clave Gemini para la cuenta del propietario y configurarla **directamente en Vercel** como `GEMINI_API_KEY` para el entorno del demo. No ponerla en GitHub, archivos, capturas o chat. El modelo `gemini-2.5-flash-lite` tiene nivel gratuito según [precios oficiales](https://ai.google.dev/gemini-api/docs/pricing), sujeto a cuotas y términos del proveedor.
3. Primer despliegue: comprobar inicio, selección de incidente, exportación, respuesta de `/api/kev?vendor=Microsoft` y el botón de IA. Confirmar que la salida muestra fuente/advertencia y que no se envían hechos del incidente.
4. Tras probar la primera URL, registrar cualquier defecto nuevo observado en vivo, corregirlo, pasar pruebas y hacer segundo despliegue. Los defectos de foco y exportación anteriores al primer despliegue están documentados como correcciones locales; no presentarlos como el ciclo de redeploy de la rúbrica. Registrar URL de cada versión y el hash de Git.
5. Abrir el sitio público con teclado y en móvil, tomar capturas de cada pantalla para el test de persona en chat nuevo y grabar `DEMO_Rodrigo_Pena.mp4`.

## Observaciones de seguridad

Solo tres etiquetas de tema pueden llegar al servidor LLM. No hay formularios de texto libre ni tablas de datos personales, así que Auth y RLS no aplican en este corte. El endpoint es público y consume cuota de un proveedor si alguien lo usa: verificar límites de la clave/proyecto antes de compartir ampliamente. El feed CISA es contexto de vulnerabilidades, no un diagnóstico de la pyme.
