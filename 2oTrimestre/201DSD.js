window.onload=inicio   //Cargar la página

function inicio() {
    document.getElementById("google").addEventListener("click",mandarGoogle);
    document.getElementById("enviar").addEventListener("click",validar);
    document.getElementById("reset").addEventListener("click",borrarTodo);
}


function pideNombre() {  //Función que mediante un promt, pide el nombre al usuario
    document.getElementById("nombre").value=prompt("Introduce tu nombre");
}

function pideMensaje() {  //Función que mediante un promt, pide un mensaje al usuario
    document.getElementById("mensaje").value=prompt("Introduce un mensaje","");
}

function validar() {  //Función que comprueba que se cumple la validación y envía el correo
    if((validarNombre())&&(validarMensaje())&&(validarDias())){
        window.open('mailto:diegoxv19.@gmail.com?subject=Formulario&body=\"'+getMensajeCorreo()+'\"');
    }
}

//Funcion validacion del nombre , en el que obtenemos el nombre através del id, y usamos metodo de 
//validacion de valores y por expresion regular
function validarNombre() {
    let nombre=document.getElementById("nombre");
    if(!nombre.checkValidity()) {
        if(nombre.validity.valueMissing) { //Si esta vacío, mostrar error1
            error1(nombre,"Debe introducir un nombre");
        }
        if(nombre.validity.patternMismatch) { //Si no concuerda con el pattern, mostrar error2
            error2(nombre,"El nombre debe tener entre 2 y 20 caracteres");
        }
    }
}

function error1(elemento,nombre) {
	alert(nombre);
    elemento.className="error";
    elemento.focus();
}//Error nombre vacío

function error2(elemento,nombre) {
    alert(nombre);
    elemento.className = "error";
    elemento.focus();
}//Error muchos carácteres en el nombre

//Funcion validacion del mensaje, en el que obtenemos el mensaje através del id, 
//y usamos metodo de validacion de valores y por expresion regular
function validarMensaje() {
    let mensaje=document.getElementById("mensaje");
    if(!mensaje.checkValidity()) {
        if(mensaje.validity.valueMissing) {  //Si esta vacío, mostrar error3
            error3(mensaje,"Debe introducir un mensaje");
        }
        if(mensaje.validity.patternMismatch) {  //Si no concuerda con el pattern, mostrar error4
            error4(mensaje,"El mensaje debe tener entre 2 y 500 caracteres");
        }
    }
}

function error3(elemento,mensaje) {
	alert(mensaje)
    elemento.className="error"
    elemento.focus()
}//Error mensaje vacío

function error4(elemento,mensaje) {
    alert(mensaje)
    elemento.className = "error";
    elemento.focus();
}//Error muchos carácteres en el mensaje

function cambiarFondo(id) {
    if(id == "rojo") {
        document.getElementById("formulario").style.backgroundColor = "red";
    }
    
    if(id == "verde") {
        document.getElementById("formulario").style.backgroundColor = "green";
    }
    
    if(id == "amarillo") {
        document.getElementById("formulario").style.backgroundColor = "yellow";
    }
    
    if(id == "negro") {
        document.getElementById("formulario").style.backgroundColor = "grey";
    }
}

function mandarGoogle() {
    window.location.href = "https://google.com"; //Redirecciona a Google
}

function borrarTodo() {
        window.location.reload();  //Resetea la información
}
  
