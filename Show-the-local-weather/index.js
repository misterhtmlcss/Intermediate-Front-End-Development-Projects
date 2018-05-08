
// Coordinates
const app = document.getElementById("app")

if (!navigator.geolocation){
        app.innerHTML = `<p>Geolocation is not supported by your browser</p>`;
} else {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = Math.floor(position.coords.latitude)
        const long = Math.floor(position.coords.longitude)
        //console.log(lat) //For Testing Only => Correct Outcome
        app.innerHTML = `Latitude: ${lat} <br>Longitude:${long}`;
        });
}

// Finished.
