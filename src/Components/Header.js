import React, { useState } from 'react'
import { Link, NavLink, useLocation } from "react-router-dom"
import { VscMenu } from 'react-icons/vsc'
import { CgClose } from 'react-icons/cg'
import logo from '../Data/Home/Namelogo.png'

function Header() {
    const location = useLocation()
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
                <li onClick={handleCheckedFalse}><NavLink to="/" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} >Home</NavLink></li>
                <li onClick={handleCheckedFalse}><NavLink to="/about" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} >About</NavLink></li>
                <li onClick={handleCheckedFalse}><NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} >Portfolio</NavLink></li>
                <li onClick={handleCheckedFalse}><NavLink to="/investment" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} >Investment</NavLink></li>
                <li onClick={handleCheckedFalse}><NavLink to="/inquire" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} >Inquire</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header