import React from 'react'
import './nav.scss'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <Link to='/' className='logo'>Logo</Link>

        <div className='links'>
            <Link to='/about' className='about-link'>About</Link>
            <Link to='/contact' className='contact-link'>Contact Us</Link>
            <Link to='/products' className='products-link'>Products</Link>
            <Link to='/services' className='services-link'>Services</Link>
        </div>

        <div className='auth'>
            <Link to='/login'>Log In</Link>
            <Link to='/signup'>Sign Up</Link>
        </div>

    </nav>
  )
}

export default Nav