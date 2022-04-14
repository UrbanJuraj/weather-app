import { MdPlace } from "react-icons/md";


import styles from "./Form.module.css";

const Form = (props) => {
  return (
    <form>
      <div>
        <input placeholder="Search city ..." />
        <MdPlace className={styles.icon} />
      </div>
    </form>
  );
};

export default Form;
