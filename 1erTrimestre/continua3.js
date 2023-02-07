let listaContactos =  [ {nombre : "Maxwell Wright" , telefono: "(0191)7196495" , correo : "Curabitur.egestas.nun@nonummyac.co.uk"},
                        {nombre : "Raja Villareal" , telefono : "0866 398 2895" , correo : "posuere.vulputate@sed.com"},
                        {nombre : "Helen Richards " , telefono : "0800 1111", correo : "libero@convalis.edu"}
                    ];
listaContactos.push ({nombre : "Maisie Haley", telefono : "0913 531 3030", correo : "risus.Quisque@urna.ca"});

let nombreAñadido = prompt("Introduce el nombre"); 
let telefonoAñadido = prompt("Introduce el telefono");
let correoAñadido = prompt("Introduce el correo");
listaContactos.push({nombre : nombreAñadido, telefono : telefonoAñadido, correo : correoAñadido});

console.log(listaContactos[0]);
console.log(listaContactos[listaContactos.length - 1]);