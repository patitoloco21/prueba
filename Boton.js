export class Boton {
    texto;
    color;
    id;
    name; // Define la propiedad name correctamente
    constructor(t, c, i, n) {
        this.texto = t;
        this.color = c;
        this.id = i;
        this.name = n; // Asigna el valor de n a this.name
    }
    mostrar() {
        return '<button id="' + this.id + '" name="' + this.name + '" class="btn btn-' + this.color + '">' + this.texto + '</button>';
    }
}
