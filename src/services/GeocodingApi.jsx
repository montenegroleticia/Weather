import axios from "axios";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const geo = import.meta.env.VITE_APP_GEOCODING_URL;

function getGeocoding(city) {
  const promise = axios.get(`${geo}/direct?q=${city}&limit=1&appid=${apiKey}`);
  return promise;
}

export default getGeocoding;
