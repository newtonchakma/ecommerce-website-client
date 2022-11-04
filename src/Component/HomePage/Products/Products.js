import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import Product from './Product/Product';

const Products = () => {
    const[products, setProducts]=useProducts();
  
    return (
        <div className='py-20 font-serif'>
            <div className="product-heading">
                <h1 className='text-center text-3xl font-serif font-bold'>New Arrivals</h1>
                <p className='text-center text-xl text-gray-400'>
                Check out our new furniture collection! Cozy sofa, fancy chair, wooden casket, and many more.<br/> The new collection brings an informal elegance to your home.
                </p>
            </div>
            <div className='container mt-20'>
                <div className='grid grid-cols-1 gap-10 md:grid-cols-4 px-8'>
                    {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        ></Product>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Products;