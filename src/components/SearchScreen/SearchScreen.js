import { useRef, useState } from "react";

import { MdPlace } from "react-icons/md";

import SearchedCity from "./SearchedCity/SearchedCity";

import styles from "./SearchScreen.module.css";

const Search = () => {
  const [filteredCities, setFilteredCities] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const userInputRef = useRef();

  const onChangeHandler = () => {
    setFilteredCities(
      cities.filter((city) =>
        city.name
          .toLowerCase()
          .startsWith(userInputRef.current.value.toLowerCase())
      )
    );
    setIsSearched(true);
  };

  if (filteredCities.length === 0 && !isSearched) setFilteredCities(cities);

  const citiesJsx = filteredCities.map((city) => (
    <SearchedCity
      key={city.name}
      city={city.name}
      lat={city.lat}
      lon={city.lon}
      temperature="39"
    />
  ));

  return (
    <main className={styles.search}>
      <h2>Location</h2>

      <div className={styles.input}>
        <input
          placeholder="Search city ..."
          onChange={onChangeHandler}
          ref={userInputRef}
        />
        <MdPlace className={styles.icon} />
      </div>

      <div className={styles.cities}>{citiesJsx}</div>
    </main>
  );
};

export default Search;

const cities = [
  {
    name: "Bratislava",
    lat: 48.1482,
    lon: 17.1067,
  },
  {
    name: "Humenné",
    lat: 48.9371,
    lon: 21.9163,
  },
  {
    name: "Koromľa",
    lat: 48.7445,
    lon: 22.1814,
  },
  {
    name: "Košice",
    lat: 48.6667,
    lon: 21.3333,
  },
  {
    name: "Michalovce",
    lat: 48.7543,
    lon: 21.9195,
  },
  {
    name: "Sobrance",
    lat: 48.7445,
    lon: 22.1814,
  },
];
