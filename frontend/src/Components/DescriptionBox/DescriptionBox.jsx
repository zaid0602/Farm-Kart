import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Farm-kart is an e-commerce platform dedicated 
                to connecting consumers with fresh, high-quality 
                farm products straight from local farmers. 
                The website emphasizes sustainability and 
                transparency, ensuring customers have access 
                to organic, locally grown fruits, vegetables, 
                dairy, and other farm products. By bridging 
                the gap between farmers and consumers, Farm-kart
                 supports local agriculture and promotes healthy 
                 eating habits. The platform offers user-friendly
                  browsing, secure transactions, and flexible delivery
                   options, making it easier than ever to enjoy fresh,
                    farm-to-table produce with a click.</p>
        </div>
    </div>
  )
}

export default DescriptionBox