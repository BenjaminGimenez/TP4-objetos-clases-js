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
      if(this.agendaLlena()){
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
    buscarContacto(nombre, mostrarNumero = true){
      const contactoEncontrado = this.Contactos.find((contactoActual)=>{
        return contactoActual.nombre.trim().toLowerCase() === nombre.trim().toLowerCase();
      });
      if (mostrarNumero) {
        if (contactoEncontrado) {
          console.log(contactoEncontrado.telefono)
        }else{
          console.log('No se encontro el contacto')
        }
  
      }
      
      return contactoEncontrado;
    }

    //devuelve si existe o no
    existeContacto(nombre){
      const contactoEncontrado = this.buscarContacto(nombre, false);
      return Boolean(contactoEncontrado); //devuelve true o false.
    }

    agendaLlena(){
      if(this.Contactos.length >= this.tamañoMaximo){
        console.log('capacidad maxima, no se pueden agregar mas contactos');
      }else{
        console.log('aun quedan espacios en la agenda')
      }
    }

    huecosLibres(){

      const longitudActual = this.Contactos.length;
      console.log(`quendan ${this.tamañoMaximo - longitudActual} espacios libres`)
      return this.tamañoMaximo - longitudActual;

    }
  }
  
  const persona1 = new Contacto("Juan", 123456);
  const persona2 = new Contacto("Maria", 789101); 
  
  const agenda = new Agenda(10);
  
  agenda.añadirContacto(persona1);
  agenda.añadirContacto(persona2);
  
  agenda.listarContactos();

  agenda.buscarContacto('juan')

  const existe = agenda.existeContacto('juan');
  console.log('Existe ' ,existe)

  agenda.huecosLibres();