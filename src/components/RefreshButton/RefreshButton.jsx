import styles from "./RefreshButton.module.css";

const RefreshButton = ({isLoading}) => {
  return (
    <div class={`${styles.circularArrows} ${isLoading ? styles.animated : ''}`}>
      <div class={styles.arrowContainer}>
        <div class={styles.arrowItem}>
          <div class={styles.curve}></div>
          <div class={styles.point}></div>
        </div>
      </div>
      <div class={styles.arrowContainer}>
        <div class={styles.arrowItem}>
          <div class={styles.curve}></div>
          <div class={styles.point}></div>
        </div>
      </div>
    </div>
  );
};

export default RefreshButton;
