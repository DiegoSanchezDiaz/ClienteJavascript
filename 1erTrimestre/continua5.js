let listaContactos =  [ {nombre : "Maxwell Wright" , telefono: "(0191)7196495" , correo : "Curabitur.egestas.nun@nonummyac.co.uk"},
                        {nombre : "Raja Villareal" , telefono : "0866 398 2895" , correo : "posuere.vulputate@sed.com"},
                        {nombre : "Helen Richards " , telefono : "0800 1111", correo : "libero@convalis.edu"}
                    ];
listaContactos.push ({nombre : "Maisie Haley", telefono : "0913 531 3030", correo : "risus.Quisque@urna.ca"});

let auxiliar = false;
do {
    let opciones = Number(prompt("Selecciona (1, 2, 3,4 o 5): \n Opción 1: Mostrar primer contacto \n Opción 2: Mostrar último contacto \n Opción 3: Mostrar todos los contactos \n Opción 4: Añadir nuevo contacto \n Opción 5: Salir del programa")); 
    switch(opciones) {
        case 1:
            console.log(listaContactos[0]);
            break;
        case 2:
            console.log(listaContactos[listaContactos.length-1]);
            break;
        case 3:
            console.log(listaContactos[0]);
            console.log(listaContactos[1]);
            console.log(listaContactos[2]);
            console.log(listaContactos[3]);
            console.log(listaContactos[listaContactos.length-1]);
            break;
        case 4:
            let nombreAñadido = prompt("Introduce el nombre"); 
            let telefonoAñadido = prompt("Introduce el telefono");
            let correoAñadido = prompt("Introduce el correo");

            if(nombreAñadido.length == 0  || telefonoAñadido.length == 0 || correoAñadido.length == 0 ) {   
                window.alert("No se ha añadido el contacto");
                break;
            }
            listaContactos.push({nombre : nombreAñadido, telefono : telefonoAñadido, correo : correoAñadido});
            console.log(listaContactos[listaContactos.length-1]);
            break;
            case 5 :
                auxiliar = true; 
                break ;
    }//switch
} while (auxiliar != true);
