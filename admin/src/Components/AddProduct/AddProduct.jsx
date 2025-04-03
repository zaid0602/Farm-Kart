import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/Admin_Assets/upload_area.svg'
const AddProduct = () => {
    const [image,setImage] = useState(false);
    const [productDetails, setproductDetails] = useState({
        name:"",
        image:"",
        category:"grains",
        new_price:"",
        old_price:""
        });
 
    const imageHandler = (e) =>{
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) =>{
        setproductDetails({...productDetails,[e.target.name]:e.target.value});
    };

    const Add_Product = async ()=>{
        try {
            if (!image) {
                alert("Please select an image");
                return;
            }

            if (!productDetails.name || !productDetails.category || !productDetails.new_price || !productDetails.old_price) {
                alert("Please fill in all fields");
                return;
            }

            console.log(productDetails);
            let responseData;
            let product = {...productDetails};

            let formData = new FormData();
            formData.append('product',image);

            const uploadResponse = await fetch('http://localhost:4000/upload',{
                method: 'POST',
                headers:{
                    Accept:'application/json',
                },
                body:formData,
            });

            if (!uploadResponse.ok) {
                throw new Error('Failed to upload image');
            }

            responseData = await uploadResponse.json();

            if(responseData.success) {
                product.image = responseData.image_url;
                product.new_price = Number(product.new_price);
                product.old_price = Number(product.old_price);
                console.log(product);

                const addProductResponse = await fetch('http://localhost:4000/addproduct',{
                    method:'POST',
                    headers:{
                        Accept:'application/json',
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(product),
                });

                if (!addProductResponse.ok) {
                    throw new Error('Failed to add product');
                }

                const data = await addProductResponse.json();
                if(data.success) {
                    alert("Product Added Successfully");
                    // Reset form
                    setproductDetails({
                        name:"",
                        image:"",
                        category:"grains",
                        new_price:"",
                        old_price:""
                    });
                    setImage(false);
                } else {
                    alert("Failed to add product");
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Error: " + error.message);
        }
    }

  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product title</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type Here' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="number" name='old_price' placeholder='Type Here' />
            </div>
            <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="number" name='new_price' placeholder='Type Here' />
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                <option value="grains">Grains</option>
                <option value="pulses">Pulses</option>
                <option value="veggies">Veggies</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img' alt="" />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
        </div>
        <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct