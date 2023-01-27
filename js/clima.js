const apiKey = "7f19d3864c3ab59a087e440751c1d77d";
const city = 'Miami';
const units = 'metric'; // o 'imperial' para unidades en Farenheit

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });