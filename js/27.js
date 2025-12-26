//POO

//Object literal
const producto ={
    nombre: "Tablet",
    precio: 500
}

 const disponibilidad = ["disponible", "no disponible"]

disponibilidad.forEach(function (disponibilidad){
    if (disponibilidad == "disponible"){
        (" si esta dispobible");
    } else{
        ("no esta disponible")
    }
})

//Object constructor
function Producto (nombre, precio, disponible){ //parametros
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto("Monitor de 20 pulgadas", 800 , "disponible" );  //argumentos
const producto3 = new Producto("laptop", 1000, "no disponible" );  
const producto4 = new Producto("pc escritoriio", 2000, "disponible" );  
const producto5 = new Producto("teclado mecanico", 6000, "disponible" );  



console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);