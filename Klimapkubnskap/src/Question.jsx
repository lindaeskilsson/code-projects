import React from 'react';

const Question = (props) => {
  const data = props.data;

  /* Meddelande om ingen data kan hittas */
  if (data === undefined) return <p>Data saknas</p>;

  const handleChange = (e) => {
    props.onAnswer(e.target.value);
  };
  const cardID = data;
  const currentUserAnswer = data.currentUserAnswer;
  return (
    /* Visar tillsammans aktuell fråga med nummer */
    /*Alla svarsalternativ visas */
    /*Radiobutton för användaren att välja ett svarsalternativ*/
    <div class="quiz_ruta">
      <div>
        <h5 class="quiz_h3">
          Fråga {props.index + 1 + '. ' + cardID.question}
        </h5>
        {cardID.all_answers.map((answer) => (
          <div>
            <input
              type="radio"
              value={answer}
              checked={currentUserAnswer === answer ? true : false}
              onChange={handleChange}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              {answer}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Question;
