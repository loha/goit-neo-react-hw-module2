import React from "react";
import styles from "./Options.module.css";

function Options({ onFeedback, onReset, totalFeedback }) {
  return (
    <div className={styles.optionsContainer}>
      <button onClick={() => onFeedback("good")}>Good</button>
      <button onClick={() => onFeedback("neutral")}>Neutral</button>
      <button onClick={() => onFeedback("bad")}>Bad</button>

      {/* Step 4: Only show Reset if at least one feedback was given */}
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}

export default Options;
