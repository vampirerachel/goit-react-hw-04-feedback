import React, { useState } from "react";
import PropTypes from "prop-types";
import Feedback from "./Feedback/Feedback";
import SectionTitle from "./SectionTitle/sectionTitle";

export const App = () => {
  const [feedback, setFeedback] = useState({ Good: 0, Bad: 0, Neutral: 0 });

  function countTotalFeedback() {
    const { Good, Bad, Neutral } = feedback;
    return Good + Bad + Neutral;
  }

  function countPositiveFeedbackPercentage() {
    const { Good } = feedback;
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((Good / total) * 100);
  }

  function handleChange(event) {
    const feedbackType = event.target.textContent;
    setFeedback((previous) => ({
      ...previous,
      [feedbackType]: previous[feedbackType] + 1,
    }));
  }

  return (
    <div>
      <SectionTitle title={"Please Leave Feedback"} subtitle={"Statistics"} />
      <Feedback
        feedback={feedback}
        onClick={handleChange}
        calcPositive={countPositiveFeedbackPercentage}
        countTotal={countTotalFeedback}
      />
    </div>
  );
};

App.propTypes = {
  onClick: PropTypes.func.isRequired,
  calcPositive: PropTypes.func.isRequired,
  countTotal: PropTypes.func.isRequired,
};

