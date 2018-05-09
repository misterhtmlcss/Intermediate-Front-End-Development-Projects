const weather = document.getElementById("weather")
const app = document.getElementById("app")
let lat;
let long;
let url;



if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
                lat = Math.floor(position.coords.latitude)
                long = Math.floor(position.coords.longitude)
                const cUrl = function createUrl (x, y) {
                        return url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`
                }
                // console.log(cUrl(lat, long)) // Test is the URL being generated with Lat and Long included
                function getWeather(x) {
                        //console.log(x + ' inside') // If this test runs then it's getting the full url with lat and long
                        fetch(x) // constructed URL from navigator.geolocation section above.
                                .then( (res) => res.json() )
                                .then( (blob) => {
                                        const data = blob
                                        console.log(data) //View raw API call
                                        //const temp = data.main.temp;
                                        // weather: [weatherArr ,],
                                        const { main: {humidity, pressure, temp},
                                                wind: {speed}} = data // descturing the returned object
                                        const {description, icon } = data.weather[0];
                                        //const {description, icon} = weatherArr
                                        console.log(`Humidity: ${humidity}, Weather Description: ${description}, Icon Link: ${icon}, WindSpeed: ${speed}MPH`) //test destructued data

                                        //app.innerHTML = `Latitude: ${lat} <br>Longitude:${long}`;
                                        //weather.innerHTML = `Temp: ${temp} <br>Wind:${wind}`;
                                        //console.log(data.wind); // For testing
                                        //if(weather != null) { console.log ('This works!!')} // For testing
                                })
                }
                getWeather(cUrl());
                })
} else {
        console.log ("looks like something is broke when calling the gelocation method")
}

