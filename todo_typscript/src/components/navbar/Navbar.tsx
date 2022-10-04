import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
    return (
        <div className='nav-container'>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="todo" className="nav-link">Todo</Link>
        </div>
    )
}

export default NavBar