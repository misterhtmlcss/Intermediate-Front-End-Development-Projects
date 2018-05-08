
//const fetch = require('node-fetch')
/* Example of a fully formed API from FCC Weather API-Glitch */
/* https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139  */
 /*
 fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
 */

/* Using hard-coded link for now. */
/* const weatherApi = "https://fcc-weather-api.glitch.me/api"; */
//const weather = null;

const weather = document.getElementById("weather")
function getWeather() {
    fetch("https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139")
        .then( (res) => res.json() )
        .then( (json) => {
            const data = json;
            const temp = data.main.temp;
            const wind = data.wind.speed;
            weather.innerHTML = `Temp: ${temp} <br>Wind:${wind}`;
            //console.log(data.wind); // For testing
            //if(weather != null) { console.log ('This works!!')} // For testing
        })

}
getWeather();
