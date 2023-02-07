window.onload = inicio;

function inicio(){
    buscaminas.tamaño;
    buscaminas.numMinasTotales = 12;
    mostrarTablero();
    generarCampoMinasVacio();
    esparcirMinas();
    contarMinas();
    actualizarNumMinasRestantes();
}

function mostrarTablero(){
    var tamaño = Number(prompt("Introduce el tamaño del tablero: "));
    //seleccionamos el objeto tablero
    let tablero = document.querySelector("#tablero");
    

    //creamos las casillas que necesitemos
    for(let f=0; f<buscaminas.tamaño; f++){
        for(let c=0; c<buscaminas.tamaño; c++){
            let newDiv = document.createElement("div");
            newDiv.setAttribute("id","f" + f + "c" + c );
            newDiv.dataset.fila = f;
            newDiv.dataset.columna = c;
            //newDiv.addEventListener("contextmenu",marcar); //evento con el botón derecho del raton
            //newDiv.addEventListener("click",destapar); //evento con el botón izquierdo del raton

            tablero.appendChild(newDiv);
        }
    }
}//mostrarTablero

function mostrarTablero() {
    let tabla = document.createElement('tabla');
    tabla.setAttribute("id", "idTabla");
    for (let i=0; i<conf_map.get("tam_max"); i++) {
        
    }
}