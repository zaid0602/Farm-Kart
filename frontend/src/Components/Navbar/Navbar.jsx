import './Navbar.css'
import React, { useContext, useState,useRef } from 'react'
import flogo from '../Assets/Frontend_Assets/flogo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown from '../Assets/Frontend_Assets/nav_dropdown.png'
const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems}= useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={flogo} alt="logo" />
            <p>Farm-Kart</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
          <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu==="Shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Grains")}}><Link style={{textDecoration: 'none'}} to='/Grains'>Grains</Link>{menu==="Grains"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Pulses")}}><Link  style={{textDecoration: 'none'}} to='/Pulses'>Pulses</Link>{menu==="Pulses"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Veggies")}}><Link style={{textDecoration: 'none'}} to='/veggies'>Veggies</Link>{menu==="Veggies"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          {localStorage.getItem('auth-token')
          ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/")}}>Logout</button>
          :<Link to='/login'><button>Login</button></Link>}
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar