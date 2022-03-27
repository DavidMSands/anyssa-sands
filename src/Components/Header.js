import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { VscMenu } from 'react-icons/vsc'
import { CgClose } from 'react-icons/cg'
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
                <VscMenu id="button"/>
                <CgClose id='cancel' />
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