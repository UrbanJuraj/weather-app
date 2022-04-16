import styles from "./Notification.module.css";

const Notification = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles["not-found"]}>{props.message}</p>
    </div>
  );
};

export default Notification;
