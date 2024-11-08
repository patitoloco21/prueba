// session 11
const objeti = {} // Objeto vacío
const persona = {
    nombre: 'Fer',
    apellido: 'Castillo',
    fecha_nacimiento: '',
    saludar: function(){
        return 'Hola, soy  '+this.nombre+' '+this.apellido
    }
}

const persona2 = {
    nombre: 'Fer',
    apellido: 'Castillo',
    fecha_nacimiento: '',
    saludar: function(){
        return 'Hola, soy  '+this.nombre+' '+this.apellido
    }
}
console.log(persona.saludar());

let miArreglo = [];
miArreglo.push(persona);
miArreglo.push(persona2);
console.log(miArreglo);
