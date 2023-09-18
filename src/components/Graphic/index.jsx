import { ContainerGraphic } from "./style";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function Graphic({ weatherList }) {
  if (!weatherList || weatherList.length === 0) {
    return;
  }

  function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(0);
  }

  const data = weatherList.list.map((item) => ({
    name: item.dt_txt.split(" ")[0],
    uv: kelvinToCelsius(item.main.temp),
  }));

  const renderLineChart = (
    <LineChart
      width={500}
      height={400}
      data={data}
      argin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#000" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );

  return <ContainerGraphic>{renderLineChart}</ContainerGraphic>;
}

export default Graphic;
