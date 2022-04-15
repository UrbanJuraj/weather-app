import { WiDirectionUp, WiDirectionDown } from "react-icons/wi";
import { useSelector } from "react-redux";

import styles from "./TempDiff.module.css";

const TempDiff = () => {
  const max = useSelector((state) => state.city.max);
  const min = useSelector((state) => state.city.min);

  return (
    <div className={styles.range}>
      <div>
        <p>{max}&deg;C</p>
        <WiDirectionUp />
      </div>
      <div>
        <p>{min}&deg;C</p>
        <WiDirectionDown />
      </div>
    </div>
  );
};

export default TempDiff;
