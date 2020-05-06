const API_URL = "http://localhost:3000"

let getPlayersObj = () => {
    return fetch(API_URL + "/players").then(r => r.json())
}

let getEventsObj = () => {
    return fetch(API_URL + "/events").then(r => r.json())
}