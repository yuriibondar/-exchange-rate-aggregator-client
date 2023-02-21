import styles from "./RefreshButton.module.css";

const RefreshButton = () => {
  return (
    <div class={`${styles.circularArrows} ${styles.animated}`}>
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
