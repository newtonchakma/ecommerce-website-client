import React from 'react';
import Products from '../../Products/Products';
import './TopSellingProduct.css'

const TopSellingProduct = ({product}) => {
    const {price,image,name,id,category}=product;
    
    return (
        <>
            <div className="left-product">
            <div class="product  bg-gray-50 shadow image-full">
                <figure><img src={image} alt="Shoes" /></figure>
                  <div class="card-details">
                    <h2 class="card-title font-serif text-black ">ALL NEW</h2>
                    <h4 class="card-title font-serif text-black py-2">SPRING THINGS</h4>
                    <p>Save up to 30%</p>
             </div>
           </div>

            </div>



            <div className="right-product ">
            <div className="grid grid-cols-2">
           
           <div class="product  bg-gray-50 shadow image-full">
                <figure><img src={image} alt="Shoes" /></figure>
                  <div class="card-details">
                    <h2 class="card-title font-serif text-black ">ALL NEW</h2>
                    <h4 class="card-title font-serif text-black py-2">SPRING THINGS</h4>
                    <p>Save up to 30%</p>
                  </div>
           </div>
           <div class="product  bg-gray-50 shadow image-full">
                <figure><img src={image} alt="Shoes" /></figure>
                  <div class="card-details">
                    <h2 class="card-title font-serif text-black ">ALL NEW</h2>
                    <h4 class="card-title font-serif text-black py-2">SPRING THINGS</h4>
                    <p>Save up to 30%</p>
                  </div>
           </div>
           </div>
            </div>
            
        </>
    );
};

export default TopSellingProduct;