// Cambio de nombre en .tarjetaInformacion
function changeName (elemento){
    let name = elemento.closest(".tarjetaInformacion").querySelector(".nombre");
    name.innerText = "Mauricio Peraltilla";
}

// Variables para query requests id de los div
var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connections");
//Accept requests
function acceptReq(e){
    let elemento = document.querySelector(e).parentElement;
    elemento.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
    e.parentElement.parentElement.remove();
}
//Remove Requests
function removeReq(e){
    e.parentElement.parentElement.remove();
}