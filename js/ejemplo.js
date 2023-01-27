const persona = '{"nombre": "Daniel","edad": 35,"nacionalidad": "Argentino","autos": ["cheryQQ ", "Ferrari"]}';
const obj = JSON.parse(persona);

document.getElementById("demo").innerHTML = obj.nombre + " tiene " + obj.edad + " es " + obj.nacionalidad + 
" y posee dos vehículos: " + obj.autos;

let objeto = {"nombre": "Daniel","edad": 35,"nacionalidad": "Argentino","autos": ["cheryQQ ", "Ferrari"]};

document.getElementById("demo2").innerHTML = obj.nombre + "<br>" + obj.edad;

/*Fetch es una función de JavaScript que se utiliza para hacer peticiones HTTP (o HTTPS) a un servidor. Es una forma de obtener recursos de una URL en una página web. La función fetch() devuelve una promesa que resuelve a un objeto Response. Este objeto tiene varios métodos útiles para obtener los datos de la respuesta.

Para consumir un API con fetch, primero debes obtener la URL de la API y luego hacer una petición HTTP utilizando el método fetch() y pasando la URL como argumento. El método fetch() devuelve una promesa que resuelve a un objeto Response. Este objeto tiene varios métodos útiles para obtener los datos de la respuesta, como json() y text().

Por ejemplo, si quieres consumir una API de clima y obtener el tiempo actual de una ciudad específica, podrías hacer lo siguiente:

Copy code
fetch('https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
En este ejemplo, se hace una petición GET a la API de OpenWeatherMap pasando como parámetro la ciudad "Miami" y una clave de API personalizada. La respuesta se convierte en un objeto JSON y se imprime en la consola.

Es importante que siempre se maneje bien el error, ya que puede ser que no siempre se tenga acceso a la API o que haya un problema técnico.*/
