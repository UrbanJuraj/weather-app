import styles from "./WeatherInformation.module.css";

const WeatherInformation = (props) => {
  return (
    <div className={styles.information}>
      <header className={styles.header}>
        <p>Wednesday, 08 Oct 2020 | 4:30PM</p>
        <a href="/">Kosice, Slovakia</a>
      </header>
    </div>
  );
};

export default WeatherInformation;
