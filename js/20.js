//Métodos de propiedad

const reproductor = {
    reproducir: function(id){
        console.log(`Preproduciendo canción con el ID:${id}`)
    },
    pausar: function(){
        console.log("Pausando...")
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproduciendoPlaylist: function(nombre){
        console.log(`Preproduciendo la playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción: ${id}`)
}

reproductor.reproducir(6666);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist("Heavy metal");
reproductor.reproduciendoPlaylist("Heavy metal");