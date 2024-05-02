/*
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado.
Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();
objeto.apadar()

*/

const auto = {
    color: 'rojo',
    marca: 'Mercedes Benz',
    modelo: 'AMG GT',
    encendido: false,

    encender() {
        if (!this.encendido) { 
            this.encendido = true; 
            console.log('El auto está encendido');
        } else {
            console.log('El auto ya está encendido');
        }
    },

    apagar() {
        if (this.encendido) { 
            this.encendido = false; 
            console.log('El auto está apagado');
        } else {
            console.log('El auto ya está apagado');
        }
    }
}

// Para prender el auto
auto.encender();

// Para apagar el auto
//auto.apagar();

