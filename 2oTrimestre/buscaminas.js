//Mostrar tablero en HTML
function mostrarTablero() {
    let tabla = docoument.createElement("tabla");
    tabla.setAttribute("id", "idTabla");
    for (let i=0; i<conf_map.get("tam_max"); i++) {
        let fila = document.createElement("tr");
        for (let j=0; j<conf_map.get("tam_max"); j++) {
            crearCasillero(fila, i, j);
        }
        tabla.appendChild(fila);
    }
    document.getElementById("idTablero").appendChild(tabla);
}//mostrarTablero

//Crea una celda para el tablero
function crearCasillero(fila, i, j) {
    let casilla = document.createElement("id");
    casilla.setAttribute("id", "idCelda_$(i)_$(j)"); //Es sin comillas, pero me da error
    casilla.classList.add("blue");
    fila.appendChild(casilla);
}