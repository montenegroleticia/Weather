import { useState } from "react";
import { ContainerHome } from "./style";
import Header from "../../components/Header/index";
import SearchBar from "../../components/SearchBar/index";
import ChangeBar from "../../components/ChangeBar/index";
import Graphic from "../../components/Graphic";
import getGeocoding from "../../services/GeocodingApi";
import weatherApi from "../../services/WeatherApi";

function HomePage() {
  const [weather, setWeather] = useState([]);
  const [weatherList, setWeatherList] = useState([]);

  function getCity(searchValue) {
    getGeocoding(searchValue)
      .then((res) => {
        const cityFirst = res.data;
        const lat = cityFirst[0].lat;
        const lon = cityFirst[0].lon;
        getweather(lat, lon);
        getWeatherList(lat, lon);
      })
      .catch((err) => err.response);
  }

  function getweather(lat, lon) {
    weatherApi
      .getWeather(lat, lon)
      .then((res) => setWeather(res.data))
      .catch((err) => alert(JSON.stringify(err.response.data)));
  }

  function getWeatherList(lat, lon) {
    weatherApi
      .getWeatherList(lat, lon)
      .then((res) => setWeatherList(res.data))
      .catch((err) => alert(JSON.stringify(err.response.data)));
  }

  return (
    <ContainerHome>
      <Header />
      <SearchBar getCity={getCity} />
      <ChangeBar weather={weather} />
      <Graphic weather={weather} weatherList={weatherList} />
    </ContainerHome>
  );
}

export default HomePage;
