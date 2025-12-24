

const metodoPago = `#`;

//Switch - funciona como if , con mas valores
switch(metodoPago){
    case `Tarjeta` :
        console.log(`Pagaste con tarjeta`);
        break;
    case `Cheque` :
        console.log(`Pagaste con cheque, se va a validar`);
        break;
    case `Efectivo` :
        console.log(`Pagaste con efectivo`);
        break;

    default:
        console.log (`Aún no has pagado`);
        break;

}