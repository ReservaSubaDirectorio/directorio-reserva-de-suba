(function () {
  const cfg = window.RDS_CONFIG || {};

  const DIR = [
    {
      id: "admin",
      ico: "🏢",
      titulo: "Administración del conjunto",
      resumen: "PQRS",
      tags: "administracion conjunto consejo queja correo telefono whatsapp",
      nota: "Atención presencial o por teléfono en el horario indicado.",
      filas: [
        { etiqueta: "Correo", valor: cfg.administracion?.email || "reservadesubaque@outlook.com", tel: null },
        { etiqueta: "Teléfono y WhatsApp", valor: cfg.administracion?.telefono || "3194090958", tel: cfg.administracion?.telefono || "3194090958" },
        { etiqueta: "Horarios de atención presencial o por teléfono", valor: cfg.administracion?.horario || "Lunes a viernes, 8:00 a.m. a 5:00 p.m.", tel: null }
      ]
    },
    {
      id: "porteria",
      ico: "🚪",
      titulo: "Portería y control",
      resumen: "Ingreso, domiciliarios, minuta",
      tags: "porteria vigilancia ingreso visita paquete telefono whatsapp",
      nota: "Ante riña o hurto, avise a vigilancia y marque 123.",
      filas: [
        { etiqueta: "Teléfono y WhatsApp", valor: cfg.porteria?.principal || "3123116210", tel: cfg.porteria?.principal || "3123116210" },
        { etiqueta: "Horario", valor: cfg.porteria?.horario || "24 horas", tel: null }
      ]
    },
    {
      id: "emergencias",
      ico: "🚨",
      titulo: "Emergencias Bogotá",
      resumen: "Policía, Bomberos y ambulancia",
      tags: "123 emergencia hurto riña incendio accidente",
      nota: "Desde cualquier celular. Diga el nombre del conjunto, la torre y el apartamento.",
      filas: [
        { etiqueta: "Línea única de emergencias", valor: "123", tel: "123" },
        { etiqueta: "Policía (línea directa)", valor: "112", tel: "112" },
        { etiqueta: "Bomberos", valor: "119", tel: "119" },
        { etiqueta: "Ambulancia / CRUE", valor: "125", tel: "125" },
        { etiqueta: "Cruz Roja", valor: "132", tel: "132" }
      ]
    },
    {
      id: "policia",
      ico: "🚓",
      titulo: "Policía y seguridad",
      resumen: "Hurto, riña, sospechosos, GAULA",
      tags: "policia cai hurto seguridad gaula fiscalia",
      nota: "Si está ocurriendo ahora, marque 123 o al CAI mas cercano",
      filas: [
        { etiqueta: "Emergencia", valor: "123", tel: "123" },
        { etiqueta: "GAULA (extorsión / secuestro)", valor: "165", tel: "165" },
        { etiqueta: "Fiscalía", valor: "122", tel: "122" },
        { etiqueta: "CAI más cercano", valor: "3008051435", tel: "3008051435" }
      ]
    },
    {
      id: "bomberos",
      ico: "🚒",
      titulo: "Bomberos e IDIGER",
      resumen: "Incendio, gas, inundación, riesgo estructural",
      tags: "bomberos fuego gas idiger inundacion sismo",
      nota: "Cierre la llave de gas si hay olor. No use fósforos ni interruptores.",
      filas: [
        { etiqueta: "Bomberos Bogotá", valor: "119", tel: "119" },
        { etiqueta: "Emergencia integrada", valor: "123", tel: "123" },
        { etiqueta: "IDIGER (riesgo y desastre)", valor: "123", tel: "123" }
      ]
    },
    {
      id: "salud",
      ico: "🏥",
      titulo: "Salud y urgencias",
      resumen: "Ambulancia, envenenamiento, accidente, hospital de referencia",
      tags: "salud ambulancia hospital suba medico veneno",
      nota: "Hospital de Suba es la referencia de la localidad. En urgencia vital use 123.",
      filas: [
        { etiqueta: "Ambulancia", valor: "123 / 125", tel: "123" },
        { etiqueta: "Cruz Roja", valor: "132", tel: "132" }
      ]
    },
    {
      id: "animales",
      ico: "🐾",
      titulo: "Protección animal",
      resumen: "Maltrato, abandono o animal herido",
      tags: "animal mascota perro gato maltrato idpyba",
      nota: "Si el animal está en riesgo vital o el maltrato es en este momento, 123. El correo del IDPYBA es solo para reportar y hacer seguimiento.",
      filas: [
        { etiqueta: "Flagrancia o urgencia vital", valor: "123", tel: "123" },
        { etiqueta: "Correo IDPYBA", valor: "proteccionanimal@animalesbog.gov.co", tel: null }
      ]
    },
    {
      id: "mujer",
      ico: "💜",
      titulo: "Violencia y protección",
      resumen: "Mujer, familia, niñas y niños",
      tags: "mujer violencia purpura icbf familia ninos 155",
      nota: "Si hay agresión en curso, 123. La Línea Púrpura orienta; no reemplaza la denuncia ni la emergencia.",
      filas: [
        { etiqueta: "Peligro inminente", valor: "123", tel: "123" },
        { etiqueta: "Línea Púrpura Bogotá", valor: "01 8000 112 137", tel: "018000112137" },
        { etiqueta: "Línea nacional 155", valor: "155", tel: "155" },
        { etiqueta: "ICBF (niñez)", valor: "141", tel: "141" }
      ]
    },
    {
      id: "servicios",
      ico: "💡",
      titulo: "Servicios públicos",
      resumen: "Luz, agua, gas y daños en redes",
      tags: "luz agua gas enel acueducto vanti energia fuga",
      nota: "Fuga de gas: no encienda luces, abra ventanas, salga y marque Bomberos / 123 y la línea del gas.",
      filas: [
        { etiqueta: "Gas (Vanti / emergencia)", valor: "164", tel: "164" },
        { etiqueta: "Energía (Enel / emergencia )", valor: "115", tel: "115" },
        { etiqueta: "Acueducto y alcantarillado (EAAB)", valor: "116", tel: "116" }
      ]
    },
    {
      id: "alcaldia",
      ico: "🏛️",
      titulo: "Alcaldía Local de Suba",
      resumen: "Trámites de localidad y espacio público",
      tags: "alcaldia suba localidad 195 gobierno",
      nota: "Línea 195 es información de trámites del Distrito, no emergencias.",
      filas: [
        { etiqueta: "Sede", valor: "Calle 146 C Bis No. 90-57", tel: null },
        { etiqueta: "Teléfonos", valor: "(601) 382 0660", tel: "6013820660" },
        { etiqueta: "Línea Distrito", valor: "195", tel: "195" },
        { etiqueta: "Horario", valor: "Lun a vie 7:00 a.m. a 4:30 p.m.", tel: null }
      ]
    }
  ];

  const list = document.getElementById("list");
  const q = document.getElementById("q");
  const interno = document.getElementById("interno");
  const manualBtn = document.getElementById("manualBtn");

  function filasHTML(filas) {
    return `<ul class="rows">${filas.map((f) => {
      const right = f.tel
        ? `<a class="btn btn-call" href="tel:${f.tel}">Llamar ${f.valor}</a>`
        : `<span>${f.valor}</span>`;
      return `<li><b>${f.etiqueta}</b>${right}</li>`;
    }).join("")}</ul>`;
  }

  function render(filtro) {
    const t = (filtro || "").trim().toLowerCase();
    list.innerHTML = DIR.map((d) => {
      const blob = (d.titulo + " " + d.resumen + " " + d.tags).toLowerCase();
      const hide = t && !blob.includes(t);
      return `<article class="item" data-id="${d.id}" ${hide ? "hidden" : ""}>
        <button class="item-btn" type="button" aria-expanded="false">
          <span class="ico">${d.ico}</span>
          <span><strong>${d.titulo}</strong><small>${d.resumen}</small></span>
          <span class="chev">▾</span>
        </button>
        <div class="panel">
          <p class="note">${d.nota}</p>
          ${filasHTML(d.filas)}
        </div>
      </article>`;
    }).join("");
  }

  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".item-btn");
    if (!btn) return;
    const item = btn.parentElement;
    const open = item.classList.contains("open");
    list.querySelectorAll(".item").forEach((el) => {
      el.classList.remove("open");
      el.querySelector(".item-btn").setAttribute("aria-expanded", "false");
    });
    if (!open) {
      item.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }
  });

  q.addEventListener("input", () => render(q.value));
  render("");

  interno.innerHTML = `
    <article class="card">
      <h3>Administración</h3>
      <p>${cfg.administracion?.nombre || ""}</p>
      <p>${cfg.administracion?.horario || ""}</p>
      <p>Correo: ${cfg.administracion?.email || "reservadesubaque@outlook.com"}</p>
      <p>Teléfono: ${cfg.administracion?.telefono || "3194090958"}</p>
    </article>
    <article class="card">
      <h3>Portería</h3>
      <p>Horario: ${cfg.porteria?.horario || "24 horas"}</p>
      <p>Teléfono: ${cfg.porteria?.principal || "3123116210"}</p>
      <p>Dirección del conjunto: ${cfg.direccion || "Carrera 145 #150-64 · Localidad de Suba"}</p>
    </article>`;

  const url = cfg.manualConvivenciaUrl || "#manual";
  manualBtn.href = url;
  if (url === "#manual") {
    manualBtn.addEventListener("click", (ev) => {
      ev.preventDefault();
      alert("Cuando tenga el PDF o el enlace del manual, se pega en config.js (manualConvivenciaUrl) y este botón abre el documento.");
    });
  }
})();
