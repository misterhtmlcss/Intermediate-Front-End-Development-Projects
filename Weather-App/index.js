const cloudIcon = document.getElementById('cloudIcon')
const cel = document.getElementById('celcius')
const fah = document.getElementById('fahrenheit')
let degNum = document.getElementById('degNum')
const fdeg = document.getElementById('fdeg')
const cdeg = document.getElementById('cdeg')

let data, lat, long, url, clouds

let cTemp
let gTemp

const cUrl = (lat, long) => {
   return `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`
}

if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(position => {
      lat = Math.floor(position.coords.latitude)
      long = Math.floor(position.coords.longitude)

      getWeather(cUrl(lat, long))
   })
} else {
   console.log("looks like something is broke when calling the gelocation method")
}

function getWeather(x) {
   fetch(x)
      .then((res) => res.json())
      .then((blob) => {
         data = blob
         returnData()
      })
}

function returnData() {
   const {
      main: {
         humidity,
         pressure,
         temp
      },
      wind: {
         speed
      },
      name
   } = data // destructuring the returned object
   const {
      description,
      icon
   } = data.weather[0]
   /* debugger */
   clouds = icon;
   if (clouds !== null | undefined) {
      cloudIcon.innerHTML = `<img src="${clouds}" alt="Weather Image Not Loaded">`
   }
   gTemp = `${Math.floor(temp)}`
   degNum.textContent = gTemp
}



function toF(cel) {
   return cel * 9 / 5 + 32
}
/* debugger */
function convTemp() {
   const fTemp = toF(gTemp)
   if (degNum.textContent != gTemp) {
      degNum.textContent = gTemp
      appendClass()
   } else {
      degNum.textContent = fTemp
      appendClass()
   }

}
function appendClass() {
   cel.classList.toggle('hide')
   cdeg.classList.toggle('hide')
   fdeg.classList.toggle('hide')
   fah.classList.toggle('hide')
}
