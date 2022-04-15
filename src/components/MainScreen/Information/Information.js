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
  let icon;

  if (props.title.includes("Humidity"))
    icon = <WiHumidity className={styles.icon} />;
  else if (props.title.includes("Pressure"))
    icon = <WiBarometer className={styles.icon} />;
  else if (props.title.includes("Wind"))
    icon = <WiStrongWind className={styles.icon} />;
  else if (props.title.includes("Sunrise"))
    icon = <WiSunrise className={styles.icon} />;
  else if (props.title.includes("Sunset"))
    icon = <WiSunset className={styles.icon} />;
  else if (props.title.includes("Daytime"))
    icon = <WiTime3 className={styles.icon} />;

  return (
    <div className={styles.container}>
      {icon}
      <p className={styles.text}>{props.text}</p>
      <p className={styles.title}>{props.title}</p>
    </div>
  );
};

export default Information;
