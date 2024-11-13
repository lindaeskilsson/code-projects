import React, { useState } from 'react';

import EmissionChart from './charts/EmissionChart';
import SeaChart from './charts/SeaChart';
import GlacierChart from './charts/GlacierChart';
import TempChart from './charts/TempChart';
import QuizNav from './Nav_to_quiz';
import Settings from './Settings';

export default function Articles(props) {
  // State variable for the text mode of the article
  const [textMode, setTextMode] = useState();

  // Saves data about selected article
  const article = props.article;

  // Displays different charts depending on the selected article
  function displayChart(article) {
    switch (article.cardID) {
      case 1:
        return <GlacierChart />;
      case 2:
        return <TempChart />;
      case 3:
        return <EmissionChart />;
      case 4:
        return <SeaChart />;
    }
  }

  return (
    <main>
      {/* Displays article settings */}
      <Settings callback={setTextMode} />

      {/* Dispalys the article */}
      <article id="main">
        <h1>{article.header}</h1>
        <p className="preamble">
          {/* Display the default or simple article depending on the text mode */}
          {textMode ? article.preambleEasy : article.preamble}
        </p>
        <h2>{article.subhead1}</h2>
        <p>{textMode ? article.text1Easy : article.text1}</p>
        <h2>{article.subhead2}</h2>
        <p>{textMode ? article.text2Easy : article.text2}</p>
        <img className="main-img" src={article.mainImage} />
        <p className="img-text">{article.mainReference}</p>
        <h2>{article.subhead3}</h2>
        <p>{textMode ? article.text3Easy : article.text3}</p>
        {/* Displays the chart for the selected article */}
        {displayChart(article)}
      </article>

      {/* Displays a video */}
      <h2>Vill du veta mer?</h2>
      <iframe
        width="560"
        height="315"
        src={article.Video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      {/* Displays short facts */}
      <h2>{article.subhead4}</h2>
      <hr></hr>
      <div class="flipper-container">
        <div class="flip">
          <div class="front face text-center">
            <h3 class="centered">{article.snabbaHead1}</h3>
            <img className="short-img" src={article.snabbaImage1} />
          </div>
          <div class="back face">
            <h3>{article.snabbaHead1}</h3>

            <p class="snabbaText2">{article.snabbaText1}</p>
          </div>
        </div>
      </div>
      <div class="flipper-container">
        <div class="flip">
          <div class="front face text-center">
            <h3 class="centered">{article.snabbaHead2}</h3>
            <img className="short-img" src={article.snabbaImage2} />
          </div>

          <div class="back face">
            <h3>{article.snabbaHead2}</h3>
            <p class="snabbaText2">{article.snabbaText2}</p>
          </div>
        </div>
      </div>
      <div class="flipper-container">
        <div class="flip">
          <div class="front face text-center">
            <h3 class="centered">{article.snabbaHead3}</h3>
            <img className="short-img" src={article.snabbaImage3} />
          </div>
          <div class="back face">
            <h3>{article.snabbaHead3}</h3>
            <p class="snabbaText2">{article.snabbaText3}</p>
          </div>
        </div>
      </div>

      {/* Displays navigation to quiz */}
      <QuizNav />
    </main>
  );
}
