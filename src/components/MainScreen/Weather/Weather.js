import { WiDayCloudy } from "react-icons/wi";

import styles from "./Weather.module.css";

const Weather = (props) => {
  return (
    <div className={styles.weather}>
      <WiDayCloudy className={styles.sunny} />
      <p>Sunny</p>
    </div>
  );
};

export default Weather;
