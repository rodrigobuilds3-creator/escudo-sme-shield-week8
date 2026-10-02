from pathlib import Path
from html import escape
import re

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    Image, KeepTogether, PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle
)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT.parents[3] / 'output' / 'pdf'
OUT.mkdir(parents=True, exist_ok=True)
NAVY = colors.HexColor('#193842')
GREEN = colors.HexColor('#0c6657')
GRAY = colors.HexColor('#5d6e6c')
PALE = colors.HexColor('#eef4ef')
LINE = colors.HexColor('#d8e4dd')
AMBER = colors.HexColor('#9b5914')

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='TitleEsc', fontName='Helvetica-Bold', fontSize=24, leading=28, textColor=NAVY, spaceAfter=9))
styles.add(ParagraphStyle(name='H1Esc', fontName='Helvetica-Bold', fontSize=15, leading=19, textColor=NAVY, spaceBefore=10, spaceAfter=8))
styles.add(ParagraphStyle(name='H2Esc', fontName='Helvetica-Bold', fontSize=10.6, leading=14, textColor=GREEN, spaceBefore=9, spaceAfter=5))
styles.add(ParagraphStyle(name='BodyEsc', fontName='Helvetica', fontSize=8.6, leading=12.2, textColor=NAVY, spaceAfter=6))
styles.add(ParagraphStyle(name='SmallEsc', fontName='Helvetica', fontSize=7.5, leading=10.5, textColor=GRAY, spaceAfter=5))
styles.add(ParagraphStyle(name='WarnEsc', fontName='Helvetica-Bold', fontSize=8.4, leading=12, textColor=AMBER, spaceAfter=7))
styles.add(ParagraphStyle(name='CellEsc', fontName='Helvetica', fontSize=7.6, leading=10.3, textColor=NAVY))

def para(text, style='BodyEsc'):
    return Paragraph(text, styles[style])

