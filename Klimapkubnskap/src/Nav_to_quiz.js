import React from 'react';
import { Link } from 'react-router-dom';

//  a component so that the user can navigate to the quiz.
const QuizNav = () => {
  return (
    <div className="quiz-info-con">
      <p>Testa dina klimatfärdigheter i ett quiz! </p>
      <Link to="/Quiz">
        <button className="primary_btn">Quiza! </button>
      </Link>
    </div>
  );
};

export default QuizNav;
