alert("Este es un alerta para corroborar conexión");

function sumar(a, b){
    return parseFloat(a) + parseFloat(b);
}
//document.getElementById("numero1")
document.getElementById("sumar").addEventListener('click', function(){
    let numeroA= document.getElementById("numero1").value;
    console.log("El valor del numero A es: " + numeroA);
    let numeroB= document.getElementById("numero2").value;
    console.log("El valor del numero B es: " + numeroB )

    let resultado = sumar(numeroA,numeroB);
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display = "block" ;
 })

 /*alert("Este es un alerta para corroborar conexión");

function sumar(a, b){
    return a + b;
}
//document.getElementById("numero1")
document.getElementById("sumar").addEventListener('click', function(){
    let numeroA= parseFloat(document.getElementById("numero1").value);
    console.log("El valor del numero A es: " + numeroA);
    let numeroB= parseFloat(document.getElementById("numero2").value);
    console.log("El valor del numero B es: " + numeroB )

    let resultado = sumar(numeroA,numeroB);
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display = 'block';

})

 */

// también podemos usar parseInt para convertir strings en números enteros, solo enteros. EL parseFloat lo hace con decimales también

/* también podríamos hacerlo en el resultado con let resultado = sumar(parseFloat(numeroA), parseFloat(numeroB)); */