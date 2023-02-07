window.addEventListener("load",inicio); //Para cargar toda la página y que funcione todo correctamente
function inicio() {
    document.getElementById("cantidadHijos").addEventListener("click",cantidadHijos);
}

function crearParrafo() {
    var miParrafo = document.createElement("p");
}

function cantidadHijos() {
    document.getElementById("p").firstElementChild.tagName;
}