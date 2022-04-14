import Header from "./Header/Header";
import Information from "./Information/Information";
import NextDay from "./NextDay/NextDay";
import Temperature from "./Temperature/Temperature";
import TempDiff from "./TemperatureDifference/TempDiff";
import Weather from "./Weather/Weather";

import styles from "./MainScreen.module.css";

const MainScreen = (props) => {
  return (
    <main className={styles.information}>
      <Header />

      <div className={styles.main}>
        <Weather />

        <Temperature />

        <TempDiff />

        <Information title="Humidity" text="49%" />
        <Information title="Pressure" text="1,007mBar" />
        <Information title="Wind" text="23 km/h" />
        <Information title="Sunrise" text="6:03 AM" />
        <Information title="Sunset" text="7:05 PM" />
        <Information title="Daytime" text="13h 1m" />
      </div>

      <div className={styles["next-days"]}>
        <NextDay day="Thu, 09" max="35" min="28" />
        <NextDay day="Fri, 10" max="35" min="27" />
        <NextDay day="Sat, 11" max="34" min="29" />
      </div>
    </main>
  );
};

export default MainScreen;
