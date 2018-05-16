const users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "rpglimitbreak"]
const http = new XMLHttpRequest()
const baseURL = "https://wind-bow.glitch.me/twitch-api/channels/"
const app = document.querySelector('#app')
let url, profile

let offline = document.createElement('div')
let online =  document.createElement('div')


window.addEventListener("load", function(event) {
  console.log("All resources finished loading!");
  getUserData()
});

function getUserData () {
  users.forEach(function (user){
    url = `${baseURL}${user}`
    //console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((blob) => {
        data = blob
        //console.log(data)
        const {display_name: username , logo: logoImg, url, status } = data
        createContainer(username, logoImg, url, status)
      })
      .catch(function(error) {
        console.log(`What went wrong ${error}`);
      })
  })
}

function createContainer(username, logoImg, url, status) {
  if (status == undefined || null){
    offline = offline.setAttribute('class', 'wrapper offline')
    console.log(offline + " offline") // Getting Undefined
    profile =
    `
    <a href="${url}">
      <ul class="offline" id="${username}">
        <li class="logoImg"><img src="${logoImg}" alt="${username}_image"></li>
        <li class="user">Name: ${username}</li>
      </ul>
    </a>
    `
    app.appendChild(offline)
    offline.innerHTML = profile
  } else {
      online = online.setAttribute('class', 'wrapper online')
      console.log(online + " online")  // Getting Undefined
      profile =
      `
      <a href="${url}">
        <ul class="online" id="${username}">
          <li class="logoImg"><img src="${logoImg}" alt="${username}_image"></li>
          <li class="user">Name: ${username}</li>

        </ul>
      </a>
      `
      app.appendChild(online)
      online.innerHTML = profile
  }
}