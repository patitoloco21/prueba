import {Mascota} from "./Mascota.js";
import { Boton } from "./boton.js";

const firu = new Mascota('Firulais', 'perro');
const michi = new Mascota('Michi', 'Gato');
console.log(firu.saludar());
console.log(michi.saludar());

const btn1 = new Boton('Eliminar', 'danger', 'btn1', 'btnEliminar');
var div1 = document.querySelector('#div1');
div1.innerHTML = btn1.mostrar();
 