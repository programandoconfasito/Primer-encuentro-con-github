/*var + = persona[0];
var + = persona[1];
var + = persona[2];
var + = persona[3];
var + = persona[4];
var + = persona[5];
for (let i = 0; i < 5; i++){
    text += persona[i] + "<br>"
}*/

/*var x = 0;
let valor = [];
for(x; x < 10; x++) {
    valor.push(x)
    console.log("El valor de x es:" + x)
}

document.getElementById("valorDeX").innerHTML=
valor + "<br>"
*/ //esta función sirvió

/*document.addEventListener('DOMContentLoaded', function(){
    var x = 0;
let valor;
for(x; x < 10; x++) {
    valor = x
    console.log("El valor de x es:" + x)
}
document.getElementById("valorDeX").innerHTML +=
valor + "<br>"
});

if(!document.getElementById("valorDeX")){
    console.log("No se encuentra el elemento con id valorDeX");
}
console.log("El valor final de x es:" + x)
*/ // esta no sirvió 

/*document.addEventListener('DOMContentLoaded', function(){
    var x = 0;
    let valor;
    for(x; x < 10; x++) {
        valor = x
        console.log("El valor de x es:" + x)
    }
    document.getElementById("valorDeX").innerHTML +=
    valor + "<br>"
    if(!document.getElementById("valorDeX")){
        console.log("No se encuentra el elemento con id valorDeX");
    }
    console.log("El valor final de x es:" + x)
});*/ // falló

/*window.addEventListener("load", function(){
    var x = 0;
    let valor;
    for(x; x < 10; x++) {
        valor = x
        console.log("El valor de x :" + x)
    }
    document.getElementById("valorDeX").innerHTML +=
    valor + "<br>"
    if(!document.getElementById("valorDeX")){
        console.log("No se encuentra el elemento con id valorDeX");
    }
    console.log("El valor final de x :" + x)
});*/ // no funcionó 

/*var x = 0, 
valor = "";

for(x; x < 10; x++) {
    valor += x + "<br>";
}

document.getElementById("valorDeX").innerHTML = valor;
*/
//este funciona

//for (inicialización; condición; incremento/decremento)

var x = 0;

for (x; x<=5; x++) {
    console.log("El valor de x es :" + x ); //Sentencia que se repite mientras se  cumpla la condición 
}

var z = 10;

for (z; z>0; z--){ //decremento
    console.log("El valor de z es:" + z);
} 