import fetch from 'node-fetch'

const users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "rpglimitbreak"]
const views = ["users", "streams", "channels"]
const app = document.querySelector('#app')
const http = new XMLHttpRequest()
const fccClick = document.querySelector('.user-fcc')
const fcc = "freecodecamp"
let view, user, url;


/* fccClick.addEventListener('click', function(e) {
  e.preventDefault();
} */

window.addEventListener("load", function(event) {
  console.log("All resources finished loading!");
});


function xhr () {
	http.onreadystatechange = function() {
		if (this.readyState === 4 && this.status == 200) {
			const response = JSON.parse(http.responseText)
			//console.log(response)
		}
	}
	http.open("GET", url, true);
	http.send();
}

function fccStreaming () {
	if()
}

function getView () {


	function getUsers () {


		function buildURL () {


		}
	}
}


function getActives () {

}