import Form from "./Form/Form";
import styles from "./Search.module.css";

import SearchedCity from "./SearchedCity/SearchedCity";

const Search = (props) => {
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

  const citiesJsx = cities.map((city) => (
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

      <Form />

      <div className={styles.cities}>{citiesJsx}</div>
    </main>
  );
};

export default Search;
