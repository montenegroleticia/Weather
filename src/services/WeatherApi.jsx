import axios from "axios";

function getWeather(lat, lon) {
  const promise = axios.get(
    `${process.env.VITE_APP_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.VITE_APP_API_KEY}`
  );
  return promise;
}

export default getWeather;
