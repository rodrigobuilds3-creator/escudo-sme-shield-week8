# Caso de negocio Escudo SME Shield

**Estado:** hipótesis de negocio para discusión; no es una proyección financiera ni una decisión final del equipo.  
**Corte:** 1 de octubre de 2026.  
**Parte desarrollada:** navegador de incidentes declarado por Rodrigo en el blueprint de Week 8.

## Decisión que se propone probar

Probar un servicio administrado en español que ayude a una pyme a mantener continuidad digital: revisar unas pocas medidas existentes, priorizar arreglos, confirmar que las copias de respaldo se puedan recuperar y guiar una respuesta cuando algo sale mal. El SME Shield sería el producto principal; el navegador de incidentes sería la ruta de respuesta incluida.

La oportunidad aún no está validada. El caso publicado de Dromómanos muestra una experiencia costosa de recuperación financiera, pero no confirma intrusión, brecha de datos ni una necesidad general de ciberseguridad administrada. El blueprint contiene apuestas del equipo, no resultados de investigación de mercado.

## Problema y evidencia

La hipótesis de contexto es que algunas organizaciones pequeñas dependen de cuentas en la nube, banca, dispositivos y proveedores externos sin un equipo de seguridad dedicado. El blueprint acuerda que las herramientas básicas existen y ubica la fricción en acceso, confianza, coordinación, costo y pericia humana; lo trato como tesis compartida por el equipo que todavía requiere prueba con compradores.

Una fuente de contexto de INEGI contabiliza 5,468,180 establecimientos en los Censos Económicos 2024; 95.4% son micro, 4.5% pymes y 0.2% grandes, con porcentajes redondeados. Es un denominador económico, no un mercado direccionable: no todos necesitan, compran o pueden pagar el servicio. La ENVE 2024 incluye delitos informáticos dentro de las conductas que estudia, pero esta propuesta no usa una tasa de victimización como prueba de demanda ni de disposición a pagar.

Como evidencia humana inicial, los autores de Dromómanos relataron que dos retiros no autorizados cercanos a MXN 500,000 ocurrieron con siete minutos de diferencia, dejaron MXN 16,000 en la cuenta y pusieron en riesgo nómina y operación. Reportaron dos horas para levantar el caso ante el banco y cinco asesorías legales con estrategias distintas. Es su testimonio publicado sobre fraude financiero y fricción de recuperación; no acredita la causa técnica, una brecha de datos, el desenlace final ni una prevalencia nacional.

## Cliente y trabajo por resolver

**Segmento de descubrimiento:** organizaciones de servicios en Ciudad de México con operaciones digitales, cuentas de correo y pago críticas, entre 11 y 50 personas y sin una persona dedicada a seguridad. Es un recorte de investigación para conversar con compradores; no es una descripción validada del mercado. La clasificación de INEGI agrupa las empresas de 11 a 250 personas como pymes, así que el segmento propuesto cae dentro de esa categoría amplia.

**Comprador probable:** dueño, dirección de operaciones o finanzas.  
**Usuarios diarios:** responsable administrativo u operativo y proveedor de TI existente.  
**Trabajo por resolver:** “Ayúdame a saber qué está cubierto, qué arreglo primero y a quién recurro si un incidente interrumpe pagos, acceso o trabajo, sin contratar un equipo interno ni compartir mis credenciales con otro servicio.”

El primer prototipo atiende únicamente la parte de respuesta: identifica el tipo de daño declarado, ordena próximos pasos generales, arma una lista de evidencia no sensible y muestra rutas de apoyo existentes. La capa de prevención y operación administrada pertenece al caso completo, pero no queda implementada en esta demo.

## Propuesta y valor esperado

| Momento | Servicio propuesto | Resultado que se medirá |
|---|---|---|
| Inicio | Inventario guiado de cuentas y respaldos existentes; indicar qué se revisó y qué sigue desconocido | Tiempo de incorporación, tareas abandonadas y acciones prioritarias aceptadas |
| Operación | Lista breve de mejoras, verificación programada de recuperación de respaldo y revisión de accesos con consentimiento | Arreglos completados, restauraciones de prueba y carga de trabajo del cliente |
| Incidente | Navegador en español, cronología y checklist exportable sin subir documentos; referencia a canales oficiales y escalamiento humano | Tiempo hasta una acción segura, ruta correcta, repeticiones de historia y casos que necesitan especialista |

La promesa comercial inicial es continuidad y orientación clara a un costo mensual predecible. No se promete “evitar ataques”, recuperar dinero, eliminar todo riesgo, certificar cumplimiento ni resolver un incidente en un plazo fijo.

## Mercado y alternativas

Los 5.47 millones de establecimientos de INEGI sirven para dimensionar el contexto, no para afirmar TAM/SAM/SOM. Para estimar un mercado direccionable hay que filtrar por empleados, actividad, geografía, dependencia digital, falta de equipo interno, elegibilidad y gasto real. El primer corte debe extraerse de DENUE/Censos Económicos por actividad y localidad y luego contrastarse con entrevistas.

