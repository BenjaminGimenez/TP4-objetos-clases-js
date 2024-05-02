/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho,
mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

*/

class Rectangulos {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modificar(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  mostrarPropiedades() {
    console.log(`alto: ${this.alto} - ancho: ${this.ancho}`);
  }

  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}

const nuevoRectangulo = new Rectangulos (10, 20)

nuevoRectangulo.mostrarPropiedades();

nuevoRectangulo.modificar(5, 15)

nuevoRectangulo.mostrarPropiedades();

console.log("Perímetro:", nuevoRectangulo.calcularPerimetro());
console.log("Área:", nuevoRectangulo.calcularArea());