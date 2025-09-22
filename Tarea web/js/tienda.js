(function() {

document.addEventListener("DOMContentLoaded", cargarSaldo);

let campoSaldo = document.getElementById("campo-saldo"); 
let moneda;
function cargarSaldo() {
    moneda = localStorage.getItem("saldo") || 0;
    campoSaldo.textContent = moneda;
    console.log("saldo: " + moneda);
}

let botonCompra = document.querySelectorAll(".boton-compra");
botonCompra.forEach( boton => {
    boton.addEventListener("click", compra);
})

function compra (e) {
    console.log("ejecuta");
    comprar(e);
}

function comprar (e) {
    console.log("ejecuta");
    let precio = Number(e.target.textContent);
    if(moneda >= precio) {
        if(adquirir(e)){
            moneda = moneda - precio;
            localStorage.setItem("saldo", moneda);
            alert("comprado de forma exitosa");
            location.reload();
        } else {
            alert("ya tienes este personaje");
        }

    } else {
        alert("saldo insuficiente");
    }
    
}
function adquirir (e) {
    let personaje = e.target.parentNode.id;
    let personajesViejos = JSON.parse(localStorage.getItem("personajes")) || [];
    if(!personajesViejos.includes(personaje)) {
        personajesViejos.push(personaje);
        localStorage.setItem("personajes", JSON.stringify(personajesViejos));
        return true;
    } else {
        return false;
    }


}


} ())