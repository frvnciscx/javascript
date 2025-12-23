//Arreglos o Arrays
// los objetos se crean con llaves, los arreglos con corchetes
const numeros = [10, 20, 30, 40,50]; 

console.table(numeros);

const meses = ["Enero","Febrero","Marzo","Abril","Mayo"];





// //Acceder a los valores de un arreglo
// console.log(numeros[4]);


// //conocer la extensión de un arreglo
// console.log(meses.length);

// //forEach es un iterador
// numeros.forEach( function(numero) {
//     console.log(numero);
// })

//numeros[5] = 60; // se agrega o sustitulle dependiendo de la posición

numeros.push(60,70,80); //push agrega elementos al final del arreglo
numeros.unshift(-10,-20,-30); //agrega elementos al inicio del arreglo
console.table(numeros);


// meses.pop(); //pop elimina el iltimo elemento del arreglo
// meses.shift(); //shift elimina el primer elemento del arreglo

meses.splice(2,1);  // primer valor; que lemento va a eliminar, segundo valor; cuantos se quieren eliminar
console.table(meses);

//Rest Operator o Spread Operator

//const nuevoArreglo = [...meses, "Junio"]; //agrega al final
const nuevoArreglo = [" Junio", ...meses ]; //agrega al principio
console.log(nuevoArreglo);

