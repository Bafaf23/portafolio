export function Educacion() {
  const section = document.createElement("section");
  section.id = "educacion";
  section.className = "py-20 px-6 bg-white";

  // Datos definidos estrictamente dentro de la función
  const techStack = [
    { name: "React", icon: "fa-brands fa-react", color: "text-blue-500" },
    { name: "Tailwind", icon: "fa-solid fa-wind", color: "text-cyan-400" },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-500" },
    { name: "Node.js", icon: "fa-brands fa-node-js", color: "text-green-600" },
    { name: "SASS", icon: "fa-brands fa-sass", color: "text-pink-500" },
    { name: "Git", icon: "fa-brands fa-git-alt", color: "text-orange-600" },
    { name: "Next.js", icon: "fa-solid fa-n", color: "text-black" },
    { name: "Python", icon: "fa-brands fa-python", color: "text-blue-500" },
    { name: "Cursor", icon: "fa-solid fa-c", color: "text-black" },
    { name: "GitHub", icon: "fa-brands fa-github", color: "text-gray-500" },
  ];

  console.log("Cargando tecnologías en bryant:", techStack.length);

  section.innerHTML = `
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-black text-slate-800">
          Educación y <span class="text-indigo-600">Tecnologías</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <div class="space-y-8">
          <h3 class="text-2xl font-bold text-slate-700 flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap"></i> Formación
          </h3>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <span class="text-indigo-600 font-bold text-sm">2025 - 2026</span>
            <h4 class="text-xl font-black text-slate-900">Desarrollador Full Stack</h4>
            <p class="text-slate-600">Lexpin Academy</p>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-slate-700 mb-8 flex items-center gap-2">
            <i class="fa-solid fa-code"></i> Stack Tecnológico
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            ${techStack
              .map(
                (tech) => `
              <div class="flex flex-col items-center p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all">
                <i class="${tech.icon} ${tech.color} text-3xl mb-2"></i>
                <span class="font-bold text-slate-700 text-xs">${tech.name}</span>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>

      </div>
    </div>
  `;

  return section;
}
