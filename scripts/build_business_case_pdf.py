"""Build the Week 8 Escudo business-case review PDF from the current case.

The Markdown case remains the editable source of decisions and evidence. This
script creates a concise reading copy, not a replacement for the full packet.
"""

from pathlib import Path
import sys

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


INK = colors.HexColor("#20353C")
GREEN = colors.HexColor("#0D6657")
MUTED = colors.HexColor("#64726F")
LINE = colors.HexColor("#DCE5DE")
PALE = colors.HexColor("#ECF4EE")
AMBER = colors.HexColor("#FFF1D9")

W, H = letter
PAGE_MARGIN = 45
CONTENT_WIDTH = W - PAGE_MARGIN * 2

STYLES = {
    "kicker": ParagraphStyle(
        "Kicker", fontName="Helvetica-Bold", fontSize=7.8, leading=10,
        textColor=GREEN, spaceAfter=7,
    ),
    "title": ParagraphStyle(
        "Title", fontName="Helvetica-Bold", fontSize=22.5, leading=27,
        textColor=INK, spaceAfter=7,
    ),
    "subtitle": ParagraphStyle(
        "Subtitle", fontName="Helvetica", fontSize=9.8, leading=13.2,
        textColor=MUTED, spaceAfter=15,
    ),
    "heading": ParagraphStyle(
        "Heading", fontName="Helvetica-Bold", fontSize=11.5, leading=14.2,
        textColor=INK, spaceBefore=11, spaceAfter=5,
    ),
    "body": ParagraphStyle(
        "Body", fontName="Helvetica", fontSize=9.2, leading=13.1,
        textColor=INK, spaceAfter=7,
    ),
    "small": ParagraphStyle(
        "Small", fontName="Helvetica", fontSize=8.2, leading=11.3,
        textColor=INK, spaceAfter=5,
    ),
    "tiny": ParagraphStyle(
        "Tiny", fontName="Helvetica", fontSize=7.4, leading=10.2,
        textColor=MUTED,
    ),
    "table_header": ParagraphStyle(
        "TableHeader", fontName="Helvetica-Bold", fontSize=8.0, leading=10.5,
        textColor=colors.white,
    ),
    "table": ParagraphStyle(
        "TableBody", fontName="Helvetica", fontSize=8.0, leading=11,
        textColor=INK,
    ),
}


def p(text, style="body"):
    return Paragraph(text, STYLES[style])


def table(rows, widths, header=True, bg=None):
    processed = []
    for index, row in enumerate(rows):
        style = "table_header" if header and index == 0 else "table"
        processed.append([p(str(cell), style) for cell in row])
    t = Table(processed, colWidths=widths, hAlign="LEFT", repeatRows=1 if header else 0)
    commands = [
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ("GRID", (0, 0), (-1, -1), 0.45, LINE),
    ]
    if header:
        commands.extend([
            ("BACKGROUND", (0, 0), (-1, 0), GREEN),
            ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#F8FAF8")]),
        ])
    elif bg is not None:
        commands.append(("BACKGROUND", (0, 0), (-1, -1), bg))
    t.setStyle(TableStyle(commands))
    return t


def footer(canvas, document):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(PAGE_MARGIN, 37, W - PAGE_MARGIN, 37)
    canvas.setFont("Helvetica", 7.4)
    canvas.setFillColor(MUTED)
    canvas.drawString(PAGE_MARGIN, 24, "Rodrigo Peña de León Pérez  |  Week 8  |  1 octubre 2026")
    canvas.drawRightString(W - PAGE_MARGIN, 24, f"{document.page}")
    canvas.restoreState()


