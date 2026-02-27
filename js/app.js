import { Contacto } from "./components/contacto.js";
import { Educacion } from "./components/educacion.js";
import { Header } from "./components/header.js";
import { Hero } from "./components/hero.js";
import { Proyectos } from "./components/proyectos.js";

const root = document.body;

const main = document.createElement("main");

const header = Header();
const hero = Hero();
const proyectos = Proyectos();
const contacto = Contacto();
const educacion = Educacion();

root.appendChild(header);
root.appendChild(main);
main.appendChild(hero);
main.appendChild(educacion);
main.appendChild(proyectos);
main.appendChild(contacto);

console.log("Header y Hero añadidos al DOM");
