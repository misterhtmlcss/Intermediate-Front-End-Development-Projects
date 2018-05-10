const cloudIcon = document.getElementById("cloudIcon")
let data;
let lat;
let long;
let url;

const cel = document.getElementById("celcius")
const fah = document.getElementById("fahrenheit")
let degNum = document.getElementById("degNum")
let fdeg = document.getElementById("fdeg")
let cdeg = document.getElementById("cdeg")
let cTemp;
let fTemp;
let gTemp;

if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
                lat = Math.floor(position.coords.latitude)
                long = Math.floor(position.coords.longitude)
                const cUrl = function createUrl (x, y) {
                        return url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`
                }
                // fetch was here.
                getWeather(cUrl());
                })
        } else {
                console.log ("looks like something is broke when calling the gelocation method")
        }

function getWeather(x) {
        fetch(x)
                .then( (res) => res.json() )
                .then( (blob) => {
                        data = blob
                        returnData()
        })
}
function returnData() {
        const { main: {humidity, pressure, temp},
        wind: {speed}, name} = data // descturing the returned object
        const {description, icon } = data.weather[0];
        gTemp = `${Math.floor(temp)}`
        //degNum.textContent=gTemp
        //cloudIcon.innerHTML = `<img src="${icon}">`
}


function convTemp(gtemp) {
        cTemp = gtemp
        fTemp = gtemp*9/5+32
        if(degNum === cTemp) {
                return degNum.textContent=cTemp
        } else {
                return degNum.textContent=fTemp
        }
        appendClass();
}
function appendClass () {
        fdeg.classList.toggle("hide");
        cdeg.classList.toggle("hide");
}
