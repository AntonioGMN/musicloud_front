import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.VITE_APP_BASE_API_URL,
});

export default instance;
