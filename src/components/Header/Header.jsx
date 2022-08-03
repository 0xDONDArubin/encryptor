import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
    <div className="header">
        <NavLink className='header-title' to="/encryption">Encryption</NavLink>
        <NavLink className='header-title' to="/decryption">Decryption</NavLink>
    </div>
  )
}

export default Header