import React from 'react'
import './Offers.css'
import rice from '../Assets/Frontend_Assets/rice.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={rice} alt="" />
        </div>
    </div>
  )
}

export default Offers