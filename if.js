alert("VAMOR A APRENDER DE CONDICIONALES, CARAJO UATATA AÑAMEMBY");

var edad = 17;
var textoDeIngreso;
if (edad >= 18) {
    textoDeIngreso = "La persona puede ingresar, pues tiene" + edad;
    console.log("la persona es mayor de edad, pues tiene:" + edad);
} else {
    textoDeIngreso = "La persona no puede ingresar, ya que es pequeñica y cuenta con tan solo: " + edad + " años";
    console.log("La persona es menor de edad, pues tiene:" + edad);
}

document.getElementById("edadDeIngreso").innerHTML=

textoDeIngreso