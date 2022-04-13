import styles from "./WeatherInformation.module.css";
import {
  WiDayCloudy,
  WiDirectionUp,
  WiDirectionDown,
  WiHumidity,
  WiBarometer,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiTime3,
  // WiCelsius,
} from "react-icons/wi";

const WeatherInformation = (props) => {
  return (
    <div className={styles.information}>
      <header className={styles.header}>
        <p>Wednesday, 08 Oct 2020 | 4:30PM</p>
        <a href="/">Kosice, Slovakia</a>
      </header>

      <div className={styles.main}>
        <div className={styles.weather}>
          <WiDayCloudy className={styles.sunny} />
          <p>Sunny</p>
        </div>

        <div className={styles.temperature}>
          <p className={styles.number}>33</p>
          <p className={styles.celsius}>&deg;C</p>
          {/* <WiCelsius className={styles.celsius} /> */}
        </div>

        <div className={styles.range}>
          <div>
            <p>35&deg;C</p>
            <WiDirectionUp />
          </div>
          <div>
            <p>27&deg;C</p>
            <WiDirectionDown />
          </div>
        </div>

        <div className={styles.container}>
          <WiHumidity className={styles.logo} />
          <p className={styles.text}>49%</p>
          <p className={styles.title}>Humidity</p>
        </div>

        <div className={styles.container}>
          <WiBarometer className={styles.logo} />
          <p className={styles.text}>1,007mBar</p>
          <p className={styles.title}>Pressure</p>
        </div>

        <div className={styles.container}>
          <WiStrongWind className={styles.logo} />
          <p className={styles.text}>23 km/h</p>
          <p className={styles.title}>Wind</p>
        </div>

        <div className={styles.container}>
          <WiSunrise className={styles.logo} />
          <p className={styles.text}>6:03 AM</p>
          <p className={styles.title}>Sunrise</p>
        </div>

        <div className={styles.container}>
          <WiSunset className={styles.logo} />
          <p className={styles.text}>7:05 PM</p>
          <p className={styles.title}>Sunset</p>
        </div>

        <div className={styles.container}>
          <WiTime3 className={styles.logo} />
          <p className={styles.text}>13h 1m</p>
          <p className={styles.title}>Daytime</p>
        </div>
      </div>

      <div className={styles["next-days"]}>
        <div className={styles.content}>
          <WiDayCloudy className={styles.logo} />
          <p className={styles.text}>Thu, 09</p>

          <div className={styles.numbers}>
            <p className={styles.temperatures}>
              <p>35&deg;C</p>
              <WiDirectionUp />
            </p>
            <p className={styles.temperatures}>
              <p>27&deg;C</p>
              <WiDirectionDown />
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <WiDayCloudy className={styles.logo} />
          <p className={styles.text}>Fri, 10</p>

          <div className={styles.numbers}>
            <p className={styles.temperatures}>
              <p>35&deg;C</p>
              <WiDirectionUp />
            </p>
            <p className={styles.temperatures}>
              <p>27&deg;C</p>
              <WiDirectionDown />
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <WiDayCloudy className={styles.logo} />
          <p className={styles.text}>Sat, 11</p>

          <div className={styles.numbers}>
            <p className={styles.temperatures}>
              <p>35&deg;C</p>
              <WiDirectionUp />
            </p>
            <p className={styles.temperatures}>
              <p>27&deg;C</p>
              <WiDirectionDown />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInformation;
