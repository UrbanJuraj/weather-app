import { useSelector } from "react-redux";

import {
  WiDayCloudy,
  WiThunderstorm,
  WiRain,
  WiSnow,
  WiFog,
  WiDaySunny,
} from "react-icons/wi";

import styles from "./Weather.module.css";

const Weather = () => {
  const weather = useSelector((state) => state.city.weather);

  let description = weather;
  let icon = <WiFog className={styles.icon} />;

  if (weather.includes("Drizzle") || weather.includes("Rain")) {
    icon = <WiRain className={styles.icon} />;
    description = "Rainy";
  } else if (weather.includes("Clouds")) {
    icon = <WiDayCloudy className={styles.icon} />;
    description = "Cloudy";
  } else if (weather.includes("Clear")) {
    icon = <WiDaySunny className={styles.icon} />;
    description = "Sunny";
  } else if (weather.includes("Snow")) {
    icon = <WiSnow className={styles.icon} />;
    description = "Snowy";
  } else if (weather.includes("Thunderstorm")) {
    icon = <WiThunderstorm className={styles.icon} />;
    description = "Storm";
  }

  return (
    <div className={styles.weather}>
      {icon}
      <p>{description}</p>
    </div>
  );
};

export default Weather;
