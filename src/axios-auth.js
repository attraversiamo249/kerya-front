import axios from "axios";
const instance = axios.create({
  baseURL: "kerya.herokuapp.com/api"
});

export default instance;
