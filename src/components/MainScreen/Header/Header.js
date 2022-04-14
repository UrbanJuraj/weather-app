import { Link } from "react-router-dom";

import { MdPlace } from "react-icons/md";

import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <p>Wednesday, 08 Oct 2020 | 4:30PM</p>
      <Link to="/search">
        Kosice, Slovakia
        <MdPlace />
      </Link>
    </header>
  );
};

export default Header;
