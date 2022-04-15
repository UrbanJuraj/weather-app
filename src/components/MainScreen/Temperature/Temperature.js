import { useSelector } from "react-redux";

import styles from "./Temperature.module.css";

const Temperature = () => {
  const temp = useSelector((state) => state.city.temp);

  return (
    <div className={styles.temperature}>
      <p className={styles.number}>{temp}</p>
      <p className={styles.celsius}>&deg;C</p>
    </div>
  );
};

export default Temperature;
