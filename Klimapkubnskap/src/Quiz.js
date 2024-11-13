import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Question from './Question';
import shuffleArray from './Shuffle';

const Quiz = () => {
  const [QuizData, setQuizData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);

  /* Hämtar data från quizdata */
  /* Hämtar data från Shuffle för att slumpa ordningen på frågorna */
  useEffect(() => {
    const url = '/data/quizdata.json';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.map(
          (p) => (p.all_answers = [p.correct_answer, ...p.incorrect_answers])
        );
        shuffleArray(data);
        data.map((p) => shuffleArray(p.all_answers));

        setQuizData(data);
      });
  }, []);
  /* Styr knapparna för att kunna gå fram/tillbaka i quizet */
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  const handleNext = () => {
    if (currentIndex < QuizData.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const onAnswer = (ans) => {
    QuizData[currentIndex].isCorrect =
      QuizData[currentIndex].correct_answer == ans;
    QuizData[currentIndex].currentUserAnswer = ans;
    setQuizData([...QuizData]);
  };
  /* Styr knappen för Rätta quizet */
  const handleFinish = () => {
    setModalShow(true);
  };
  /* Styr för att kunna starta om quizet igen */
  const handleReset = () => {
    setCurrentIndex(0);
    QuizData.map((p) => (p.currentUserAnswer = ''));
    shuffleArray(QuizData);
    QuizData.map((p) => shuffleArray(p.all_answers));
    setQuizData([...QuizData]);
  };
  return (
    /* Hämtar data om frågorna från Question */
    /* Visar knapparna för fram/tillbaka/rätta */
    <main>
      <div>
        <h1>Testa dina kunskaper</h1>
        <p>
          Nu när du har studerat klimatförändringarna lite närmare kan du här
          sätta dina nya kunskaper på prov. Quizet består av tio stycken frågor
          som är baserade på artiklarna du har läst och graferna som du har
          studerat. När du är klar med quizet kan du välja om du vill vara med
          och tävla mot andra klimathjältar!
        </p>
        <Question
          data={QuizData[currentIndex]}
          index={currentIndex}
          numberOfQuestion={QuizData.length}
          onAnswer={onAnswer}
        ></Question>
        <div>
          <div className="quiz_btn_con">
            <button class="btn_prev" onClick={handlePrev}>
              Tillbaka
            </button>
            <button class="primary_btn" onClick={handleNext}>
              Nästa fråga
            </button>
          </div>
          <div>
            {currentIndex == QuizData.length - 1 && (
              <Link to="/QuizResult">
                <button class="finish_btn" onClick={handleFinish}>
                  Rätta quizet!
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Quiz;
