import React from 'react';
import './Product.css'
const Product = ({product,productDetails}) => {
    const {price,image,name,id,category}=product
   
    return (
        <div class="card card-compact  bg-base-100 shadow ">
        <div className="inner">
        <figure><img src={image} alt="Shoes" /></figure>
        </div>
        <div class="card-body ">
            <p className='text-gray-400 text-lg'>{category}</p>
            <h2 class="card-title  ">{name}</h2>
          <p className='text-xl'>{price}</p>
        <button  onClick={()=>productDetails(id)} className='btn'>Order</button>
        </div>
      </div>
    );
};

export default Product;