import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import TopSellingProduct from './TopSellingProduct/TopSellingProduct';

const TopSellingProducts = () => {
    const [Products]=useProducts()
    return (
        <div className='py-20'>
            <div className="products-title text-center">
                <h1 className='text-center text-3xl font-serif font-bold'>Top Selling Products</h1>
                <p className=' text-xl text-gray-400 text-center'>
                These furniture sets will become an essential part of an ecosystem of elements in your home.<br/> Your domestic space will easily embrace these tables, chairs, and bookshelves.
                </p>
            </div>
            <div className=" mt-6 px-8 grid grid-cols-2 gap-11">
                {
                    Products.length<1? Products:Products.slice(0,1).map(product=><TopSellingProduct
                    key={product.id}
                    product={product}
                    ></TopSellingProduct>)
                }
            </div>
        </div>
    );
};

export default TopSellingProducts;