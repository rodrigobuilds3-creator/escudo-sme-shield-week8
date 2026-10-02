# Plan de validación USER para Escudo

**Estado:** protocolo listo para usar; no se han realizado entrevistas ni pruebas con personas. La demo y el caso Dromómanos sirven para formular preguntas, no para afirmar demanda o impacto.

## Decisión que debe resolver

Determinar si una organización pequeña necesita una ruta adicional para actuar ante un incidente y si esa ruta encaja dentro de un servicio mensual de continuidad. Si el banco, el proveedor de TI o los canales existentes ya resuelven la tarea con claridad, Escudo debe integrarse a ellos o abandonar esa función.

## Participantes y consentimiento

- **12 entrevistas de descubrimiento propuestas:** personas que deciden o coordinan operaciones/finanzas/TI en organizaciones de servicios de CDMX con 11–50 personas y sin equipo de seguridad dedicado. Incluir organizaciones que hayan recibido buena ayuda de sus proveedores y otras que hayan tenido fricción.
- **5 entrevistas de canal propuestas:** proveedores de TI, contadores/asesores, asociaciones u otros posibles distribuidores. Preguntar por incentivos y límites antes de asumir interés.
- **3–5 recorridos de usabilidad propuestos:** participantes del segmento que prueben escenarios ficticios de la demo. No pedirles que revivan un incidente real durante la prueba.

Antes de cada sesión: explicar que se trata de investigación académica, que pueden omitir preguntas o terminar, y pedir permiso por separado para tomar notas o grabar. No recopilar credenciales, e.firma, folios reales, estados de cuenta, datos de clientes, nombres de empleados ni capturas sensibles. Si surge un caso en curso, detener la prueba y derivar a sus contactos reales; el prototipo no es un canal de respuesta.

## Guion de entrevista de descubrimiento

1. **Contexto actual:** ¿Qué cuentas o sistemas hacen posible cobrar, pagar y atender clientes? ¿Quién los administra hoy? ¿Qué proveedor externo ya interviene?
2. **Último episodio relevante:** Cuéntame el último momento en que un pago, cuenta o sistema digital dejó de funcionar como esperabas. ¿Cuándo fue? ¿Quién lo detectó? ¿Qué sí sabes y qué quedó incierto?
3. **Primeras acciones:** ¿Qué hicieron durante los primeros 10 minutos y el primer día? ¿A quién contactaron primero? ¿Cómo verificaron que era la persona o canal correcto?
4. **Trabajo y costo del arreglo:** ¿Cuántas personas intervinieron, cuántas veces contaron el caso y cuánto trabajo se interrumpió? Pedir rangos, no documentos ni montos exactos si no desean compartirlos.
5. **Sustitutos:** ¿Qué hizo el banco, proveedor de TI, aseguradora o autoridad? ¿Qué parte funcionó? ¿Qué parte quedó sin dueño? ¿Qué harían igual la próxima vez?
6. **Preparación:** Antes de ese episodio, ¿qué verificaciones de respaldos, accesos y contactos ya pagaban o realizaban? ¿Quién decidió esas medidas?
7. **Compra real:** ¿Con qué presupuesto y proveedor resolverían hoy un problema igual? ¿Quién aprueba un gasto mensual? Preguntar por compras previas y decisiones concretas antes de mostrar precio o producto.
8. **Cierre:** ¿Qué tendría que pasar para que un servicio adicional no aportara nada? ¿Quién más conoce mejor este proceso?

**No preguntar “¿te gustaría una IA que…?” antes de reconstruir el trabajo actual.** La reacción a una idea no sustituye la conducta observada ni una decisión de compra.

## Recorrido de la demo

Usar escenarios ficticios revisados previamente por alguien con experiencia en respuesta. Presentar uno sin explicar los botones. Ejemplos: operación bancaria desconocida, aviso de acceso a correo, archivo enviado al destinatario equivocado, sistema indisponible y señal incierta.

Pedir al participante que piense en voz alta y observe:

1. Dónde cree que debe empezar y qué entiende de “Preparar” frente a “Tengo un incidente”.
2. Si elige una categoría sin sentirse obligado a confirmar una brecha.
3. Cuál es la primera acción que haría fuera de la demo y cómo verificaría el contacto.
4. Si distingue guía del producto de canal oficial, y si entiende que CONDUSEF requiere revisar alcance y requisitos.
5. Si intenta subir o escribir datos privados, y qué información echa en falta.
6. Si el resumen descargado le ahorra volver a contar la historia o solo agrega otra tarea.

Pedir al final: “¿Qué parte te parece incorrecta, confusa o innecesaria?” y “¿Qué usarías hoy en su lugar?”. No corregirle durante el recorrido salvo riesgo evidente.

## Registro por persona

| Campo | Qué guardar |
|---|---|
| Perfil | Rol, tamaño aproximado, dependencia digital y proveedor actual; sin datos identificables |
| Hecho observado | Paso, tiempo aproximado, error o duda y cita exacta con consentimiento |
| Ruta usada | Canal real o previsto; cómo verificó su autenticidad |
| Sustituto | Herramienta/proveedor ya disponible y qué resolvió |
| Costo | Tiempo y trabajo interrumpido en rangos, si la persona puede estimarlo |
| Señal de compra | Presupuesto, decisor y oferta concreta considerada o rechazada |
| Interpretación | Inferencia del investigador claramente separada del relato |
| Contraejemplo | Evidencia de que el problema ya está resuelto o no merece otra capa |

## Decisiones posteriores

El `BUSINESS_CASE.md` propone avanzar a un piloto si al menos 6 de 12 organizaciones describen una tarea repetida y costosa que sus sustitutos no cubren, 3 decisores presupuestarios aceptan examinar una oferta pagada concreta y 2 canales pueden facilitar presentaciones sin controlar la recomendación. Estos son umbrales de aprendizaje para esta propuesta, no estimaciones poblacionales.

Antes de afirmar que el navegador ahorra tiempo o deriva correctamente, un respondedor humano debe revisar los escenarios y las rutas; después se comparará el mismo trabajo con el proceso habitual del participante. Una muestra pequeña puede revelar errores de diseño, pero no demostrar eficacia nacional ni retorno financiero.
