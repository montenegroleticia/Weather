import axios from "axios";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const weather = import.meta.env.VITE_APP_WEATHER_URL;

function getWeather(lat, lon) {
  const promise = axios.get(
    `${weather}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
  return promise;
}

export default getWeather;
