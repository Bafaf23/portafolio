export function Contacto() {
  const section = document.createElement("section");
  section.id = "contacto";
  // Cambiamos bg-slate-900 por bg-slate-50 para un fondo grisáceo muy suave
  section.className = "py-20 px-6 bg-slate-50 text-slate-900";

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: "fa-brands fa-whatsapp",
      color: "text-green-600",
      link: "https://wa.me/584241736193",
      value: "+58 424 173 6193",
    },
    {
      name: "Instagram",
      icon: "fa-brands fa-instagram",
      color: "text-pink-600",
      link: "https://www.instagram.com/bafaf03/",
      value: "@bafaf03",
    },
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      color: "text-slate-800",
      link: "https://github.com/Bafaf23",
      value: "Bafaf23",
    },
  ];

  section.innerHTML = `
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-black mb-4 bg-linear-to-r from-yellow-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
        ¿Tienes un proyecto en mente?
      </h2>
      <p class="text-slate-600 mb-12 text-lg font-medium">
        Estoy disponible para nuevas oportunidades y colaboraciones en <span class="text-slate-900 font-bold">SIGACE</span> o cualquier idea digital.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${socialLinks
          .map(
            (social) => `
          <a href="${social.link}" target="_blank" 
             class="group p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div class="mb-4 inline-block p-4 rounded-2xl bg-slate-100 group-hover:bg-white transition-colors">
              <i class="${social.icon} text-3xl ${social.color}"></i>
            </div>
            <h3 class="font-bold text-xl mb-1 text-slate-800">${social.name}</h3>
            <p class="text-slate-500 text-sm font-semibold">${social.value}</p>
          </a>
        `,
          )
          .join("")}
      </div>

      <div class="mt-16 p-10 rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/50">
        <h3 class="text-2xl font-black text-slate-900 mb-2">Hablemos por correo</h3>
        <p class="mb-8 text-slate-600">¿Prefieres algo más formal? Envíame un mensaje directo y te responderé pronto.</p>
        <a href="mailto:tu-correo@ejemplo.com" 
           class="inline-block px-12 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-cyan-600 transition-all shadow-lg shadow-slate-300">
          Enviar Email
        </a>
      </div>
    </div>
  `;

  return section;
}
