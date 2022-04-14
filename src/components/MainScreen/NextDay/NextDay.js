import { WiDayCloudy, WiDirectionUp, WiDirectionDown } from "react-icons/wi";

import styles from "./NextDay.module.css";

const NextDay = (props) => {
  return (
    <div className={styles.content}>
      <WiDayCloudy className={styles.logo} />
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
