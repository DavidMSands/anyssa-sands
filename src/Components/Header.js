import React from 'react'
import { Link } from "react-router-dom"
import logo from '../Data/Home/Namelogo.png'

function Header() {
  return (
    <header>
        <a href="index.html">
            <img src={logo} alt="logo" id="logo"/>
            </a>
        <nav>
            <input type="checkbox" id="check" />
            <label for="check">
                <i className="fas fa-bars" id="button"></i>
                <i className="fas fa-times" id="cancel"></i>
            </label>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/investment">Investment</Link></li>
                <li><Link to="/inquire">Inquire</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header