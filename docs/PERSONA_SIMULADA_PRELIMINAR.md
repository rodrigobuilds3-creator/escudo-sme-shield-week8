# Ensayo preliminar de persona sintética - no es test con capturas reales

**Estado:** conversación representada por el asistente en nombre de Rodrigo, a petición del usuario. Es una simulación para detectar dudas de lenguaje; no es una conversación nueva independiente, no incluyó capturas reales del sitio y no demuestra comportamiento de personas reales.

## Persona de trabajo

**Lucía, 39 años**, coordina administración y pagos de una organización de servicios de 18 personas en CDMX. Usa banca en línea y correo a diario, pero no administra seguridad informática. Acaba de notar una salida de dinero que no reconoce y tiene que avisar al director; teme equivocarse y exponer más datos. Su edad, empresa y conducta son inventadas. Se construyó a partir del problema USER de fricción de respuesta descrito en el caso publicado de Dromómanos, que no documenta una entrevista con una persona como Lucía.

## Conversación simulada

**Rodrigo (simulación, pantalla inicial):** «Estás viendo Escudo. Hay dos botones: Preparar mi negocio y Tengo un incidente. ¿Qué harías?»

**Lucía sintética:** «Tengo un movimiento raro ahora; iría a Tengo un incidente. Me tranquiliza leer que no tengo que poner contraseñas. Quiero saber si esto habla con mi banco o solo me orienta.»

**Rodrigo (simulación, pantalla de señales):** «Ves cinco tarjetas: dinero, cuenta, datos, operación interrumpida y no estoy seguro.»

**Lucía sintética:** «Elegiría Movimiento de dinero. No sé todavía si fue fraude o si alguien de la oficina hizo el pago; agradezco que no me obliguen a decirlo como hecho.»

**Rodrigo (simulación, áreas de impacto; texto inicial):** «La pantalla dice: Puedes elegir varias opciones. ¿Qué haces?»

**Lucía sintética:** «No sé si debo marcar Pagos o banca para poder seguir. Solo vi un movimiento; todavía no sé qué otra área se afectó. Si es obligatorio, marcaría algo aunque no esté segura.»

**Rodrigo (simulación, ruta):** «La ruta recomienda contactar al banco por un canal oficial conocido, anotar secuencia y comprobar si CONDUSEF aplica.»

**Lucía sintética:** «Eso sí lo haría. Quiero que quede claro que Escudo no presenta la queja por mí. Descargaría el índice para usarlo cuando hable con el banco. No pondría el número de cuenta aquí.»

## Confusiones y corrección

1. **Mayor confusión:** las áreas parecían obligatorias. Corrección aplicada en `site/index.html`: la ayuda permite explícitamente continuar sin marcar. `site/app.js` ahora rotula el resultado «Área afectada: aún no identificada».
2. **Duda secundaria:** posible impresión de que la aplicación contacta al banco. La interfaz ya decía «no envía reportes»; queda pendiente comprobar en una prueba independiente si esa frase basta.
3. **Límite:** el mockup generado es un concepto y no corresponde pixel a pixel con el sitio. No se usó como evidencia de interacción real.

**Siguiente validación necesaria:** abrir una conversación realmente nueva, presentar capturas del producto desplegado en orden, solicitar ejecución de la tarea como Lucía y registrar literalmente las respuestas. Entrevistas reales después, sin inferir demanda de esta simulación.
