import React from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import { useContext } from 'react'
import Item from '../Components/Item/Item'
import dropdown_icon from '../Components/Assets/Frontend_Assets/dropdown_icon.png'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  
  // Debug logging
  console.log('Current Category:', props.category);
  console.log('All Products:', all_product);
  
  // Filter products for current category (case-insensitive)
  const filteredProducts = all_product.filter(item => 
    item.category.toLowerCase() === props.category.toLowerCase()
  );
  
  console.log('Filtered Products:', filteredProducts);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.map((item,i)=>{
          return <Item key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}/>
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory