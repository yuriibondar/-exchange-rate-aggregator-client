import styles from './Rate.module.css';

const Rate = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.name}>{props.name}&nbsp;</span>
      <span className={styles.exchangeRate}>
        <span className="buy">{props.buy?.toFixed(2)}</span>
        <span className="divider">/</span>
        <span className="sell">{props.sell?.toFixed(2)}</span>
      </span>
    </div>
  );
};

export default Rate;
