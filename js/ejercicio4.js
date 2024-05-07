/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio,
además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto{
    constructor(codigo, nombre, precio){
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }

    imprimeDatos(){
        console.log(`Codigo: ${this.codigo} - Nombre: ${this.nombre} - Precio: ${this.precio}`)
    }
}

const producto1 = new Producto(123, 'Adidas Campus', 10500)
const producto2 = new Producto(456, 'New Balance 550', 15600)
const producto3 = new Producto(789, 'Nike Jordan', 12800)

const nuevosProductos = [producto1, producto2, producto3]

nuevosProductos.forEach(Producto => Producto.imprimeDatos());