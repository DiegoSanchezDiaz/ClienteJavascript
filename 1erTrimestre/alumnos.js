/*
Crear una pagina donde se mostrara el listado de alumnos (minimo 15, que estaran en un array que se habrá inicializado
    al principio del codigo javascript). Y tambien habra que mostrar sus notas que se recuperaran desde la funcion prompt del 
    objeto window indicando "introduzca la nota del <alumno>: " y al final de la pagina tiene que aparecer la media de la clase


Antes de pedir las notas de los alumnos, preguntar si quiere añadir un nuevo usuario al listado. Si indica que si, debe añadirlo
al array de alumnos y una vez añadido empezaría a pedir las notas para luego mostrarlas

Añadir a la actividad la siguiente funcionalidad. Antes de mostrar el listado de alumnos por pantalla, recorrer todos los 
alumnos de nuevo y preguntar al usuario si desea eliminar alguno de ellos, una vez preguntado por todos, se mostrará el listado de
alumnos y sus notas y la media, sin los alumnos que haya borrado el usuario.

Crea un buscador para que tus visitantes puedan encontrar un texto en cualquiera de tus páginas.
*/
let notaAlumno;

let arrayAlumnos = [{
    "nombre" : "Alumno1",
     "nota" : "0"
},
{
    "nombre": "Alumno2",
    "nota": "0"
},
{
    "nombre": "Alumno3",
    "nota": "0"
},
{
    "nombre": "Alumno4",
    "nota": "0"
},
{
    "nombre": "Alumno5",
    "nota": "0"
},
{
    "nombre": "Alumno6",
    "nota": "0"
},
{
    "nombre": "Alumno7",
    "nota": "0"
},
{
    "nombre": "Alumno8",
    "nota": "0"
},
{
    "nombre": "Alumno9",
    "nota": "0"
},
{
    "nombre": "Alumno10",
    "nota": "0"
},
{
    "nombre": "Alumno11",
    "nota": "0"
},
{
    "nombre": "Alumno12",
    "nota": "0"
},
{
    "nombre": "Alumno13",
    "nota": "0"
},
{
    "nombre": "Alumno14",
    "nota": "0"
},
{
    "nombre": "Alumno15",
    "nota": "0"
}]

function introducirNota(){
    for (let i = 0; i < arrayAlumnos.length; i++) {
        notaAlumno=prompt("Introduce la nota del alumno "+arrayAlumnos[i].nombre);
        arrayAlumnos[i].nota = parseFloat(notaAlumno);
        console.log(arrayAlumnos[i].nota);
    }  
}


function calcularMedia(){
     let media = 0 ; 
     for(let i = 0 ; i < arrayAlumnos.length ; i++)
     {
         media = parseFloat(media) + parseFloat(arrayAlumnos[i].nota) ; 
         
         console.log(arrayAlumnos[i].nota);
         let alumnos = arrayAlumnos.length;
         
         if(arrayAlumnos.length == i+1){
             console.log("La nota media de los alumnos es : "+media/arrayAlumnos.length);
         }
     }
 }

 function corregirNotas(){
    let notaCorregida=0;
    let corregirNota="";

    for(let i = 0 ; i < arrayAlumnos.length ; i++){
        corregirNota = prompt("El Alumno: "+ arrayAlumnos[i].nombre+" tiene la nota: "+arrayAlumnos[i].nota+"\n¿Quieres corregir la nota del alumno?");
        if (corregirNota.toUpperCase() == "SI") {
            notaCorregida = prompt("Introduce la nueva nota para el alumno");
            arrayAlumnos[i].nota = parseFloat(notaCorregida);
            alert("Se ha corregido la nota del alumno: "+arrayAlumnos[i].nombre+", su nueva nota es: "+arrayAlumnos[i].nota);
        }
     }
     console.log(arrayAlumnos);
 }

 function añadirNuevoAlumno() {
    let nombreAlumnoNuevo = prompt("¿Cuál es el nombre del nuevo alumno?");
    arrayAlumnos.push({
        nombre: nombreAlumnoNuevo,
        nota: "0"
        
    })
 }

 function eliminarAlumnoExistente() {
    let eliminarAlumno="";
    for (let i = 0; i < arrayAlumnos.length; i++) {
        eliminarAlumno = prompt("¿Quieres eliminar al alumno "+arrayAlumnos[i].nombre);

        if (eliminarAlumno.toUpperCase()=="SI") {
            alert("El alumno "+arrayAlumnos[i].nombre+" ha sido eliminado del listado");
            arrayAlumnos.splice(i,1);
            console.log(arrayAlumnos);
        }
        
    }
 }

let añadirAlumno=prompt("¿Quieres añadir algún nuevo alumno al listado?");
if(añadirAlumno.toUpperCase()== "SI"){
    añadirNuevoAlumno();
}

introducirNota();
calcularMedia();
eliminarAlumnoExistente();
corregirNotas();