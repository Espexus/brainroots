(function(){

let botonCompletado = document.getElementById("completado");
botonCompletado.addEventListener("click", hecho);

let valorEjercicio = 0.5;
function hecho () {
    let cantidad = Number(document.getElementById("cantidad").value);
    let ganancia = valorEjercicio * cantidad;

    if(localStorage.getItem("saldo")) {
        let saldoAnterior = Number(localStorage.getItem("saldo"));
        let nuevoSaldo = saldoAnterior + ganancia;
        localStorage.setItem("saldo", nuevoSaldo);
    } else {
        localStorage.setItem("saldo", ganancia);
    }

    console.log(localStorage.getItem("saldo"));
    alert("haz recibido tus ganancias");


}

// parte del js para la seleccion de ejercicio 
let botonesEjercicio = document.querySelectorAll(".boton-ejercicio");
botonesEjercicio.forEach(boton => {
    boton.addEventListener("click", seleccionar);
});

let ejercicio = document.getElementById("ejercicio-seleccionado");

function seleccionar (e) {
    console.log("hola");
    let seleccionado = e.target.textContent;
    ejercicio.textContent = seleccionado;
}


}());