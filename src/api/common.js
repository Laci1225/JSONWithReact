import axios from "axios";

const httpClient = axios.create({baseURL: "https://api.spacexdata.com/", headers: {}})

export default httpClient;