import React from "react";
import styles from "./Feedback.module.css";

function Feedback({ feedback, total, positive }) {
  const { good, neutral, bad } = feedback;

  return (
    <div className={styles.feedbackContainer}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
}

export default Feedback;
