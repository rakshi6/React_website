import React, { useState } from 'react'
import './header.css'
import { CDNURL } from '../../constants/const'
import { Link } from 'react-router-dom'

function Header() {
  const [btn, setBtn] = useState("Login");
  const handleButton = () =>  {
    btn === "Login" ? setBtn("Logout") : setBtn("Login");
  }
  return (
    <div className='header'>
        <div className='logo-container'>
        <img
          src={CDNURL.LOGO_URL}
          alt="App Logo"
          className="logo"
        />
        </div>
        <div className='nav-items'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contactus'>Contact Us</Link></li>
            <li>Cart</li>
            <button className='login' onClick={handleButton}>{btn}</button>
          </ul>
        </div>
    </div>
  )
}

export default Header
