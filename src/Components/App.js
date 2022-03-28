
import '../style.css';
import React, { useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import Header from './Header';
import Home from './HomeComponents/Home';
import About from './AboutComponents/About';
import Portfolio from './Portfolio.js/Portfolio';
import Investment from './Investment/Investment';
import Inquire from './Inquire/Inquire';
import Footer from './HomeComponents/Footer';
import { AnimatePresence, motion } from 'framer-motion'

function App() {
const location = useLocation()
  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/investment" element={<Investment />} />
          <Route exact path="/inquire" element={<Inquire />} />
      </Routes>
     </AnimatePresence>
    </div>
  );
}

export default App;
