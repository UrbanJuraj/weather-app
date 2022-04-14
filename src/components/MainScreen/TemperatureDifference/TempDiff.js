import { WiDirectionUp, WiDirectionDown } from "react-icons/wi";

import styles from "./TempDiff.module.css";

const TempDiff = (props) => {
  return (
    <div className={styles.range}>
      <div>
        <p>35&deg;C</p>
        <WiDirectionUp />
      </div>
      <div>
        <p>27&deg;C</p>
        <WiDirectionDown />
      </div>
    </div>
  );
};

export default TempDiff;
