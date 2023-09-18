import axios from "axios";

function getGeocoding(city) {
  const promise = axios.get(
    `${process.env.VITE_APP_GEOCODING_URL}/direct?q=${city}&limit=1&appid=${process.env.VITE_APP_API_KEY}`
  );
  return promise;
}

export default getGeocoding;