def build(output_path: Path):
    output_path.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(output_path), pagesize=letter, rightMargin=PAGE_MARGIN,
        leftMargin=PAGE_MARGIN, topMargin=42, bottomMargin=51,
        title="Caso de negocio Escudo SME Shield Week 8",
        author="Rodrigo Peña de León Pérez",
        subject="Hipótesis de negocio y corte USER del Blueprint Week 8",
    )
    story = []

    # Page 1 - case and evidence
    story += [
        p("NEGOCIOS INTELIGENTES Y COMERCIO DIGITAL / WEEK 8", "kicker"),
        p("Escudo SME Shield", "title"),
        p("Caso de negocio para validación · Corte USER: navegador de incidentes", "subtitle"),
        table([["Decisión a probar", "SME Shield como servicio administrado en español para continuidad digital; el navegador Breach-Victim entra como modo de respuesta. El blueprint conserva la preferencia de USER y ADVERSARY por Breach-Victim como producto principal."]], [114, CONTENT_WIDTH - 114], header=False, bg=PALE),
        p("El problema que observamos", "heading"),
        p("El equipo plantea que las pequeñas organizaciones necesitan una ruta simple desde un riesgo o incidente hasta una acción segura, porque el trabajo hoy depende de herramientas, proveedores y canales separados. Es una tesis de producto; falta comprobarla con compradores y usuarios."),
        p("El caso publicado de Dromómanos aporta una señal humana concreta: sus autores relataron dos retiros no autorizados cercanos a MXN 500,000 con siete minutos de diferencia, MXN 16,000 restantes y dos horas para registrar el reporte bancario. Consultaron a cinco abogados con estrategias distintas. El relato trata de fraude financiero y recuperación; no determina la causa técnica ni prueba una brecha de datos."),
        p("Mercado inicial y límite de la cifra", "heading"),
        p("INEGI contó 5,468,180 establecimientos en los Censos Económicos 2024: 95.4% micro, 4.5% pymes y 0.2% grandes (porcentajes redondeados). Es contexto económico, no TAM. El recorte para investigación son organizaciones de servicios en CDMX con 11-50 personas, operaciones digitales críticas y sin personal dedicado a seguridad; ese perfil aún no está validado."),
        p("Trabajo por resolver", "heading"),
        p("<b>Usuario:</b> responsable de operaciones/finanzas que necesita saber qué está cubierto, qué corregir primero y a quién recurrir si pagos, correo o sistemas dejan de estar bajo control. <b>Comprador probable:</b> dirección o propiedad. <b>Sustitutos actuales:</b> proveedor de TI, controles existentes, banco, aseguradora, CONDUSEF y orientación de CERT-MX/Guardia Nacional, según el caso."),
        p("Qué diferenciaría el servicio", "heading"),
        p("Pocas mejoras priorizadas antes del incidente, verificación autorizada de respaldos y accesos, y un camino de respuesta con escalamiento humano. La diferenciación debe probarse contra los sustitutos actuales; no depende de añadir IA por sí misma."),
        p("Alternativas comerciales concretas", "heading"),
        p("Microsoft Defender para Empresas ya ofrece protección de dispositivos y respuesta automatizada a organizaciones de hasta 300 usuarios; su página mexicana publica desde USD 2.40 por usuario/mes con pago anual y sin impuestos (revisado el 1 de octubre de 2026). Acronis Cyber Protect Cloud combina respaldo, seguridad y gestión para MSP. El precio de Defender no cubre el servicio humano de Escudo. Hay que preguntar si el MSP actual ya resuelve esa tarea."),
    ]

    story.append(PageBreak())

    # Page 2 - operating and commercial model
    story += [
        p("02 / PRODUCTO Y ECONOMÍA", "kicker"),
        p("Valor y operación propuestos", "title"),
        p("El servicio vende continuidad y orientación clara a un costo mensual predecible. Todavía no hay precio, SLA ni eficacia comprobados.", "subtitle"),
        table([
            ["Momento", "Trabajo del servicio", "Qué medir"],
            ["Inicio", "Inventario breve de cuentas, respaldos y responsables; mostrar cobertura y huecos.", "Tiempo de incorporación y acciones aceptadas."],
            ["Operación", "Priorizar arreglos y realizar comprobaciones autorizadas, incluida restauración de prueba.", "Acciones terminadas, respaldo comprobado y carga del cliente."],
            ["Incidente", "Triage, índice de evidencia, rutas oficiales y escalamiento humano.", "Tiempo a acción segura, derivación correcta y costo de atención."],
        ], [78, 270, CONTENT_WIDTH - 348]),
        p("Cobro y canal", "heading"),
        p("Hipótesis: cuota mensual por organización con alcance y límites explícitos; posible cuota de incorporación. Money debe fijar precio y paquete a partir de costos y pruebas de oferta. Probar distribución por proveedores de TI, asociaciones y asesores de confianza. Bancos o aseguradoras solo si la ruta de ayuda conserva independencia frente al pagador."),
        p("Economía que debe completar Money", "heading"),
        table([
            ["Indicador", "Cálculo con datos observados"],
            ["Ingreso recurrente", "Clientes activos x ingreso mensual medio por cliente"],
            ["Margen bruto", "(Ingreso recurrente - licencias, soporte, monitoreo, respuesta y comisión de canal) / ingreso recurrente"],
            ["Recuperación CAC", "Costo de adquisición / contribución bruta mensual por cliente"],
            ["Equilibrio", "Costo fijo mensual / contribución mensual por cliente"],
        ], [133, CONTENT_WIDTH - 133]),
        p("Riesgos que pueden invalidar el caso", "heading"),
        p("<b>Pago:</b> los dueños no compran antes del daño. <b>Redundancia:</b> su MSP o banco ya resuelve el trabajo. <b>Escala:</b> el tiempo experto supera el ingreso. <b>Confianza:</b> un servicio falso o patrocinado sesga la orientación. <b>Seguridad:</b> acumular evidencia y credenciales crea un nuevo objetivo. Cada riesgo tiene que observarse antes de ampliar integraciones."),
        table([["Regla de diseño", "Sin control autónomo irrestricto; acceso mínimo y visible; aprobación explícita para acciones críticas. No pedir contraseñas, PIN, e.firma o evidencia cruda. Incertidumbre y alto impacto escalan a una persona."]], [111, CONTENT_WIDTH - 111], header=False, bg=AMBER),
    ]

    story.append(PageBreak())

    # Page 3 - tests, role slice, and sources
    story += [
        p("03 / PRUEBA Y SIGUIENTE DECISIÓN", "kicker"),
        p("Qué construir y qué aprender", "title"),
        p("La demo local implementa solo el corte USER. No conecta sistemas ni ejecuta respuesta; sirve para evaluar lenguaje, secuencia y rutas.", "subtitle"),
        table([
            ["Corte Rodrigo USER", "Resultado visible"],
            ["Identificar la señal", "Elegir dinero, cuenta, datos, sistema o incertidumbre sin confirmar una brecha."],
            ["Priorizar", "Mostrar tres acciones generales, límites e indicación de escalamiento humano."],
            ["Preparar evidencia", "Crear un índice local sin nombres, archivos ni números de cuenta."],
            ["Derivar", "Mostrar contacto oficial conocido, CONDUSEF sujeto a requisitos y CERT-MX 088 cuando corresponda."],
        ], [132, CONTENT_WIDTH - 132]),
        p("Prueba en tres etapas", "heading"),
        p("<b>Descubrimiento:</b> 12 organizaciones y 5 posibles canales, con entrevistas sobre incidentes reales, sustitutos, gasto y responsable de compra. Continuar si al menos 6 organizaciones describen una tarea costosa sin resolver, 3 decisores examinan una oferta pagada y 2 canales aceptan presentarla sin controlar la recomendación."),
        p("<b>Piloto concierge:</b> 3 organizaciones, revisión limitada con especialista, consentimiento y sin privilegios permanentes. Continuar solo si hay acciones completadas, al menos 2 clientes pagan la tarifa mostrada, la calidad humana se sostiene y la contribución calculada con costos reales es positiva."),
        p("<b>Escala:</b> estandarizar onboarding, playbooks y umbrales de severidad después del piloto. La IA podría resumir o priorizar trabajo rutinario con revisión humana; no decide cambios críticos."),
        p("Pendientes antes de tratarlo como entrega final del equipo", "heading"),
        p("El PDF de blueprint compartido indica que falta la declaración real del Technologist. Money debe completar precio/costos; Operator, capacidad y escalamiento; Adversary, revisión de suplantación y acceso; USER, entrevistas y pruebas. No hay datos de uso, compra, seguridad o impacto del prototipo."),
        p("Fuentes principales", "heading"),
        p('<link href="https://www.inegi.org.mx/contenidos/programas/ce/2024/doc/rd_infmpmg_ce24.pdf" color="#0D6657">INEGI Censos Económicos 2024</link> · '
          '<link href="https://elpais.com/mexico/opinion/2023-06-01/nos-robaron-un-millon-de-pesos-en-un-fraude-bancario.html" color="#0D6657">Inzunza y Pardo, EL PAÍS 2023</link> · '
          '<link href="https://www.microsoft.com/es-mx/security/small-medium-business/pricing" color="#0D6657">Microsoft precios</link> · '
          '<link href="https://www.acronis.com/es/products/cloud/cyber-protect/" color="#0D6657">Acronis MSP</link> · '
          '<link href="https://www.cisa.gov/small-and-medium-sized-business-resources" color="#0D6657">CISA SMB</link> · '
          '<link href="https://tramites.condusef.gob.mx/QuejaElectronica/" color="#0D6657">CONDUSEF</link> · '
          '<link href="https://www.gob.mx/gncertmx/articulos/en-caso-de-ser-victima-de-algun-ciberdelito-llama-al-088-atencion-ciudadana" color="#0D6657">CERT-MX 088</link>.', "small"),
        p("Base interna: Blueprint Week 8 Team PDF compartido el 1 de octubre de 2026. Los umbrales de validación son decisiones propuestas, no resultados observados.", "tiny"),
    ]

    doc.build(story, onFirstPage=footer, onLaterPages=footer)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("Usage: build_business_case_pdf.py OUTPUT.pdf")
    build(Path(sys.argv[1]))
