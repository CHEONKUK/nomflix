import axios from "axios";
import key from "./key";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: key,
    language: "en-US"
  }
});

api.get("tv/popular");

export default api;
