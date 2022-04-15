import styles from "./NotFoundScreen.module.css";

const NotFoundScreen = () => {
  return (
    <div className={styles.container}>
      <p className={styles["not-found"]}>Page not found!</p>
    </div>
  );
};

export default NotFoundScreen;
