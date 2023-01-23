alert("Trabajando con do while");

var x = 10;
let unaVez= "";
do { 
    unaVez= "el valor de mi numero es: " + x;
    console.log("Mi variable vale:" + x);
} while(x > 10);

document.getElementById("do").innerHTML=
unaVez

/*El siguiente ejemplo utiliza un do while loop (bucle). 
El bucle siempre se ejecutará al menos una vez, incluso si la condición es falsa,
 porque el bloque de código se ejecuta antes de que se pruebe la condición
 */