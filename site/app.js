const incidentData = {
  money: {
    title: "Prioriza el canal financiero oficial",
    intro: "La selección solo indica que viste un movimiento no reconocido. Esta demo no revisa cuentas ni confirma fraude.",
    actions: [
      ["Contacta a tu banco por un canal oficial que ya conozcas", "Solicita que te indiquen cómo proteger la cuenta y registrar la operación. No uses un número o enlace recibido en un mensaje sospechoso."],
      ["Anota la secuencia", "Registra fecha, hora, monto aproximado y folio si ya existe. Guarda los originales en tus canales habituales; no los subas aquí."],
      ["Confirma el canal de reclamación", "CONDUSEF puede recibir quejas sobre instituciones financieras cuando el caso entra en su competencia y se acredita la relación contractual. Confirma que tu organización y producto aplican antes de presentar algo."]
    ],
    evidence: ["Fecha y hora aproximadas", "Monto aproximado, si aplica", "Folio de atención, si existe", "Nombre del canal oficial usado"],
    routes: [["Banco / proveedor financiero", "Contactar por canal conocido", "#"], ["CONDUSEF", "Verificar alcance y requisitos", "https://tramites.condusef.gob.mx/QuejaElectronica/"]]
  },
  account: {
    title: "Recupera orientación por una ruta conocida",
    intro: "No podemos saber desde esta pantalla si una cuenta fue tomada. Si afecta correo o acceso administrativo, involucra al responsable de TI.",
    actions: [
      ["Abre el canal oficial por separado", "Usa una dirección que ya conozcas o el contacto documentado por tu organización; no uses enlaces incluidos en el mensaje que generó la duda."],
      ["Contacta a quien administra TI", "Pide revisar la cuenta y los accesos relacionados. La demo no cambiará contraseñas ni revocará sesiones."],
      ["Conserva la notificación original", "Anota cuándo apareció y qué cuenta o servicio parece afectado. No copies contraseñas, códigos ni enlaces privados en este resumen."]
    ],
    evidence: ["Hora en que notaste el cambio", "Servicio o tipo de cuenta", "Aviso recibido, guardado fuera de esta demo", "Contacto del proveedor usado"],
    routes: [["Proveedor de la cuenta", "Usar canal oficial conocido", "#"], ["Proveedor de TI", "Escalar revisión humana", "#"]]
  },
  data: {
    title: "Limita la exposición y escala la evaluación",
    intro: "Una selección no determina si hubo acceso no autorizado ni qué obligaciones aplicarían. Evita compartir el archivo de nuevo mientras confirmas el alcance.",
    actions: [
      ["Involucra a la persona responsable", "Contacta a privacidad, legal o dirección según el proceso de tu organización; pide evaluación profesional del alcance y de las obligaciones que correspondan."],
      ["Registra solo una descripción mínima", "Anota cuándo se detectó y la categoría de información en términos generales. No agregues nombres, muestras de datos ni archivos aquí."],
      ["Pide apoyo técnico si hay un sistema implicado", "Un respondedor humano debe decidir cómo preservar evidencia y limitar accesos sin destruir información útil."]
    ],
    evidence: ["Fecha aproximada de detección", "Categoría general de dato", "Sistema/proveedor relacionado", "Persona responsable ya contactada"],
    routes: [["Responsable interno", "Privacidad / legal / TI", "#"], ["CERT-MX / Guardia Nacional", "Orientación telefónica 088", "https://www.gob.mx/gncertmx/articulos/en-caso-de-ser-victima-de-algun-ciberdelito-llama-al-088-atencion-ciudadana"]]
  },
  system: {
    title: "Protege la continuidad con ayuda técnica humana",
    intro: "Esta demo no puede evaluar qué está bloqueado ni recomendar cambios en el sistema. Evita borrar, reinstalar o restaurar desde este flujo.",
    actions: [
      ["Usa el contacto de respuesta que tu organización ya tenga", "Pide a TI o a tu proveedor que evalúe el sistema y confirme el siguiente paso antes de realizar cambios."],
      ["Describe el efecto en la operación", "Anota qué servicio está indisponible, desde cuándo y qué tareas de negocio se detuvieron. No ingreses detalles técnicos sensibles aquí."],
      ["Avisa a una persona responsable", "Si pagos, correo, producción o atención a clientes dependen de ese sistema, prioriza la decisión de continuidad con operaciones/dirección y un respondedor."]
    ],
    evidence: ["Servicio no disponible", "Hora aproximada de inicio", "Tarea de negocio afectada", "Proveedor o responsable contactado"],
    routes: [["Proveedor de TI", "Evaluación por una persona", "#"], ["CERT-MX / Guardia Nacional", "Orientación telefónica 088", "https://www.gob.mx/gncertmx/articulos/en-caso-de-ser-victima-de-algun-ciberdelito-llama-al-088-atencion-ciudadana"]]
  },
  unsure: {
    title: "Deja lo incierto como incierto",
    intro: "No hay datos suficientes para clasificar lo que viste. Verifica desde un canal independiente antes de tomar una acción que afecte cuentas o sistemas.",
    actions: [
      ["No entregues datos por el mensaje inesperado", "No compartas contraseñas, PIN, e.firma, códigos de recuperación o documentos para “verificar” la señal."],
      ["Comprueba por una ruta conocida", "Busca el contacto oficial del proveedor por separado o consulta al responsable interno. No reenvíes enlaces sospechosos como prueba."],
      ["Pide una revisión humana si sigue la duda", "Describe el tipo de señal y cuándo ocurrió, sin incluir identificadores ni capturas con información privada."]
    ],
    evidence: ["Fecha y canal donde viste la señal", "Tipo general de cuenta/sistema", "Qué falta por confirmar", "Persona a quien pediste revisión"],
    routes: [["Responsable de TI", "Revisión humana", "#"], ["CERT-MX / Guardia Nacional", "Orientación telefónica 088", "https://www.gob.mx/gncertmx/articulos/en-caso-de-ser-victima-de-algun-ciberdelito-llama-al-088-atencion-ciudadana"]]
  }
};

