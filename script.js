// Cambia aquí el número de WhatsApp (52 + 10 dígitos, sin espacios ni signos)
const NUMERO = "524881494823";
const wa = t => `https://wa.me/${NUMERO}?text=${encodeURIComponent(t)}`;

// Todos los botones con data-wa abren WhatsApp con ese mensaje
document.querySelectorAll("[data-wa]").forEach(a => {
  a.href = wa(a.dataset.wa);
  a.target = "_blank";
  a.rel = "noopener";
});

// Filtro de la galería
const botones = document.querySelectorAll(".f button");
botones.forEach(b => b.addEventListener("click", () => {
  botones.forEach(x => x.setAttribute("aria-pressed", x === b));
  document.querySelectorAll(".gal figure").forEach(f => {
    f.hidden = b.dataset.f !== "todo" && f.dataset.c !== b.dataset.f;
  });
}));

// El formulario arma el mensaje y lo envía por WhatsApp
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const d = new FormData(e.target);
  const fecha = d.get("fecha") || "por definir";
  open(wa(`Hola, soy ${d.get("nombre")}. Quiero agendar: ${d.get("servicio")}. Fecha deseada: ${fecha}. ${d.get("mensaje") || ""}`), "_blank");
});
