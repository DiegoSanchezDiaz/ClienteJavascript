window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre() {
    var elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir un nombre");
        }
        if(elemento.validity.patternMismatch){
            error2(elemento, "El nombre debe tener entre 2 y 15 caracteres");
        }
        return false;
    }

    return true;
}

function validaEdad() {
    var elemento = document.getElementById("edad");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir una edad");
        }
        if (elemento.validity.rangeOverflow) {
            error2(elemento, "La edad debe ser menor de 99");


    }
    if (elemento.validity.rangeUnderflow) {
        error2(elemento, "La edad debe ser mayor de 18");
    }
     return false;
    }
     return true;
}

function validaTelefono() {
    
    var elemento = document.getElementById("telefono");
    
    if (!elemento.checkValidity()) {
    
        if (elemento.validity.valueMissing) {
        error2(elemento, "Debe introducir un telefono");
    }

    if(elemento.validity.patternMismatch){
        error2(elemento, "Introduce un número de telefono valido");
    }
         return false;
    }

        return true;
}



function validar(e) {
    borrarError();
    if (validaNombre() && validaEdad() && validaTelefono() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
      return true
    } else {
     e.preventDefault();
      return false;
    }
}

function error(elemento) {
    document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();
}

function error2(elemento, mensaje){
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}

function borrarError() {
    var formulario = document.forms[0];
    for (var i = 0; i < formulario.elements.length; i++) {
         formulario.elements[i].className="";
    }
}

const contador = 0 ;
function seleccionarTodo()
{
   
    //contador = contador +1;
    console.log(contador);
    

    if(contador != 1 )
    {
        const referencia = document.getElementById("div1").children;
        for (let i = 0; i < referencia.length; i++)
        {
            //alert( referencia[i].tagName ); 
            referencia[i].setAttribute('checked',false)
        }
        console.log(contador);
    }else{
        const referencia = document.getElementById("div1").children;

        for (let i = 0; i < referencia.length; i++)
        {
            //alert( referencia[i].tagName ); 
            referencia[i].setAttribute('checked',true)
        }

        console.log(contador);
    }
}

const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
const mainContent = document.getElementById('main-content');

toggleDarkModeButton.addEventListener('click', () => {
  mainContent.classList.toggle('dark-mode');
});

















































