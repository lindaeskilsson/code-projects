import { Link } from 'react-router-dom';
import React from 'react';
import './style.css';

function ResultList() {
  /* Statisk sida som visar topp 10 med namn, poäng och tid*/
  /* Slutligen återanvändbara knappar för att navigera quizsidorna */
  return (
    <div>
      <div>
        <img
          className="prize_img"
          src="https://cdn.pixabay.com/photo/2013/07/13/12/41/cup-160117_960_720.png"
          width={80}
          height={95}
        ></img>
        <h1> Resultatlista </h1>
        <h2> topp 10 </h2>

        <div>
          <div className="quiz_ruta_list">
            <h2>1. Sarah H </h2>
            <h3> Antal poäng:9</h3>
            <h3> Tid: 00:15:02 </h3>
          </div>
          <div className="quiz_ruta_list">
            <h2>2. Simme </h2>
            <h3> Antal poäng:8</h3>
            <h3> Tid: 00:16:56 </h3>
          </div>
          <div className="quiz_ruta_list">
            <h2>3. Emma </h2>
            <h3> Antal poäng:7</h3>
            <h3> Tid: 00:16:34 </h3>
          </div>
          <div className="quiz_ruta_list">
            <h2>4. Patrik </h2>
            <h3> Antal poäng:4</h3>
            <h3> Tid: 00:16:03 </h3>
          </div>
          <div className="quiz_ruta_list">
            <h2>5. Mohammed</h2>
            <h3> Antal poäng:4</h3>
            <h3> Tid: 00:17:23 </h3>
          </div>
          <div className="quiz_ruta_list">
            <h2>6. Tova</h2>
            <h3> Antal poäng:3</h3>
            <h3> Tid: 00:17:11 </h3>
          </div>
          <div className="quiz_ruta_list">
            <h2>7. Abbbsson</h2>
            <h3> Antal poäng:3</h3>
            <h3> Tid: 00:18:21 </h3>
          </div>
          <div className="quiz_ruta_list">
            <h2>8. Lasse </h2>
            <h3> Antal poäng:2</h3>
            <h3> Tid: 00:20:01 </h3>
          </div>
          <div className="quiz_ruta_list">
            <h2>9. Daniel </h2>
            <h3> Antal poäng:1</h3>
            <h3> Tid: 00:22:31 </h3>
          </div>
          <div className="quiz_ruta_list">
            <h2>10. Klimatkingen </h2>
            <h3> Antal poäng:1</h3>
            <h3> Tid: 00:22:31 </h3>
          </div>
        </div>
      </div>
      <div>
        <Link to="/Quiz">
          <button className="btn_quiz"> Testa en gång till</button>
        </Link>
        <Link to="/">
          <button className="btn_result_start">
            {' '}
            Tillbaka till startsidan
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ResultList;
