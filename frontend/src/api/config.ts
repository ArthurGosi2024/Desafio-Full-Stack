import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.timeout = 10000;
