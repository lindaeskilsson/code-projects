import React from 'react';
import { Link } from 'react-router-dom';

/* Imports our components */
import QuizNav from './Nav_to_quiz';

// hard coded main page.
export default function Start() {
  return (
    <main id="main">
      <h1>Vad är klimatförändringar?</h1>
      <div>
        <p>
          Klimatförändringar är förändringar av jordens klimat över tid. Det
          handlar om lokalt, här i Sverige och globalt, över hela världen. Detta
          är inget som sker över en natt utan när det bildas en trend över lång
          tid, till exempel att glaciärerna smälter onaturligt mycket och under
          en längre tid.
        </p>
        <p>
          Flera miljoner människor påverkas idag av katastroferna som
          klimatförändringarna för med sig. Detta är ett pågående problem som
          hela tiden utvecklas vilket innebär att också katastroferna ökar. Det
          handlar om konsekvenser som extrema väder, höjda havsnivåer, smältande
          glaciärer och mycket mer.
        </p>
        <h2>Vad beror det på?</h2>
        <p>
          Klimatförändringarna beror på många olika faktorer men den stora boven
          och anledningen till klimatförändringarna är vi människor. Vi har
          bidragit till att förändra luftens naturliga sammansättning genom
          utsläpp av koldioxid och andra växthusgaser. Dessa växthusgaser
          påverkar atmosfärens förmåga att värma upp planeten villket vidrar
          till att den globala temperaturen blir allt högre.
        </p>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/x0DSMH2GILc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <h2>Utforska mer</h2>

      <div className="wrapper">
        <Card
          img="https://i.imgur.com/XVjk9eN.png"
          title="Global 
          temperatur"
          link="/temperaturer"
          /* länkar funkar*/
        />

        <Card
          img="https://i.imgur.com/udUmvav.png"
          title="Glaciärer 
          smälter"
          link="/glaciarer"
        />
      </div>
      <div className="wrapper">
        <Card
          img="https://i.imgur.com/JiLl3wy.png"
          title="Co2
          utsläpp"
          link="/utslapp"
        />
        <Card
          img="https://i.imgur.com/cOd8vnt.png"
          title="Havsnivån blir högre"
          link="/havet"
        />
      </div>
      <QuizNav />
    </main>
  );
}

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} class="card__image" />
      <h2 className="card__title">{props.title}</h2>

      <Link to={props.link} className="primary_btn">
        Läs mer
      </Link>
    </div>
  );
}
