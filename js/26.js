// this - hace referencia al mismo objeto

const reservacion = {
    nombre:"paco",
    apellido: "vazquez",
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    } 
}

reservacion.informacion();