let selectedIncident = "";
const selectedImpacts = () => [...document.querySelectorAll(".impact-options input:checked")].map((input) => input.value);
const escapeText = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const impactsLabel = () => {
  const impacts = selectedImpacts();
  return impacts.length ? `Áreas marcadas: ${impacts.join(" · ")}` : "Área afectada: aún no identificada";
};

const prepareTab = document.querySelector("#tab-prepare");
const incidentTab = document.querySelector("#tab-incident");
const preparePanel = document.querySelector("#prepare-panel");
const incidentPanel = document.querySelector("#incident-panel");

function setMode(mode) {
  const preparing = mode === "prepare";
  preparePanel.hidden = !preparing;
  incidentPanel.hidden = preparing;
  prepareTab.classList.toggle("active", preparing);
  incidentTab.classList.toggle("active", !preparing);
  prepareTab.setAttribute("aria-selected", String(preparing));
  incidentTab.setAttribute("aria-selected", String(!preparing));
  prepareTab.tabIndex = preparing ? 0 : -1;
  incidentTab.tabIndex = preparing ? -1 : 0;
  if (!preparing) incidentTab.focus();
}

prepareTab.addEventListener("click", () => setMode("prepare"));
incidentTab.addEventListener("click", () => setMode("incident"));

[prepareTab, incidentTab].forEach((tab) => tab.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    event.preventDefault();
    const next = tab === prepareTab ? incidentTab : prepareTab;
    setMode(next === prepareTab ? "prepare" : "incident");
    next.focus();
  }
}));

document.querySelectorAll(".choice-card").forEach((button) => {
  button.addEventListener("click", () => {
    selectedIncident = button.dataset.incident;
    document.querySelectorAll(".choice-card").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    document.querySelector("#step-counter").textContent = "PASO 2 DE 2";
    document.querySelector("#impact-step").hidden = false;
    document.querySelector("#plan-card").hidden = true;
    document.querySelector("#impact-step legend").focus();
  });
});

