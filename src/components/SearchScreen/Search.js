import styles from "./Search.module.css";

import { MdPlace } from "react-icons/md";
import SearchedCity from "./SearchedCity/SearchedCity";

const Search = (props) => {
  return (
    <main className={styles.search}>
      <h2>Location</h2>

      <form>
        <div>
          <input placeholder="Search city ..." />
          <MdPlace className={styles.icon} />
        </div>
      </form>

      <div className={styles.cities}>
        <SearchedCity city="Bratislava" temperature="35" />
        <SearchedCity city="Humenne" temperature="35" />
        <SearchedCity city="Koromla" temperature="35" />
        <SearchedCity city="Kosice" temperature="35" />
        <SearchedCity city="Michalovce" temperature="35" />
        <SearchedCity city="Sobrance" temperature="35" />
      </div>
    </main>
  );
};

export default Search;
