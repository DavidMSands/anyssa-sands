
import '../style.css';
import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Header from './Header';
import Home from './HomeComponents/Home';
import About from './AboutComponents/About';
import Portfolio from './Portfolio.js/Portfolio';
import Investment from './Investment/Investment';
import Inquire from './Inquire/Inquire';
import Footer from './HomeComponents/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/investment" element={<Investment />} />
        <Route exact path="/inquire" element={<Inquire />} />
     </Routes>
    </div>
  );
}

export default App;
