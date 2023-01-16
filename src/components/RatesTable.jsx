import styles from "./RatesTable.module.css";

const data = {
  dollarRates: [
    {
      name: "Kit",
      buy: 40.4,
      sell: 40.9,
    },
    {
      name: "Minfin",
      buy: 40.45,
      sell: 40.52,
    },
    {
      name: "MinfinNoBuy",
      sell: 40.52,
    },
    {
      name: "MinfinNoSell",
      buy: 40.52,
    },
  ],
};

const RatesTable = () => {
  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>$ Вінниця</div>
      <div className={styles.tableContent}>
        {data.dollarRates.map((rate) => (
          <>
            <div className={styles.name}>{rate.name}</div>
            <div className={styles.exchangeRate}>
              <div className="buy">{rate.buy?.toFixed(2)}</div>
              <div className="divider">/</div>
              <div className="sell">{rate.sell?.toFixed(2)}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default RatesTable;
