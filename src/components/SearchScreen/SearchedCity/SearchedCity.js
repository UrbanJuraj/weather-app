import styles from "./SearchedCity.module.css";

const SearchedCity = (props) => {
  return (
    <div className={styles.city}>
      <p className={styles["city-name"]}>{props.city}</p>
      <p className={styles.degree}>{props.temperature}&deg;C</p>
    </div>
  );
};

export default SearchedCity;
