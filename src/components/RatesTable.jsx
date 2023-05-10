import Rate from "./Rate";
import styles from "./RatesTable.module.css";
import RefreshButton from "./RefreshButton/RefreshButton";

const RatesTable = (props) => {
  const dollarRates = props.exchangers.map((ex) => (
    <Rate
      name={ex.name}
      buy={ex.currencies.USD.buy}
      sell={ex.currencies.USD.sell}
      key={ex.id}
    />
  ));

  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>$ Вінниця <span className={styles.updateButton} onClick={props.fetchRates}><RefreshButton isLoading={props.isLoading}/></span></div>
      <div className={styles.tableContent}>{dollarRates}</div>      
    </div>
  );
};

export default RatesTable;
