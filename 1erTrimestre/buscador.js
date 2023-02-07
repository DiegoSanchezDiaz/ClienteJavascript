let parrafo =  ["Neque","porro","quisquam","est","qui","dolorem","ipsum","quia","dolor","sit","amet","consectetur","adipisci","velit"];
let palabra = prompt("Introduce la palabra");

for (let i = 0; i < parrafo.length; i++) {
    if (palabra == parrafo[i]) {
        alert(palabra);
    }
}