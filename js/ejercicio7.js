/*
Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono.
Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas,
 indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

*/

class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
  class Agenda {
    constructor(tamañoMaximo = 10) {
      this.tamañoMaximo = tamañoMaximo;
      this.Contactos = []; // Idealmente debería usar camelCase: `this.contactos`
    }
  
    añadirContacto(contacto) {
      if (this.Contactos.length < this.tamañoMaximo) {
        this.Contactos.push(contacto);
      } else {
        console.log("Agenda llena, no se puede añadir más contactos.");
      }
    }
  
    listarContactos() {
      console.log("Listado de contactos:");
      let mensaje = "";
      this.Contactos.forEach((contacto, index) => {
        mensaje += `${index + 1}: ${contacto.nombre} - ${contacto.telefono}\n`; // Corregido '/n' por '\n'
      });
      console.log(mensaje);
    }
  }
  
  const persona = new Contacto("Juan", 123456); // Cambié 'juan' por 'Juan' para mantener la consistencia en la capitalización
  
  const agenda = new Agenda(15);
  
  agenda.añadirContacto(persona);
  
  agenda.listarContactos();
