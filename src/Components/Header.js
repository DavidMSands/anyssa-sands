import React, { useState } from 'react'
import { Link } from "react-router-dom"
import logo from '../Data/Home/Namelogo.png'

function Header() {
    const [isChecked, setIsChecked] = useState(false)

    const handleChecked = () => {
        setIsChecked(!isChecked)
    }

    const handleCheckedFalse = () => {
        setIsChecked(false)
    }

  return (
    <header>
        <Link to="/"><img src={logo} alt="logo" id="logo"/></Link>
        <nav>
            <input type="checkbox" id="check" checked={isChecked} onChange={handleChecked} />
            <label for="check">
                <i className="fas fa-bars" id="button"></i>
                <i className="fas fa-times" id="cancel"></i>
            </label>
            <ul>
                <li onClick={handleCheckedFalse}><Link to="/">Home</Link></li>
                <li onClick={handleCheckedFalse}><Link to="/about">About</Link></li>
                <li onClick={handleCheckedFalse}><Link to="/portfolio">Portfolio</Link></li>
                <li onClick={handleCheckedFalse}><Link to="/investment">Investment</Link></li>
                <li onClick={handleCheckedFalse}><Link to="/inquire">Inquire</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header