import {
  WiDirectionDown,
  WiDirectionUp,
  WiDayCloudy,
  WiThunderstorm,
  WiRain,
  WiSnow,
  WiFog,
  WiDaySunny,
} from "react-icons/wi";

import styles from "./NextDay.module.css";

const NextDay = (props) => {
  let icon = <WiFog className={styles.icon} />;

  if (props.weather.includes("Drizzle") || props.weather.includes("Rain")) {
    icon = <WiRain className={styles.icon} />;
  } else if (props.weather.includes("Clouds")) {
    icon = <WiDayCloudy className={styles.icon} />;
  } else if (props.weather.includes("Clear")) {
    icon = <WiDaySunny className={styles.icon} />;
  } else if (props.weather.includes("Snow")) {
    icon = <WiSnow className={styles.icon} />;
  } else if (props.weather.includes("Thunderstorm")) {
    icon = <WiThunderstorm className={styles.icon} />;
  }

  return (
    <div className={styles.content}>
      {icon}
      <p className={styles.text}>{props.day}</p>

      <div className={styles.numbers}>
        <div className={styles.temperatures}>
          <p>{props.max}&deg;C</p>
          <WiDirectionUp />
        </div>
        <div className={styles.temperatures}>
          <p>{props.min}&deg;C</p>
          <WiDirectionDown />
        </div>
      </div>
    </div>
  );
};

export default NextDay;
