// "use strict" //usar JavaScript en modo estricto
// Objetos
const producto ={
    nombreProducto :"Monitor 20 Pulgadas",
    precio: 300,
    disponible:true
}

// Object.freeze(producto); // No permite agregar más valores, propiedades, ni modificar el objeto, ni eliminar

Object.seal(producto); // No permite agregar más valores, propiedades, pero si modificar el objeto

// producto.imagen = "imagen.jpg"
producto.precio = "nuevo precio"
// console.log(Object.isFrozen(producto));
console.log(Object.isSealed(producto));
console.log(producto)