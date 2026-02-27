export function Proyectos() {
  const section = document.createElement("section");
  section.id = "proyectos";
  section.className = "animate__animated animate__fadeInUp mt-5 p-3 py-20";

  const proyectos = [
    {
      title: "Instagram Clone",
      img: "https://www.trecebits.com/wp-content/uploads/2022/05/Instagram-nuevo-logo.jpg.webp",
      desc: "Réplica de la red social enfocada en estilos y maquetación.",
      tags: ["SASS", "HTML"],
      link: "https://bafaf23.github.io/clone-instagram/",
      repo: "https://github.com/Bafaf23/clone-instagram",
      favorito: false,
    },
    {
      title: "YouTube Clone",
      img: "https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500",
      desc: "Proyecto ambicioso para profundizar en el manejo de CSS puro.",
      tags: ["CSS", "HTML"],
      link: "https://bafaf23.github.io/youtube-proyec/",
      repo: "https://github.com/Bafaf23/youtube-proyec",
      favorito: false,
    },
    {
      title: "Juego puedra papel o tijera",
      img: "./src/asset/img/juegoppt.jpeg",
      desc: "Juego desarrollado con JS que busca profundicar mis conocimientos en el lenjuage",
      tags: ["Talwindcss", "HTML", "JavaScript"],
      link: "https://bafaf23.github.io/mini-juego_js-PPT/",
      repo: "https://github.com/Bafaf23/mini-juego_js-PPT",
      favorito: false,
    },
    {
      title: "Proyecto final de JavaScript",
      img: "./src/asset/img/RBO.jpeg",
      desc: "Poryecto de app web finanziera. Desarrollado con JS valina.",
      tags: ["SASS", "HTML", "JavaScript"],
      link: "https://github.com/Bafaf23/RBO",
      repo: "https://github.com/Bafaf23/RBO",
      favorito: true,
    },
    {
      title: "Proyecto final de Next.js",
      img: "./src/asset/img/attackontitan.jpg",
      desc: "Profundizar en la tecnologia mas famosa del mercardo, eso es lo que buscamos con este proyecto",
      tags: ["Next.js", "HTML", "JavaScript", "React"],
      link: "https://attakontitan.vercel.app/",
      repo: "https://github.com/Bafaf23/attakontitan",
      favorito: false,
    },
  ];

  section.innerHTML = `
    <div class="flex justify-center bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text p-2 text-3xl font-bold text-transparent">
      <h2>Mis Proyectos</h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-7xl mx-auto">
      ${proyectos
        .map(
          (p) => `
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 ${p.favorito === true ? "border border-cyan-500 shadow-blue-200" : "border border-transparent"}">
          <img src="${p.img}" alt="${p.title}" class="w-full h-48 object-cover">
          <div class="p-6 relative">
          ${p.favorito ? '<span class="absolute -top-4 right-4 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full shadow-sm text-slate-900">⭐ Destacado</span>' : ""}
            <h3 class="text-2xl font-bold text-slate-800 mb-2">${p.title}</h3>
            <p class="text-slate-600 mb-4">${p.desc}</p>
            <div class="flex gap-2 mb-6">
              ${p.tags.map((tag) => `<span class="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">${tag}</span>`).join("")}
            </div>
            <div class="flex justify-between items-center">
              <a href="${p.link}" target="_blank" class="text-cyan-600 font-bold hover:underline">Ver Demo</a>
              <a href="${p.repo}" target="_blank" class="text-slate-400 hover:text-slate-900"><i class="fa-brands fa-github text-xl"></i></a>
            </div>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;

  return section;
}
