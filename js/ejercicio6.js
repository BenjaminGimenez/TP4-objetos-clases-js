/*
*Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro {
  constructor(ISBN, titulo, autor, numPaginas) {
    this._ISBN = ISBN;
    this._titulo = titulo;
    this._autor = autor;
    this._numPaginas = numPaginas;
  }

  //metodos get
  get ISBN() {
    return this._ISBN;
  }

  get titulo() {
    return this._titulo;
  }

  get autor() {
    return this._autor;
  }

  get numPaginas() {
    return this._numPaginas;
  }

  //metodos sett
  set ISBN(newISBN) {
    this._ISBN = newISBN;
  }

  set titulo(newTitulo) {
    this._titulo = newTitulo;
  }

  set autor(newAutor) {
    this._autor = newAutor;
  }

  set numPaginas(newNumPaginas) {
    this._numPaginas = newNumPaginas;
  }

  //información del libro
  mostrarLibro() {
    console.log(
      `El libro ${this._titulo} con ISBN ${this._ISBN} creado por el autor ${this._autor} tiene ${this._numPaginas} páginas`
    );
  }
}

const libro1 = new Libro(
  "978-84-348-6597-4",
  "Harry Potter y la piedra filosofal",
  "J.K. Rowling",
  256
);
const libro2 = new Libro(
  "978-84-450-7110-9",
  "El Señor de los Anillos: La Comunidad del Anillo",
  "J.R.R. Tolkien",
  560
);

libro1.mostrarLibro();
libro2.mostrarLibro();

// Comparar cuál libro tiene más páginas
if (libro1.numPaginas > libro2.numPaginas) {
  console.log(
    `El libro '${libro1.titulo}' tiene más páginas que '${libro2.titulo}'.`
  );
} else if (libro1.numPaginas < libro2.numPaginas) {
  console.log(
    `El libro '${libro2.titulo}' tiene más páginas que '${libro1.titulo}'.`
  );
} else {
  console.log("Ambos libros tienen el mismo número de páginas.");
}
