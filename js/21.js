//Arrow functions

const sumar2 = (n1,n2) => { console.log (n1 + n2); }
sumar2(5,10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`) // si solo existe una variable no se utilizan parentesis

aprendiendo ("JavaScript")





//Array Methods

const meses = ["Enero","Febrero","Marzo","Abril","Mayo"];

const carrito =[
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre: "Televisor 50 pulgadas", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audifonos", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
    {nombre: "Bocinas", precio: 300},
    {nombre: "Laptop", precio: 800},
];

//
meses.forEach(mes => {
    if(mes == "Marzo") {
        console.log("Marzo si existe");
    }
})

//--------------------------------------------
let resultado;
//sintaxis Arrow function
resultado = carrito.some(producto =>  producto.nombre == "Celular");

//Sintaxis anterior
resultado = carrito.some(function(producto){
    return producto.nombre == "Celular"
})

//Reduce anterior
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
},0 );

//Reduce Arrow function
resultado = carrito.reduce((total, producto) => total + producto.precio,0); // variable = arreglo.metodo(lógica)


//filter
resultado = carrito.filter(producto => producto.precio > 400);

resultado = carrito.filter(producto=> producto.nombre !== "Celular");


 console.log(resultado)
// console.log(resultado2)