El comprador ya puede recurrir a proveedores de TI o MSP, herramientas incluidas en sus cuentas y equipos, controles gratuitos, aseguradoras/bancos y guías públicas. Hay ofertas comerciales fuertes que el caso debe superar:

| Alternativa comprobada | Qué ofrece según su proveedor | Pregunta para Escudo |
|---|---|---|
| Microsoft Defender para Empresas | La página mexicana describe protección de dispositivos, incorporación guiada, detección/respuesta y corrección automatizada para organizaciones de hasta 300 usuarios. Publica USD 2.40 por usuario/mes con pago anual, sin impuestos, al revisar el 1 de octubre de 2026. | ¿Hay trabajo humano y coordinación local que el cliente aún necesita tras usar estas capacidades? |
| Acronis Cyber Protect Cloud mediante MSP | La plataforma combina respaldos, seguridad y gestión para proveedores de servicios administrados; también ofrece respuesta y recuperación. | ¿El MSP actual ya entrega un camino claro antes y después del incidente? |
| Proveedor de TI, banco, aseguradora y canales públicos | Atienden partes del incidente o de la continuidad según contrato y competencia. | ¿Qué tarea concreta queda sin dueño, si alguna? |

El precio de Defender es solo el de esa herramienta, no un precio recomendado ni un costo completo para Escudo. CISA ofrece recursos y herramientas sin costo para SMB en Estados Unidos: es un benchmark de claridad y secuencia, no un reemplazo mexicano. En México, CONDUSEF mantiene una queja electrónica para ciertos conflictos con instituciones financieras, sujeta a competencia y acreditación de relación contractual; CERT-MX/Guardia Nacional publica orientación telefónica al 088 para ciberdelitos. El producto debe derivar a esos canales cuando corresponda y verificar la ruta con la persona.

La diferenciación por probar no es “tener IA” ni agregar otro tablero. Sería reunir controles ya disponibles, ayudar a completar pocos arreglos útiles y ofrecer un mismo camino legible antes y después de un incidente, con mínima exposición de datos y una persona responsable cuando el caso rebasa automatización.

## Modelo de ingresos y economía

**Hipótesis de cobro:** tarifa mensual por organización con alcance explícito y límites por tamaño/servicio; una cuota de incorporación puede cubrir el inventario y puesta en marcha. El precio y qué incluir debe definirlo Money a partir de costos reales, entrevistas de compra y pruebas de oferta. No incluyo precio inventado.

**Canales a probar:** recomendación de un proveedor de TI existente, asociaciones sectoriales y contadores/asesores que ya gozan de confianza. Bancos y aseguradoras podrían ser canal o comprador, pero hay que revisar conflicto de interés y asegurar que no influyan en la recomendación ni en el tratamiento de reclamaciones.

**Cálculos para completar con datos:**

- Ingreso recurrente mensual = clientes activos × ingreso mensual medio por cliente.
- Margen bruto = (ingreso recurrente − costo variable de software/licencias, soporte, monitoreo, atención humana y comisión de canal) ÷ ingreso recurrente.
- Recuperación de CAC = costo de adquisición por cliente ÷ contribución bruta mensual por cliente.
- Punto de equilibrio de clientes = costo fijo mensual ÷ contribución mensual por cliente.

No proyectar LTV antes de tener retención observada. Medir minutos de incorporación y soporte por cliente, frecuencia y duración de escalamiento, costo de responder incidentes, licencias, seguros, ventas y pago a socios. Si el costo de respuesta humana vuelve negativo el margen, cambiar el segmento, el alcance o el canal antes de automatizar decisiones de alto impacto.

## Plan de validación y umbrales

### 1. Descubrimiento

Entrevistar a 12 organizaciones del segmento propuesto sobre el último incidente o falla operativa real, su proceso de continuidad, gasto actual, quién decide y qué proveedor ya utilizan. Entrevistar además a 5 posibles canales/respuesta. Con consentimiento, registrar solo proceso y rangos de tiempo/costo; no credenciales ni documentos financieros. Estas cantidades son tamaño de prueba, no muestra representativa.

**Seguir a un piloto si:** al menos 6 de las 12 organizaciones pueden describir una tarea repetida y costosa que sus proveedores o herramientas actuales dejan sin resolver; al menos 3 responsables presupuestarios aceptan revisar una oferta pagada concreta; y 2 proveedores de canal confirman que pueden hacer presentaciones sin apropiarse de la decisión del cliente. Si no aparecen, abandonar o redefinir el segmento antes de construir integraciones.

### 2. Piloto concierge

Ofrecer a 3 organizaciones una revisión limitada de accesos, respaldos y contactos de respuesta, con aprobación explícita, una persona experta detrás y sin privilegio administrativo permanente. Comparar con la situación inicial: tiempo de primera acción, acciones completadas, carga de soporte, precisión de derivación y costo de atención. Nunca provocar un incidente real ni conectar sistemas de producción desde el prototipo académico.

**Seguir a servicio pagado si:** el cliente completa acciones prioritarias, al menos dos organizaciones pagan la tarifa previamente mostrada, no hay incidentes de acceso/datos, la revisión humana puede sostener la calidad y el margen de contribución calculado con costos observados es positivo. El umbral es de aprendizaje, no inferencia estadística.

### 3. Escala controlada

Solo después de un piloto pagado, estandarizar onboarding, niveles de severidad, manuales de respuesta, horarios/capacidad humana, relación con el proveedor de TI y proceso de escalamiento. La IA puede resumir alertas o narrativas con revisión; no obtiene control irrestricto ni ejecuta cambios destructivos.

## Riesgos que podrían invalidar el caso

| Riesgo | Señal de alerta | Respuesta de negocio |
|---|---|---|
| No hay disposición a pagar antes del daño | Interés verbal sin compra ni presupuesto | Probar pago vía canal o vender una revisión concreta; detener suscripción si no hay compra |
| Solución redundante | El MSP, banco o herramienta actual ya da el mismo resultado | Integrarse como material de apoyo o no construir |
| Economía de soporte no escala | Mucho tiempo experto por cuenta o SLA que no se puede cumplir | Recortar alcance, aumentar precio con prueba o enfocar un segmento operativo común |
| El servicio se vuelve un objetivo | Se centralizan contraseñas, e.firma, estados de cuenta o expedientes | No recibir credenciales; procesamiento local/efímero; mínimo acceso, registros visibles y consentimiento específico |
| Consejo equivocado durante incidente | Clasificación incierta o pasos que agravan daño | Mostrar incertidumbre, detener automatización y escalar a humano |
| Desconfianza o canal sesgado | Cliente cree que banco/aseguradora controla su reclamación | Independencia del enrutamiento, explicación de pagador y canal, alternativa de atención directa |
| Afirmación de seguridad excesiva | Mensaje sugiere que el negocio queda “protegido” | Definir cobertura, huecos, fecha de revisión y límites; nunca ofrecer riesgo cero |

## Recomendación

Financiar solo el descubrimiento y un piloto concierge pequeño. El caso estratégico es plausible porque combina tareas previas y posteriores al incidente bajo una suscripción predecible; su validez comercial depende de comprobar pago, canal y costo humano. Mantener el navegador como pieza de respuesta, aunque SME Shield sea el producto principal del blueprint. No escalar ni afirmar retorno hasta tener datos de uso, conversión y costo real.

## Fuentes y límites

- INEGI, [Micro, Pymes y grandes empresas, Censos Económicos 2024](https://www.inegi.org.mx/contenidos/programas/ce/2024/doc/rd_infmpmg_ce24.pdf). Conteos por tamaño; porcentajes redondeados.
- INEGI, [Censos Económicos 2024](https://www.inegi.org.mx/programas/ce/2024/default.html) y [DENUE](https://www.inegi.org.mx/app/mapa/denue/default.aspx?id=9607478). Fuentes para filtrar unidades por actividad y localidad.
- INEGI, [ENVE 2024](https://www.inegi.org.mx/programas/enve/) y [comunicado PDF](https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2024/ENVE/ENVE24.pdf). Encuesta nacional de victimización empresarial; no se usa aquí una tasa específica de demanda cibernética.
- Alejandra S. Inzunza y José Luis Pardo, [“Nos robaron un millón de pesos en un fraude bancario”, EL PAÍS, 1 de junio de 2023](https://elpais.com/mexico/opinion/2023-06-01/nos-robaron-un-millon-de-pesos-en-un-fraude-bancario.html). Testimonio de los autores, no análisis forense.
- CISA, [recursos de ciberseguridad para pequeñas y medianas empresas](https://www.cisa.gov/small-and-medium-sized-business-resources). Benchmark estadounidense gratuito.
- Microsoft, [precios de seguridad para pequeñas y medianas empresas en México](https://www.microsoft.com/es-mx/security/small-medium-business/pricing) y [Defender para Empresas](https://www.microsoft.com/es-mx/security/business/endpoint-security/microsoft-defender-business). Precio público revisado el 1 de octubre de 2026, variable; no incluye el servicio propuesto por Escudo.
- Acronis, [Cyber Protect Cloud para MSP](https://www.acronis.com/es/products/cloud/cyber-protect/) y [respaldo para MSP](https://www.acronis.com/es/products/cloud/cyber-protect/backup/). Oferta del proveedor, no evidencia de adopción local.
- CONDUSEF, [Queja Electrónica](https://tramites.condusef.gob.mx/QuejaElectronica/). Revisar alcance y requisitos para cada usuario/caso.
- Guardia Nacional CERT-MX, [orientación a víctimas de ciberdelito al 088](https://www.gob.mx/gncertmx/articulos/en-caso-de-ser-victima-de-algun-ciberdelito-llama-al-088-atencion-ciudadana). La guía es una ruta de orientación, no garantía de investigación o reparación.
