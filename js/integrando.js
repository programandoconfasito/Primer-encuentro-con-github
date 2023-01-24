alert("Hola, mundo");
let numero1 = 3;
let numero2 = 4;
let resultado = numero1 + numero2;
console.log("La suma del numero 1 y numero 2 es: "+ numero1 + numero2); // creo que se puede usar coma para concatenar string y numero o algo así
console.log("El resultado de la suma de 3 y 4 es: ", resultado);


document.getElementById("boton").onclick = function (){
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamo probando nuestro primer evento en js"
}

document.addEventListener('click', function(){
    console.log("Cliquee en cualquier lado de la pantalla");
    document.getElementById("demo2").innerHTML = "Estamos probando nuestro primer evento"
} )

document.getElementById("boton2").addEventListener('click', function(){
    document.getElementById("demo3").innerHTML = "Tomá por curioso 8---- ";
    console.log("estoy tocando el demo 3");
})

document.getElementById("boton_color").addEventListener('click', function(){
    document.body.style.backgroundColor = "#eab676"; 
})

document.getElementById("color_original").addEventListener('click', function(){
    document.body.style.backgroundColor = "#000000"; 
})

document.getElementById("ocultar_titulo").addEventListener('click', function(){
    
    document.getElementById('titulo').style.display = 'none';

 })
  

 const collection = document.getElementsByClassName("ejemplo");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "#F8C471";
}