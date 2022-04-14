import styles from "./Temperature.module.css";

const Temperature = (props) => {
  return (
    <div className={styles.temperature}>
      <p className={styles.number}>33</p>
      <p className={styles.celsius}>&deg;C</p>
      {/* <WiCelsius className={styles.celsius} /> */}
    </div>
  );
};

export default Temperature;
