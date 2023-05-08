import styles from "./RefreshButton.module.css";

const RefreshButton = ({isLoading}) => {
  return (
    <div className={`${styles.circularArrows} ${isLoading ? styles.animated : ''}`}>
      <div className={styles.arrowContainer}>
        <div className={styles.arrowItem}>
          <div className={styles.curve}></div>
          <div className={styles.point}></div>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <div className={styles.arrowItem}>
          <div className={styles.curve}></div>
          <div className={styles.point}></div>
        </div>
      </div>
    </div>
  );
};

export default RefreshButton;
