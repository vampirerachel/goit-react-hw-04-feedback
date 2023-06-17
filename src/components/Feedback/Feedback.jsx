import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.css";

export default function Feedback({
  feedback,
  onClick,
  calcPositive,
  countTotal,
}) {
  const { Good, Bad, Neutral } = feedback;

  return (
    <div className={styles.buttonRow}>
      <div>
        <button
          className={styles.buttons + " " + styles.green}
          onClick={onClick}
        >
          Good
        </button>
        <button className={styles.buttons} onClick={onClick}>
          Neutral
        </button>
        <button
          className={styles.buttons + " " + styles.red}
          onClick={onClick}
        >
          Bad
        </button>
      </div>

      {countTotal() > 0 ? (
        <div>
          <h3>Good : {Good}</h3>
          <h3>Bad : {Bad}</h3>
          <h3>Neutral : {Neutral}</h3>
          <h3>Total : {countTotal()}</h3>
          <h3>Positive feedback : {calcPositive()}%</h3>
        </div>
      ) : (
        <h3>No feedback given</h3>
      )}
    </div>
  );
}

Feedback.propTypes = {
  feedback: PropTypes.shape({
    Good: PropTypes.number.isRequired,
    Bad: PropTypes.number.isRequired,
    Neutral: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  calcPositive: PropTypes.func.isRequired,
  countTotal: PropTypes.func.isRequired,
};