function renderPlan() {
  if (!selectedIncident) return;
  const plan = incidentData[selectedIncident];
  document.querySelector("#plan-title").textContent = plan.title;
  document.querySelector("#plan-intro").textContent = plan.intro;
  document.querySelector("#action-list").innerHTML = plan.actions.map(([title, detail]) => `<li><strong>${escapeText(title)}.</strong> ${escapeText(detail)}</li>`).join("");
  document.querySelector("#evidence-list").innerHTML = plan.evidence.map((item) => `<li>${escapeText(item)}</li>`).join("");
  document.querySelector("#route-links").innerHTML = plan.routes.map(([name, detail, href]) => {
    if (href === "#") return `<div class="route-link" role="note">${escapeText(name)}<span>${escapeText(detail)}</span></div>`;
    return `<a class="route-link" href="${escapeText(href)}" target="_blank" rel="noopener noreferrer">${escapeText(name)}<span>${escapeText(detail)} ↗</span></a>`;
  }).join("");
  document.querySelector("#plan-impacts").textContent = impactsLabel();
  document.querySelector("#plan-card").hidden = false;
  document.querySelector("#plan-card").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelector("#show-plan").addEventListener("click", renderPlan);
document.querySelectorAll(".impact-options input").forEach((input) => input.addEventListener("change", () => {
  if (!document.querySelector("#plan-card").hidden) {
    document.querySelector("#plan-impacts").textContent = impactsLabel();
  }
}));

function startOver() {
  selectedIncident = "";
  document.querySelectorAll(".choice-card").forEach((item) => item.setAttribute("aria-pressed", "false"));
  document.querySelectorAll(".impact-options input").forEach((input) => { input.checked = false; });
  document.querySelector("#step-counter").textContent = "PASO 1 DE 2";
  document.querySelector("#impact-step").hidden = true;
  document.querySelector("#plan-card").hidden = true;
  document.querySelector("#incident-choices").scrollIntoView({ behavior: "smooth", block: "center" });
  document.querySelector(".choice-card").focus();
}

document.querySelector("#start-over").addEventListener("click", startOver);

function makeSummary() {
  const plan = incidentData[selectedIncident];
  if (!plan) return "";
  const impacts = selectedImpacts();
  const date = new Date().toLocaleString("es-MX", { dateStyle: "medium", timeStyle: "short" });
  const steps = plan.actions.map(([title]) => `- ${title}`).join("\n");
  const evidence = plan.evidence.map((item) => `- ${item}`).join("\n");
  const routes = plan.routes.map(([name, detail, href]) => `- ${name}: ${detail}${href === "#" ? "" : ` — ${href}`}`).join("\n");
  const selected = impacts.length ? impacts.join(", ") : "Aún no identificada";
  return `ESCUDO SME SHIELD — RESUMEN DE DEMOSTRACIÓN\nFecha local: ${date}\nSeñal seleccionada: ${plan.title}\nÁreas marcadas: ${selected}\n\nRUTA INICIAL\n${steps}\n\nÍNDICE PARA PREPARAR (no adjuntar evidencia)\n${evidence}\n\nRUTAS QUE PUEDEN APLICAR\n${routes}\n\nLÍMITES\nOrientación educativa; no confirma intrusión ni sustituye atención profesional. No se enviaron datos desde la demo.\n`;
}

document.querySelector("#download-summary").addEventListener("click", () => {
  const summary = makeSummary();
  if (!summary) return;
  const file = new Blob([summary], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = "escudo-resumen-demo.txt";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

document.querySelector("#print-summary").addEventListener("click", () => window.print());

document.querySelector("#ask-ai").addEventListener("click", async () => {
  const output = document.querySelector("#ai-output");
  const button = document.querySelector("#ask-ai");
  button.disabled = true;
  output.textContent = "Solicitando explicación general...";
  try {
    const topic = document.querySelector("#ai-topic").value;
    const response = await fetch("/api/guide", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic })
    });
    if (!response.ok) throw new Error("unavailable");
    const result = await response.json();
    if (result.source !== "gemini-live" || typeof result.explanation !== "string") throw new Error("invalid");
    output.textContent = `Explicación generada por IA (orientación general): ${result.explanation}`;
  } catch {
    output.textContent = "IA no disponible en este entorno. Los puntos de preparación de arriba siguen siendo la guía de esta demo; no se generó ni simuló una respuesta.";
  } finally {
    button.disabled = false;
  }
});

document.querySelector("#check-kev").addEventListener("click", async () => {
  const output = document.querySelector("#kev-output");
  const button = document.querySelector("#check-kev");
  button.disabled = true;
  output.textContent = "Consultando el catálogo público...";
  try {
    const vendor = document.querySelector("#kev-vendor").value;
    const response = await fetch(`/api/kev?vendor=${encodeURIComponent(vendor)}`);
    if (!response.ok) throw new Error("unavailable");
    const result = await response.json();
    if (result.source !== "CISA KEV" || !Array.isArray(result.entries)) throw new Error("invalid");
    const intro = document.createElement("p");
    intro.textContent = `${result.vendor}: ${result.entries.length} entradas recientes en el catálogo público (versión ${result.catalogVersion}). No se inspeccionó ningún sistema de tu organización.`;
    const list = document.createElement("ul");
    result.entries.forEach((entry) => {
      const item = document.createElement("li");
      item.textContent = `${entry.cveID} · ${entry.product} · añadido ${entry.dateAdded}`;
      list.appendChild(item);
    });
    output.replaceChildren(intro, list);
  } catch {
    output.textContent = "La fuente pública no está disponible ahora. No se muestran datos simulados ni se ha revisado tu sistema.";
  } finally {
    button.disabled = false;
  }
});
