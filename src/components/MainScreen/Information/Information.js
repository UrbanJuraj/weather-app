import {
  WiHumidity,
  WiBarometer,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiTime3,
} from "react-icons/wi";

import styles from "./Information.module.css";

const Information = (props) => {
  return (
    <div className={styles.container}>
      {props.title === "Humidity" && <WiHumidity className={styles.logo} />}
      {props.title === "Pressure" && <WiBarometer className={styles.logo} />}
      {props.title === "Wind" && <WiStrongWind className={styles.logo} />}
      {props.title === "Sunrise" && <WiSunrise className={styles.logo} />}
      {props.title === "Sunset" && <WiSunset className={styles.logo} />}
      {props.title === "Daytime" && <WiTime3 className={styles.logo} />}
      <p className={styles.text}>{props.text}</p>
      <p className={styles.title}>{props.title}</p>
    </div>
  );
};

export default Information;
