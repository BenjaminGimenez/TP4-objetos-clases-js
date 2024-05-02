/*Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de
la cuenta.
*/

const cuenta = {
    titular: 'Alex',
    saldo: 0,

    ingresar: function(dinero){
        this.saldo += dinero;
    },

    extraer: function(dinero){
        this.saldo -= dinero;
    },

    informar: function(){
        console.log('titular: ' + this.titular),
        console.log('saldo: ' + this.saldo)
    }
}

const montoIngresar = parseInt(prompt('Ingrese el monto que desea depositar: '));
const montoExtraer = parseInt(prompt('Ingrese el monto que desea extraer: '));

cuenta.ingresar(montoIngresar);
cuenta.extraer(montoExtraer);
cuenta.informar();