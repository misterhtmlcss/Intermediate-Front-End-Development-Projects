const iconMe = document.getElementById("cloudIcon")
//const geo = document.getElementById("geo")
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
                function getWeather(x) {
                        console.log(x + ' did it run the correct url?')
                        console.log(lat, long) // If this test runs then it's getting the full url with lat and long
                        fetch(x) // constructed URL from navigator.geolocation section above.
                                .then( (res) => res.json() )
                                .then( (blob) => {
                                        const data = blob
                                        console.log(data) //View raw API call
                                        //const temp = data.main.temp
                                        const { main: {humidity, pressure, temp},
                                                wind: {speed}, name} = data // descturing the returned object
                                        const {description, icon } = data.weather[0];
                                        //const {description, icon} = weatherArr
                                        /* console.log(`Country: ${name}, Humidity: ${humidity}, Weather Description: ${description}, Icon Link: ${icon}, WindSpeed: ${speed}MPH`)  *///test destructued data
                                        //wholeNum = `${Math.floor(temp)}`
                                        degNum.innerText=`${Math.floor(temp)}`

                                        iconMe.innerHTML =
                                        `<img src="${icon}" alt="">`




                                })
                }
                getWeather(cUrl());
                })
} else {
        console.log ("looks like something is broke when calling the gelocation method")
}

