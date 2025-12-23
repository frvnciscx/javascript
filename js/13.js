// Objetos
const producto ={
    nombreProducto :"Monitor 20 Pulgadas",
    precio: 300,
    disponible:true
}

const medidas = {
    peso: "1kg",
    media:"1m"
}
//unir objetos
const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto);