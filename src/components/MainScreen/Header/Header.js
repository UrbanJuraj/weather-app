import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { MdPlace } from "react-icons/md";

import styles from "./Header.module.css";

const Header = () => {
  const city = useSelector((state) => state.city.city);
  const date = useSelector((state) => state.city.date);

  return (
    <header className={styles.header}>
      <p>{date}</p>
      <Link to="/search">
        {city}
        <MdPlace />
      </Link>
    </header>
  );
};

export default Header;
