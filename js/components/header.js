export function Header() {
  const header = document.createElement(`header`);
  header.className = `bg-white border-b border-slate-200 px-6 py-4 shadow-sm sticky top-0 z-100`;

  header.innerHTML = `
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold">D</span>
        </div>
        <h1 class="text-xl font-bold text-slate-800 tracking-tight">BRYANT</h1>
      </div>

      <nav class="hidden md:flex items-center gap-6">
        <a href="#" class="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Inicio</a>
        <a href="#educacion" class="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Educacion</a>
        <a href="#proyectos" class="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Poryecto</a>
         <a href="#contacto" class="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Contacto</a>
      </nav>
    </div>
  `;

  return header;
}
