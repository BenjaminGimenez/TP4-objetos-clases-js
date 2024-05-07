/*
Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y
cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

para tener en cuenta las generaciones:

GENERACION Z: marco temporal: entre 1994 y 2010, poblacion de la generacio: 7.800.000,
circuntancia historica: expacion masica de internet, rasgo caracteristico: irrelevancia


GENERACION Y: Marco temporal: entre 1981 y 1993. poblacion 7.200.000,
circunstancia historica: inicio de la digitalizacion, rasgo caracteriztico: frustracion.

GENERACION X: Marco temporal: entre 1969 y 1980, poblacion: 9.300.000,
circunstancia historica: crisis del 73, rasgo caracteristico: obsesion por el exito.

BABY BOUM: marco temtoral: entre 1949 y 1968, poblacion: 12.200.000,
circunstancia historica: paz y eplosion demografica, rasgo caracteristico: ambicion.

SILENT GENERATION: Marco temporal: entre 1930 y 1948, poblacion 8.300.000,
circunstancia hstorica: conflictos belicos, rasgo caracteristico: austeridad.

*/

class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, nacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }

  mostrarGeneracion(){

    let rasgo;
    let generacion;

    const rango = parseInt(this.nacimiento.split("/")[2]);

    if (rango >= 1994 && rango <= 2010) {

      generacion = 'Generacion Z';
      rasgo = 'irrelevancia';

    }else if (rango >= 1981 && rango <= 1993) {

      generacion = 'Generacion Y';
      rasgo = 'Frustracion';
  
    }else if(rango >= 1969 && rango <= 1980) {

      generacion = 'Generacion X';
      rasgo = 'Obsesion por el exito';

    }else if(rango >= 1949 && rango <= 1968) {
      
      generacion = 'Baby Boum';
      rasgo = 'Ambicion';

    } else if (rango >= 1930 && rango <= 1948) {
      
      generacion = 'Silent Generation';
      rasgo = 'Austeridad';
    }else{

      generacion = 'No pertenece a ninguna generacion conocida';
      rasgo = 'Desconocido'
    }

    console.log(`${this.nombre} pertenece a la ${generacion} y su rasgo es ${rasgo}`)

  }

  esMayorDeEdad(){
    if (this.edad >= 18) {
      console.log(`${this.nombre} es mayor de edad`)
    }else{
      console.log(`${this.nombre} no es mayor de edad`)
    }
    
  }

  mostrarDatos() {
    console.log(
      `Nombre: ${this.nombre}\n Edad: ${this.edad}\n DNI: ${this.DNI}\n Sexo: ${this.sexo}\n Peso:${this.peso}\n Altura:${this.altura}\n Nacimiento:${this.nacimiento}`
    );
  }

  generaDNI(){
    const numero = Math.floor(Math.random() * 90000000) +10000000;
    return numero.toString(); //esto actualiza el dni de la persona
  }
}

const persona1 = new Persona("Benjamin Gimenez",26 ,41059184, "Masculino", 75, 175, "28/02/1998");

const persona2 = new Persona('Belen Castro', 26, 41256897, 'Femenino', 55, 162, '14/02/1998');

const persona3 = new Persona('Luciana Hernadez', 17, 40246897, 'Femenino', 52, 160, '15/07/2003');

const nuevasPersonas = [persona1, persona2, persona3];

nuevasPersonas.forEach(persona => {
  persona.mostrarDatos();
  persona.esMayorDeEdad();
  persona.mostrarGeneracion();
})