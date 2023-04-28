import React, { Fragment } from 'react';
// import { useRef } from 'react'
// import { FaBars, FaTimes } from 'react-icons/fa'
import { link } from 'react-router-dom'
import './styles/NavStyle.css'
import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Register from './pages/Register';
// import Login from './pages/Login'
import { Link } from 'react-router-dom'
const NavigationBar = () => {
    return (
        <nav className="Navbar">
            <div className="logo">shoopingMALL</div>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/Register"><li>Register</li></Link>
                <Link to="/Login"><li>Login</li></Link>
            </ul>
        </nav>
    )
}

export default NavigationBar