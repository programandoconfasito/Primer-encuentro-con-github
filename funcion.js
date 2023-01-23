//definimos la función holaMundo

function holaMundo(){
    console.log("Hola, mundo")
}
// Invocamos la función holaMundo
holaMundo();
holaMundo(); 

function sumar(a,b){
    
    return  a + b;
}
var resultado = sumar(45,54);
var resultado2 = sumar(3,87);
var resultado3 = sumar(9000,58000);

document.getElementById("result").innerHTML = "la suma de a y b es igual a: " +
sumar(4,3);
document.getElementById("resultado").innerHTML = "El resultado de la variable 1 es " + resultado + "<br>" + 
"El resutaldo de la variable 2 es " + resultado2 + "<br>" +
"El resultado de la variable 3 es " + resultado3;

function sumatoria(a,b){
    var resolucion= a + b; // es más limpio retornar a + b directamente
    return resolucion;
}

suma = sumar(8,185);
console.log(suma);

document.getElementById("suma").innerHTML = "El resultado de la suma es "+ suma;

function multiplicar(a,b){
    return a*b;
}

var multiplicacion= multiplicar(3,82);

document.getElementById("multi").innerHTML = "El resultado de multiplicar 3 x 82 es: " + multiplicacion;