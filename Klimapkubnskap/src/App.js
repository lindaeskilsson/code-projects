import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getContentData } from './ContentData';
import './style.css';

/* Imports our components */
import Header from './Header';
import Start from './Start';
import Footer from './Footer';
import Articles from './Articles';
import Quiz from './Quiz';
import QuizResult from './QuizResult';
import ResultList from './ResultList';

export default function App() {
  // Saves information about content
  const article = getContentData();

  return (
    <div>
      <Header />
      {/* Displays different components depending on the current path */}
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route
          exact
          path="/temperaturer"
          element={<Articles article={article[1]} />}
        />
        <Route
          exact
          path="/glaciarer"
          element={<Articles article={article[0]} />}
        />
        <Route
          exact
          path="/utslapp"
          element={<Articles article={article[2]} />}
        />
        <Route
          exact
          path="/havet"
          element={<Articles article={article[3]} />}
        />
        <Route exact path="/Quiz" element={<Quiz />} />
        <Route exact path="/QuizResult" element={<QuizResult />} />
        <Route exact path="/ResultList" element={<ResultList />} />
      </Routes>
      <Footer />
    </div>
  );
}
