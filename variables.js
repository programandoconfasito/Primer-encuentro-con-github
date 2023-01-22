let nombre = "Juan"; // se alamacena dentro de la pc en un espacio de memoria 
let length = 16; //esto es un numero length=longitud
let x = {nombre:"Cristian", apellido:"Sosa"}; //esto es un Objeto 
let cadenaDeTexto = "cadena de texto"; //Esto es un String
let monos = ["capuchino", "titi", "culo rojo"]; // esto es un array y el código lo interpreta como OBJETO


document.getElementById("demo").innerHTML = 
typeof 0 + "<br>" + 
typeof 314 + "<br>" +
typeof 3.14 + "<br>" +
typeof (3) + "<br>" +
typeof "mono" + "<br>" +
typeof nombre + "<br>" +
typeof cadenaDeTexto + "<br>" +
typeof x + "<br>" +
typeof monos + "<br>"

//EJEMPLO DE MAL USO DE CODIGO

let y= 16 + "volvo";
console.log(y);
alert(y);

let z; //Definimos la variable z 
document.getElementById("demo3").innerHTML =
z + "<br>"
console.log(z);
z = 5; // a Z le asignamos un valor numérico
console.log(z);
z = "Cristian programando re locoooooo"; // a Z le asignamos un string
console.log(z);

document.getElementById("demo2").innerHTML =
z + "<br>"

// imprime z al revés, ya que en el html demo2 está antes que demo3

/*
DEFINIR A LAS VARIABLES CON NOMBRE, NO USAR X, UTILIZAR ALGO QUE LE DE CONTEXTO 
EJ Let nombre = "PEDRO";
Let numeroDeDni = 38474912;

*/


