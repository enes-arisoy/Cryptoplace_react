import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    
    'x-rapidapi-key': import.meta.env.VITE_APP_API_KEY,
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
  },
});
export default api;