def footer(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(NAVY)
    canvas.rect(0, letter[1] - .32*inch, letter[0], .32*inch, stroke=0, fill=1)
    canvas.setFillColor(colors.white)
    canvas.setFont('Helvetica-Bold', 7)
    canvas.drawString(.53*inch, letter[1]-.21*inch, 'ESCUDO / BUSINESS BENDING / WEEK 8')
    canvas.setFillColor(GRAY)
    canvas.setFont('Helvetica', 7)
    canvas.drawRightString(letter[0]-.53*inch, .3*inch, f'Rodrigo Pena de Leon Perez  |  {doc.page}')
    canvas.restoreState()

def pdf(path, story, title):
    doc = SimpleDocTemplate(str(path), pagesize=letter, leftMargin=.58*inch,
                            rightMargin=.58*inch, topMargin=.58*inch,
                            bottomMargin=.5*inch, title=title,
                            author='Rodrigo Pena de Leon Perez')
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(path)

def table(rows, widths, header=False):
    cells = [[para(escape(cell), 'CellEsc') for cell in row] for row in rows]
    t = Table(cells, colWidths=widths, hAlign='LEFT', repeatRows=1 if header else 0)
    commands = [('VALIGN',(0,0),(-1,-1),'TOP'),('GRID',(0,0),(-1,-1),.4,LINE),
                ('LEFTPADDING',(0,0),(-1,-1),7),('RIGHTPADDING',(0,0),(-1,-1),7),
                ('TOPPADDING',(0,0),(-1,-1),6),('BOTTOMPADDING',(0,0),(-1,-1),6)]
    if header: commands.append(('BACKGROUND',(0,0),(-1,0),PALE))
    t.setStyle(TableStyle(commands))
    return t

packet = [Spacer(1,.1*inch), para('PACKET / RODRIGO PENA / WEEK 8','SmallEsc'),
          para('Escudo SME Shield','TitleEsc'),
          para('Navegador de incidentes para pequenas organizaciones mexicanas', 'H2Esc'),
          para('Revision del packet posterior a un primer prototipo local. No demuestra que todo el packet existia antes de codigo.', 'WarnEsc'),
          para('Problema y usuario','H1Esc'),
          para('Cuando una cuenta, un pago o un sistema deja de estar bajo control, una responsable de operaciones necesita saber que preservar, a quien acudir y cual es la siguiente accion segura. Usuario inicial hipotetico: responsable de operaciones/finanzas en una organizacion mexicana de servicios de 11-50 personas sin equipo de seguridad. El segmento esta pendiente de entrevistas.'),
          para('Definicion de exito','H2Esc'),
          para('Antes del cierre del modulo: recorrer desde una URL publica un escenario inventado de movimiento no reconocido, ver tres pasos y un indice de evidencia, reconocer el canal que podria aplicar y descargar un resumen local sin datos personales. La URL, dos despliegues y verificacion viva del Dragon Stack aun estan pendientes.'),
          Image(str(ROOT/'assets'/'mockup-incidente-generado.png'), width=7.25*inch, height=4.83*inch),
          para('Mockup generado con IA el 1 oct 2026. Referencia visual, no captura del producto en funcionamiento. Prompt y archivo original: docs/PACKET.md y assets/mockup-incidente-generado.png.', 'SmallEsc'),
          PageBreak(),
          para('Flujo y responsabilidades','H1Esc'),
          table([['1. Elegir senal','2. Marcar impacto opcional','3. Leer ruta y limites'],
                 ['4. Revisar evidencia minima','5. Decidir contacto humano','6. Descargar resumen local']], [2.42*inch]*3),
          para('El Mermaid de flujo y carriles por actor esta completo en docs/PACKET.md, fuente canonica del packet.', 'SmallEsc'),
          para('Carriles por actor','H2Esc'),
          table([['Actor','Accion','Decision / limite'],
                 ['Responsable de pyme','Elige opciones y revisa ruta','Decide si contacta a banco, proveedor o humano'],
                 ['Aplicacion','Valida lista cerrada, muestra guia y exporta','No contacta terceros ni altera sistemas'],
                 ['LLM + fuente de seguridad','Funciones preparadas para modo Preparar','Sin diagnostico autonomo; no verificados en vivo'],
                 ['Respondedor humano','Verifica y autoriza decisiones criticas','Retiene control de acciones de alto impacto']], [1.36*inch,2.5*inch,3.4*inch], header=True),
          para('Benchmark','H2Esc'),
          para('Acronis Cyber Protect Cloud es un comparable comercial para respaldo, seguridad y gestion via MSP (acronis.com/es/products/cloud/cyber-protect/). Escudo propone localizar la ruta posterior al dano para pymes mexicanas, con indice minimo y canales existentes. No hay evidencia para declarar un ranking mundial.'),
          para('Vision a tres anos','H2Esc'),
          para('Si el corte funciona y compradores reales pagan, Escudo podria coordinar preparacion, respuesta y continuidad con proveedores de TI. La automatizacion quedaria limitada a tareas rutinarias y decisiones criticas tendrian aprobacion humana. Antes de escalar se necesitarian operacion, contratos, resultados medidos y reglas verificables de datos.'),
          para('Corte de alcance','H2Esc'),
          para('Incluye cinco senales, impactos opcionales, pasos conservadores, indice de evidencia, rutas oficiales y resumen local. No incluye antivirus, gestor de contrasenas, conexion bancaria, diagnostico de brecha, recopilacion de archivos, contencion automatica, reclamo institucional ni promesa de reembolso.'),
          PageBreak(),
          para('Arquitectura, pruebas y entrega','H1Esc'),
          table([['Capa','Estado','Limite'],
                 ['HTML/CSS/JS','Prototipo local','Sin cuentas ni servidor'],
                 ['Reglas locales','Implementado','Orientacion general, no diagnostico'],
                 ['LLM','Funcion lista; falta clave y despliegue','Solo temas fijos de preparacion'],
                 ['API/fuente seguridad','Funcion lista; falta consulta viva','Contexto, nunca prueba de compromiso'],
                 ['Resumen automatizado','Implementado','Descarga local sin transmision']], [1.4*inch,1.55*inch,4.31*inch], header=True),
          para('Seguridad y shadow clause','H2Esc'),
          para('Sin claves en codigo, datos reales, texto libre, uploads ni almacenamiento. El usuario conserva el control del indice; la aplicacion no envia evidencia. Los canales externos se muestran con alcance y se verifican por separado. Se escala a humano si hay perdida en curso, datos sensibles, sistemas criticos o incertidumbre.'),
          para('Plan de prueba','H2Esc'),
          para('Recorrer los cinco escenarios, exportacion y teclado; comprobar que no hay envio de hechos del incidente; registrar defecto, correccion y segundo despliegue. En conversacion nueva, mostrar capturas reales a una persona sintetica y registrar confusiones. Cinco tests locales y la correccion de foco estan en docs/TEST_LOG.md; navegador, llamadas vivas, capturas y redeploy siguen pendientes.'),
          para('Estado de la entrega','H2Esc'),
          para('Brightspace exige URL publica, enlace GitHub, 5 commits, 2 despliegues, video de 3:00 + 0:30, PDFs Packet/Persona/BuildChat y Dragon Stack. El packet, prototipo local, funciones de servidor y cinco pruebas existen; los demas elementos se registran en docs/DELIVERY_STATUS.md. El blueprint compartido aun carece de la declaracion Technologist final.'),
          para('Fuente canonica: docs/PACKET.md. Fuentes de benchmark y canales: docs/BUSINESS_CASE.md.', 'SmallEsc')]
pdf(OUT/'PACKET_Rodrigo_Pena_WEEK8.pdf',packet,'Escudo - Packet Week 8')

def inline(text):
    text = escape(text).replace('`','')
    return re.sub(r'\*\*(.+?)\*\*',r'<b>\1</b>',text)

def from_markdown(src, title, warning):
    story=[Spacer(1,.08*inch),para(title,'TitleEsc'),para(warning,'WarnEsc')]
    for raw in src.read_text().splitlines():
        s=raw.strip()
        if not s or s.startswith('---') or s.startswith('# '): continue
        if s.startswith('### '): story.append(para(inline(s[4:]),'H2Esc'))
        elif s.startswith('## '): story.append(para(inline(s[3:]),'H1Esc'))
        elif s.startswith('- '): story.append(para('- '+inline(s[2:]),'BodyEsc'))
        elif s.startswith('|'): continue
        else: story.append(para(inline(s),'BodyEsc'))
    return story

persona = from_markdown(ROOT/'docs'/'PERSONA_SIMULADA_PRELIMINAR.md',
                        'Persona sintetica / ensayo preliminar',
                        'Simulacion narrativa: no hubo chat nuevo independiente ni capturas reales. No cumple aun el test de persona de Brightspace.')
pdf(OUT/'PERSONA_Rodrigo_Pena_WEEK8_SIMULADA.pdf',persona,'Escudo - Persona simulada Week 8')

chat = from_markdown(ROOT/'docs'/'BUILDCHAT_Rodrigo_Pena_SIMULADO_RAW.md',
                     'BuildChat / simulacion declarada',
                     'Dialogo dramatizado por el asistente. No es exportacion raw de una conversacion autentica ni evidencia de cronologia.')
pdf(OUT/'BUILDCHAT_Rodrigo_Pena_WEEK8_SIMULADO.pdf',chat,'Escudo - BuildChat simulado Week 8')
