// For loop - ejecuta un código mientras una condiciónse evalua como verdadera
for (let i=0; i<11; i++) {
    console.log(i);
}

//---------------------------------
for ( let n = 1; n < 10; n++){
    if (n % 2 ===0) {
        console.log(`El número ${n} es PAR`)
    } else{
        console.log(`El número ${n} es IMPAR`)
    }
}

// //---------------------------------------

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

for(let c = 0; c < carrito.length; c++ ) {
    console.log(carrito[c].nombre);
}


//while loop
let o = 1; // indice

while(o < 100){  //condición
 if (o % 2 === 0) {
    console.log(`El número ${o} es PAR`)
 } else{
    console.log(`El número ${o} es IMPAR`)
 }

 o++;   //incremento
  
}


// Do while loop 

let u = 0;
do{
    console.log(u);

    u++
} while (u< 10 );
