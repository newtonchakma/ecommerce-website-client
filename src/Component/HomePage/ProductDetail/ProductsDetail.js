import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsDetail = () => {
    const {product} = useParams();

    return (
        <div>
            <h1 className='text-6xl mt-30'>his is serverdetails:{product}</h1>
        </div>
    );
};

export default ProductsDetail;