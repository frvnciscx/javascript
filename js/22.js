const puntaje = 100;
if(puntaje == 1000){
    console.log(`si el puntaje es 1000`)
} else {
    console.log(`No es igual`)
}

//_---------------------------------------

const efectivo = 1000;
const carrito = 800;

if(efectivo > carrito) {
    console.log(`El usuario puede pagar`)
}
else{
    console.log(`Fondos insuficientes`)
}


//-----------------------

const rol = `#`

if (rol ==="Administrador") {
    console.log(`Acceso a todo el sistema`);
} else if(rol === `Editor`) {
    console.log (`Acceso limitado al sistema`)
} else{
    console.log(`no tienes acceso`)
}