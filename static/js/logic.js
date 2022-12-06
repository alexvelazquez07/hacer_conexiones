console.log("Corriendo JavaScript...");
var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connections");
var username = document.querySelector("#username");


function cambiarNombre(){
    username.innerText = "Alex Velazquez";
}

function aceptar(areatexto1){
    console.log("Me llega esto : " + areatexto1);

    var element = document.querySelector(areatexto1);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function cerrar(areatexto2) {
    var element = document.querySelector(areatexto2);
    element.remove();
    requestSpan.innerText--;
}