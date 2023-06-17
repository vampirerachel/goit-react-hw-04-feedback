import Feedback from "./Feedback/Feedback";
import SectionTitle from "./SectionTitle/sectionTitle";
import React, { useState, useEffect, useRef, useContext, createContext } from "react";

const FeedbackContext = React.createContext();

export const App = () => {
  const [feedback, setFeedback] = useState({ Good: 0, Bad: 0, Neutral: 0 });

  const feedbackRef = useRef();

  useEffect(() => {
    feedbackRef.current = feedback;
    
  }, [feedback]);

  function CountTotalFeedback() {
    const feedback = feedbackRef.current;
    return feedback?.Good + feedback?.Bad + feedback?.Neutral || 0;
  }

  function CountPositiveFeedbackPercentage() {
    const feedback = feedbackRef.current;
    const total = feedback?.Good + feedback?.Neutral + feedback?.Bad;
    const positive = feedback?.Good;
    return total === 0 ? 0 : Math.round((positive / total) * 100);
  }

  function HandleChange(event) {
    const feedback = feedbackRef.current;
    setFeedback((previous) => {
      return {
        ...previous,
        [event.target.textContent]: previous[event.target.textContent] + 1,
      };
    });
  }

  return (
    <FeedbackContext.Provider value={feedbackRef.current}>
      <SectionTitle title={"Please Leave Feedback"} subtitle={"Statistics"} />
      <Feedback
        good={feedback.Good}
        neutral={feedback.Neutral}
        bad={feedback.Bad}
        onClick={HandleChange}
        calcPositive={CountPositiveFeedbackPercentage}
        countTotal={CountTotalFeedback}
      />
    </FeedbackContext.Provider>
  );
};

