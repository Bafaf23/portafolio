export function Hero() {
  const hero = document.createElement(`section`);
  hero.className = `py-10 px-6 bg-gradient-to-b from-white to-slate-50`;

  hero.innerHTML = `
  <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <span class="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-bold rounded-full">
          Disponible para proyectos
        </span>
        
        <h2 class="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
          Diseño y desarrollo <br/> 
          <span class="text-purple-600">experiencias digitales.</span>
        </h2>
        
        <p class="text-lg text-slate-600 max-w-lg">
          Hola, soy <span class="font-bold text-slate-800">Bryant</span>. Desarrollador enfocado en crear soluciones modernas, limpias y funcionales.
        </p>

        <div class="flex flex-wrap gap-4">
          <a href="#proyectos" class="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
            Ver Proyectos
          </a>
          <a href="#contacto" class="px-8 py-4 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-pink-600 hover:text-pink-600 transition-all">
            Hablemos
          </a>
        </div>
      </div>

      <div class="relative">
        <div class="w-full aspect-square bg-orange-600 rounded-3xl rotate-3 absolute inset-0 opacity-10"></div>
        <div class="w-full aspect-square bg-white border border-slate-200 rounded-3xl shadow-2xl relative flex items-center justify-center overflow-hidden">
          <img src="./src/asset/img/Foto-primary.jpg" class="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  `;

  return hero;
}
