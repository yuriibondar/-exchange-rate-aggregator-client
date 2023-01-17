import styles from './Rate.module.css';

const Rate = (props) => {
  return (
    <>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.exchangeRate}>
        <div className="buy">{props.buy?.toFixed(2)}</div>
        <div className="divider">/</div>
        <div className="sell">{props.sell?.toFixed(2)}</div>
      </div>
    </>
  );
};

export default Rate;
