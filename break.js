alert("Trabajamos con break y continue");

var x = 10;

for(x; x > 0; x--){
    if (x==5){break; }
    console.log("El valor de x es: " + x ); //sentencia que para el bucle cuando llega a 5
}

var z = 10;

for(z; z > 0; z--){
    if (z==5){continue; }
    console.log("El valor de z es: " + z );//En este caso solo se salta el numero 5
}
