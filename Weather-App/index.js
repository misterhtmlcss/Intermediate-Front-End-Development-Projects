const cloudIcon = document.getElementById('cloudIcon')
const cel = document.getElementById('celcius')
const fah = document.getElementById('fahrenheit')
const degNum = document.getElementById('degNum')
const fdeg = document.getElementById('fdeg')
const cdeg = document.getElementById('cdeg')

let data, lat, long, url;

let cTemp, gTemp;

if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(position => {
      lat = Math.floor(position.coords.latitude)
      long = Math.floor(position.coords.longitude)

      getWeather(cUrl(lat, lomng))
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
   gTemp = `${Math.floor(temp)}`
}


function toF(cel) {
   return cel * 9 / 5 + 32
}

function convTemp(gtemp) {
   const fTemp = toF(gTemp)
   if (degNum === gTemps) {
      degNum.textContent = gtemp
   } else {
      degNum.textContent = fTemp
   }
appendClass()
}
function appendClass() {
   fdeg.classList.toggle('hide')
   cdeg.classList.toggle('hide')
}
