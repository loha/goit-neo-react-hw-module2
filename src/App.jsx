import React, { useState, useEffect } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Read from localStorage on initial mount
  useEffect(() => {
    const savedFeedback = localStorage.getItem("feedback");
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  // Save feedback to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  // Calculate total feedback and positive percentage
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  // Update and reset functions
  const updateFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className="appContainer">
      {/* Main content placed above the video */}
      <div className="content">
        <h2>Sip Happens Café</h2>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>

        <Options
          onFeedback={updateFeedback}
          onReset={resetFeedback}
          totalFeedback={totalFeedback}
        />

        {totalFeedback === 0 ? (
          <Notification message="No feedback yet" />
        ) : (
          <Feedback
            feedback={feedback}
            total={totalFeedback}
            positive={positivePercentage}
          />
        )}
      </div>
    </div>
  );
}

export default App;
