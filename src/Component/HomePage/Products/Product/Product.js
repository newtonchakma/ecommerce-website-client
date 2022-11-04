import React from 'react';

const Product = ({product}) => {
    const {price,image,name,id,category}=product
    return (
        <div class="card card-compact  bg-base-100 shadow">
        <figure><img src={image} alt="Shoes" /></figure>
        <div class="card-body">
            <p className='text-gray-400 text-lg'>{category}</p>
            <h2 class="card-title ">{name}</h2>
          <p className='text-xl'>{price}</p>
        
        </div>
      </div>
    );
};

export default Product;