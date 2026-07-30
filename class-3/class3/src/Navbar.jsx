import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <Link to={'/'}>
      <li>Home</li>
      </Link>
      <Link to={'/about'}>
      <li>About</li>
      </Link>
      <Link to={'./contactus'}>
      <li>Contact Us</li>
      </Link>
      
    </div>
  )
}

export default Navbar