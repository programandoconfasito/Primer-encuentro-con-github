alert("Trabajamos con while y funciones");

var x = 1;

while (x < 10){
    console.log("mi variable x vale: " + x );
    x++
}

var z = 10;

while (z > 0){
    console.log("Mi variable z vale: " + z);
    z--;
} 

// cuándo usar for y cuándo usar while?
// el for se utiliza cuando uno sabe la cantidad de iteraciones que va a realizar el ciclo
/* el while se utiliza cuando no tenemos idea cuántas iteraciones va a realizar el ciclo
 podría aplicar cuando traemos un registro de una base de datos, porque no vamos a saber si en 
 una table hay un registro o un millón
 */