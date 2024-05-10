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
    if (this.agendaLlena(false)) {
      console.error("agenda llena");
      return;
    }
    this.Contactos.push(contacto);
  }

  listarContactos() {
    console.log("Listado de contactos:");
    let mensaje = "";
    this.Contactos.forEach((contacto, index) => {
      mensaje += `${index + 1}: ${contacto.nombre} - ${contacto.telefono}\n`;
    });
    console.log(mensaje);
  }

  //devuelve el contaco si es que lo encuentra
  buscarContacto(nombre, mostrarNumero = true) {
    const contactoEncontrado = this.Contactos.find((contactoActual) => {
      return (
        contactoActual.nombre.trim().toLowerCase() ===
        nombre.trim().toLowerCase()
      );
    });
    if (mostrarNumero) {
      if (contactoEncontrado) {
        console.log(contactoEncontrado.telefono);
      } else {
        console.log("No se encontro el contacto");
      }
    }

    return contactoEncontrado;
  }

  //devuelve si existe o no
  existeContacto(nombre) {
    const contactoEncontrado = this.buscarContacto(nombre, false);
    return Boolean(contactoEncontrado); //devuelve true o false.
  }

  agendaLlena(mostrarMensaje = true) {
    const estaLLena = this.Contactos.length >= this.tamañoMaximo;
    44;

    if (mostrarMensaje) {
      if (estaLLena) {
        console.log("capacidad maxima, no se pueden agregar mas contactos");
      } else {
        console.log("aun quedan espacios en la agenda");
      }
    }
    return estaLLena;
  }

  huecosLibres() {
    const longitudActual = this.Contactos.length;
    console.log(
      `quendan ${this.tamañoMaximo - longitudActual} espacios libres`
    );
    return this.tamañoMaximo - longitudActual;
  }

  eliminarContacto(nombre) {
    this.Contactos.indexOf((contactoActual) => {
      return (
        contactoActual.nombre.trim().toLowerCase() ===
        nombre.trim().toLowerCase()
      );
    });

    if (inidice === -1) {
      console.log(`no se encontro el contacto ${Contacto}`);
      return;
    } else {
      console.log(`eliminando contacto ${nombre}`);
    }

    this.Contactos.splice(inidice, 1);
  }
}

/*
  const persona1 = new Contacto("Juan", 123456);
  const persona2 = new Contacto("Maria", 789101); 
  
 
  
  agenda.añadirContacto(persona1);
  agenda.añadirContacto(persona2);
  
  agenda.listarContactos();

  agenda.buscarContacto('juan')

  const existe = agenda.existeContacto('juan');
  console.log('Existe ' ,existe)

  agenda.huecosLibres();
  */
const tamaño = Number(prompt('ingrese el tamano de la agenda'))
const agenda = new Agenda(10);

let salir = false;
do {
  const respuesta = prompt(`Bienvenidos a la agenda
  
  1. Añadir un contacto
  2. Listar contactos
  3. Eliminar contacto
  4. Buscar contacto por nombre
  5. Averiguar si un contacto existe por nombre
  6. Ver si agenda esta llena
  7. Ver lugares disponibles en agenda
  8. Salir`);

  switch (respuesta) {
    case "1":
      const nombrePersona = prompt("ingrese el nombre de la persona");
      const numeroTelefono = prompt("ingrese el numero de la persona");

      const contacto = new Contacto(nombrePersona, numeroTelefono);
      agenda.añadirContacto(contacto);
      break;

    case "2":
      agenda.listarContactos();
      break;
    case "3":
      const nombreEliminar = prompt("ingrese el nombre");
      agenda.eliminarContacto(nombreEliminar);
      break;

    case "4":
      const nombreBuscar = prompt("ingrese el nombre");
      agenda.buscarContacto(nombreBuscar);
      break;

    case "5":
      const nombreExiste = prompt("ingrese el nombre");
      agenda.existeContacto(nombreExiste);
      break;

    case "6":
      agenda.agendaLlena();
      break;

    case "7":
      agenda.huecosLibres();
      break;

    case "8":
    case null:
      salir = true;
      break;
    default:
      console.log("ingrese una opcion valida");
  }
} while (salir === false);
