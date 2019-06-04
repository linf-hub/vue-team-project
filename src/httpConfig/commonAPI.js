import axios from 'axios'

let API = function () {
  if (!(this instanceof API)) {
    return new API;
  }
}

API.prototype = {
  login(data) {
    return axios.post("login", data)
  }
}

let api = new API();

export default api;