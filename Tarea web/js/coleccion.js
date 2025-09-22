(function(){
    document.addEventListener("DOMContentLoaded", agregarArreglo);

    let espacioPersonajes = document.getElementById("espacio-personajes")
    function agregarArreglo () {
        if(JSON.parse(localStorage.getItem("personajes"))) {
            let personajes = JSON.parse(localStorage.getItem("personajes"));
            personajes.forEach(personaje => {
                let div = document.createElement("div");
                div.classList.add("tarjeta-deslizable-automatico");

                let imagen = document.createElement("img");
                imagen.classList.add("imagen-tarjeta-deslizable");
                imagen.src = `../imagenes/${personaje}.JPG`;
                imagen.title = personaje;

                div.appendChild(imagen);
                espacioPersonajes.appendChild(div);
            });
        }
    }


}())