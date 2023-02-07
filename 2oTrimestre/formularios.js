//3 Formas de llamar formularios
let formulario= document.getElementById('miFormulario');
let formulario2 = document.forms['miFormulario'];//array
let formulario3= document.getElementsByTagName('form')[0];//array
//¿Como seleccionar elementos?
//.element()
getElementById('nom');//elemento con ese id
getElementsByTagName('input');//array con el elemento con esa etiqueta

window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('cick',validar, false);
}

function validaNombre() {
    let elemento= document.getElementById('nom');
    if(elemento.value=='') {
        alert('Nombre no puede estar vacio');
        return false;
    }
    return true;
}
function validaTelefono() {
    let elemento= document.getElementById('tel');
    if(!isNaN(elemento.value)) {
        alert('Telefono no puede estar vacio');
        return false
    }
    return true;
}
function validaFecha() {
    let dia = document.getElementById('dia').value;
    let mes = document.getElementById('mes').value;
    let year = document.getElementById('year').value;

    let fecha = new Date(year,mes,dia);
    if(!isNaN(fecha)) {
        alert('Campo incorrecto');
        return false;
    }
    return true;
}

function validaCheck() {
    let campoCheck = document.getElementById("mayor");
    if (!campoCheck.checked) {
        alert("Debes ser mayor de edad");
        return false;
    }
    return true;
}

function validaSex() {
    let campoSex = document.getElementById("sexo");
    for (let i=0; campoSex.length; i++);
    if (campoSex.checked) {
        return true;
    }
    return false;
}

function validar() {
    if(validaNombre()&&validaFecha()&&validaTelefono()&&validaSex()&&validaCheck()&&confirm("pulsa aceptar para enviar el formulario")) {
        return true;
    }
    return false;
}