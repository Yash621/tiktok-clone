import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok17381.herokuapp.com",
});

export default instance;
