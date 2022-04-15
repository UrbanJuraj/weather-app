import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchCityWeather } from "../../../store/city-actions";

import styles from "./SearchedCity.module.css";

const SearchedCity = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = () => {
    dispatch(fetchCityWeather(props.lat, props.lon));
    navigate("/");
  };

  return (
    <div className={styles.city} onClick={onClickHandler}>
      <p className={styles["city-name"]}>{props.city}</p>
      <p className={styles.degree}>{props.temperature}&deg;C</p>
    </div>
  );
};

export default SearchedCity;
