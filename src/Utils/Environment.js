let APIURL = "";

switch (window.location.hostname) {
  case "localhost" || "127.0.0.1" :
    APIURL = "http://localhost:3001"
    break;

  case "park-planner-app.herokuapp.com" :
    APIURL = "https://park-planner-api.herokuapp.com"
    break;

  default:
    APIURL = "http://localhost:3001"
}

export default APIURL;