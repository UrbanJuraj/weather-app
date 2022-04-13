import styles from "./Search.module.css";

const Search = (props) => {
  return (
    <div className={styles.search}>
      <h2>Location</h2>

      <form>
        <input placeholder="Search city ..." />
      </form>

      <div className={styles.cities}>
        <div className={styles.city}>
          <p className={styles["city-name"]}>Bratislava</p>
          <p className={styles.degree}>35&deg;C</p>
        </div>

        <div className={styles.city}>
          <p className={styles["city-name"]}>Humenne</p>
          <p className={styles.degree}>35&deg;C</p>
        </div>

        <div className={styles.city}>
          <p className={styles["city-name"]}>Koromla</p>
          <p className={styles.degree}>35&deg;C</p>
        </div>

        <div className={styles.city}>
          <p className={styles["city-name"]}>Kosice</p>
          <p className={styles.degree}>35&deg;C</p>
        </div>

        <div className={styles.city}>
          <p className={styles["city-name"]}>Michalovce</p>
          <p className={styles.degree}>35&deg;C</p>
        </div>

        <div className={styles.city}>
          <p className={styles["city-name"]}>Sobrance</p>
          <p className={styles.degree}>35&deg;C</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
