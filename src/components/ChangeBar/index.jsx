import { ContainerChangeBar, ContainerLeft, ContainerRight } from "./style";

function ChangeBar({ weather }) {
  if (!weather || weather.length === 0) {
    return;
  }

  function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(0);
  }

  const celsiusTemp = kelvinToCelsius(weather.main.temp);
  const celsiusTempMin = kelvinToCelsius(weather.main.temp_min);
  const celsiusTempMax = kelvinToCelsius(weather.main.temp_max);

  const translationMap = {
    Clear: "Céu aberto",
    Clouds: "Nublado",
    Rain: "Chuvoso",
    Snow: "Nevando",
    Drizzle: "Chuviscando",
    Mist: "Neblina",
    Thunderstorm: "tempestade",
  };

  const translatedWeather =
    translationMap[weather.weather[0].main] || weather.weather[0].main;

  const colorMap = {
    "Céu aberto": "#ffff99",
    Nublado: "#e6e6e6",
    Chovendo: "#add8e6",
    Nevando: "#ffffff",
    Tempestade: "#d8bfd8",
    Chuviscando: "#add8e6",
    Neblina: "#e6e6e6",
  };

  const backgroundColor = colorMap[translatedWeather] || "white";

  return (
    <ContainerChangeBar style={{ backgroundColor }}>
      <ContainerLeft>
        <h3>Agora: {weather.name}</h3>
        <div>
          <p>Mínima: {celsiusTempMin}°</p>
          <p>Máxima: {celsiusTempMax}°</p>
        </div>
      </ContainerLeft>
      <ContainerRight>
        <p>{translatedWeather}</p>
        <h1>{celsiusTemp}°C</h1>
      </ContainerRight>
    </ContainerChangeBar>
  );
}

export default ChangeBar;
