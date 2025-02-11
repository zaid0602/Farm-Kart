import React from 'react'
import './Navbar.css'
import flogo from '../../assets/Admin_Assets/flogo.png'
import navprofile from '../../assets/Admin_Assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={flogo} alt="" className='nav-logo' />
        <img src={navprofile} alt="" className='nav-profile'/>
    </div>
  )
}

export default Navbar