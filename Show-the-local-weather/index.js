/* const darkSkyApi = ; */
const unSplashId = "9c5ff40454b6551dafaa6cfeed4dc4fe183a140eb64b1f4fa528e5a937f30970"
const app = document.getElementById("app")
const unSplash = "https://source.unsplash.com/"
function getLocation() {
	if (!navigator.geolocation){
		 app.innerHTML = `<p>Geolocation is not supported by your browser</p>`;
  	} else {
        app.innerHTML = navigator.geolocation.getCurrentPosition(showPosition)
   }
}
function showPosition(position) {
    app.innerHTML = `Latitude: ${position.coords.latitude} <br>Longitude: 											${position.coords.longitude}`
}

/* var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img); */


window.onload = getLocation;
