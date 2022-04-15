import { useSelector } from "react-redux";

import TempDiff from "./TemperatureDifference/TempDiff";
import Temperature from "./Temperature/Temperature";
import Information from "./Information/Information";
import Header from "./Header/Header";
import NextDay from "./NextDay/NextDay";
import Weather from "./Weather/Weather";

import styles from "./MainScreen.module.css";

const MainScreen = () => {
  const informations = useSelector((state) => state.city.informations);
  const nextDays = useSelector((state) => state.city.nextDays);

  const informationsJsx = informations.map((information) => (
    <Information
      key={information.title}
      title={information.title}
      text={information.text}
    />
  ));

  const nextDaysJsx = nextDays.map((day) => (
    <NextDay
      key={day.day}
      weather={day.weather}
      day={day.day}
      max={day.max}
      min={day.min}
    />
  ));

  return (
    <main className={styles.information}>
      <Header />

      <div className={styles.main}>
        <Weather />
        <Temperature />
        <TempDiff />
        {informationsJsx}
      </div>

      <div className={styles["next-days"]}>{nextDaysJsx}</div>
    </main>
  );
};

export default MainScreen;
