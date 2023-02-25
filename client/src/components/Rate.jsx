import styles from './Rate.module.css';

const Rate = (props) => {
  const formatRate = (rate) => {
    const parsedValue = parseFloat(rate);
    return isNaN(parsedValue) ? '------' : parsedValue.toFixed(2);
  }
  return (
    <div className={styles.container}>
      <span className={styles.name}>{props.name}&nbsp;</span>
      <span className={styles.exchangeRate}>
        <span className="buy">{formatRate(props.buy)}</span>
        <span className="divider">/</span>
        <span className="sell">{formatRate(props.sell)}</span>
      </span>
    </div>
  );
};

export default Rate;
