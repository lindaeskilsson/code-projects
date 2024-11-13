import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function QuizResult() {
  /* Ikon på pokalen */
  /* Visar resultat av quiz */
  /* Textfält för att skriva in sitt namn */
  /*Återanvändbara knappar */
  return (
    <div>
      <div className="card_quiz">
        <img
          className="prize_img"
          src="https://cdn.pixabay.com/photo/2013/07/13/12/41/cup-160117_960_720.png"
          width={240}
          height={270}
        ></img>
        <h1>Heja dig!</h1>
        <h2>Du hade 10 av 10 rätt</h2>
        <h2 className="result_h2">
          {' '}
          Var med och tävla mot andra klimathjältar{' '}
        </h2>
        <div className="text_compete">
          <input
            className="textfield"
            type="text"
            placeholder="Skriv ditt namn här..."
          />
          <Link to="/ResultList">
            <button className="btn_compete"> Tävla! </button>
          </Link>
        </div>
        <Link to="/Quiz">
          <button className="btn_quiz"> Gör om quiz </button>
        </Link>
      </div>
      <Link to="/ResultList">
        <button className="btn_result_start"> Resultatlista </button>
      </Link>
      <Link to="/">
        <button className="btn_result_start"> Tillbaka till startsidan </button>
      </Link>
    </div>
  );
}
