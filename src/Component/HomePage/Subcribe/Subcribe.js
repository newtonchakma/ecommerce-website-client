import React from 'react';
import './Subcribe.css'

const Subcribe = () => {
    return (
        <div className='flex justify-around  pt-20 pb-8 font-serif bg-gray-700 text-white mt-20 font-serif'>
            <div className="subscribe-details">
                <h1 className='text-4xl font-semibold pb-1'>Many desktop publishing</h1>
                <p className=''>Do you want to receive exclusive email offers? Subscribe to our newsletter! <br/>You will receive a unique promo code which gives you a 20% discount on all our products in 10 minutes.</p>
            </div>
            <div className="email flex text-black">
            <input type="text" placeholder="Enter Email" class="input input-bordered input-lg w-full max-w-xs" />
            <button class="btn no-animation btn-secondary btn-lg ml-2 ">Subscribe</button>
            </div>
        </div>
    );
};

export default Subcribe;