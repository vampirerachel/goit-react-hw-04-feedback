import styles from "./style.module.css";

export default function Feedback({
  good,
  neutral,
  bad,
  onClick,
  calcPositive,
  countTotal,
}) {

  return (
    
    <div className={styles.buttonRow}>
      <div>
      <button className={styles.buttons + " " + styles.green} onClick={onClick}>
        Good
      </button>
      <button className={styles.buttons} onClick={onClick}>
        Neutral
      </button>
      <button className={styles.buttons + " " + styles.red} onClick={onClick}>
        Bad
        </button>
        </div>

      {countTotal() > 0 ? (<div>
      <h3>Good : {good}</h3>
      <h3>Bad : {bad}</h3>
      <h3>Neutral : {neutral}</h3>
        <h3>Total : {countTotal()}</h3>
        <h3> positive feedback : {calcPositive() }%</h3>
        </div>) : <h3> No feedback Given</h3>}
    </div>
      )};

