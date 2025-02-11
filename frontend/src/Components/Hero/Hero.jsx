import React from 'react'
import './Hero.css'
import arrow from '../Assets/Frontend_Assets/arrow.png'
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png'
import farmer from '../Assets/Frontend_Assets/farmer.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                 <div className='hero-hand-icon'>
                     <p>Fresh</p>
                     <img src={hand_icon} alt="" />
                  </div>
                  <p>Farm Products</p>
                  <p>For Everyone</p>
            </div> 
            <div className='hero-latest-btn'>
                <div>Fresh Products</div>
                <img src={arrow} alt="" />
            </div>
        </div>
        <div className='hero-right'>
          <img src={farmer} alt="" />
        </div>
      </div>
  )
}

export default Hero