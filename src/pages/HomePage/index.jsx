import { useState } from "react";
import { ContainerHome } from "./style";
import Header from "../../components/Header/index";
import SearchBar from "../../components/SearchBar/index";
import ChangeBar from "../../components/ChangeBar/index";
import Graphic from "../../components/Graphic";
import getGeocoding from "../../services/GeocodingApi";
import getWeather from "../../services/WeatherApi";

function HomePage() {
  const [weather, setWeather] = useState([]);

  function getCity(searchValue) {
    getGeocoding(searchValue)
      .then((res) => {
        const cityFirst = res.data;
        const lat = cityFirst[0].lat;
        const lon = cityFirst[0].lon;
        getweather(lat, lon);
      })
      .catch((err) => err.response);
  }

  function getweather(lat, lon) {
    console.log(lat);
    getWeather(lat, lon)
      .then((res) => setWeather(res.data))
      .catch((err) => alert(JSON.stringify(err.response.data)));
  }

  return (
    <ContainerHome>
      <Header />
      <SearchBar getCity={getCity} />
      <ChangeBar weather={weather} />
      <Graphic />
    </ContainerHome>
  );
}

export default HomePage;
