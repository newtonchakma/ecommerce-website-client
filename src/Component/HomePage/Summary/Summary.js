import React from 'react';
import './Summary.css'
import { MdAddShoppingCart,MdHeadsetMic,MdSync } from "react-icons/md";
const Summary = () => {
    return (
        <div className=' my-20 font-serif'>
            <h1 className='text-center text-5xl font-serif font-bold'>busseness sumary</h1>
           <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-10 px-6">
           <div className="text-center summary-details">
                <div className="icon mb-3">
                <MdAddShoppingCart className='font-bolder text-6xl text-orange-600 mx-auto'/>
                </div>
                <div className="title">
                    <h1 className='text-2xl font-bold'>FREE SHIPPING</h1>
                    <p className='text-xl text-gray-400'>On all orders of $150</p>
                </div>

            </div>
           <div className="text-center summary-details">
                <div className="icon mb-3 ">
                <MdHeadsetMic className='font-bolder text-6xl text-orange-600 mx-auto'/>
                </div>
                <div className="title">
                <h1 className='text-2xl font-bold'>24/7 SUPPORT</h1>
                    <p className='text-xl text-gray-400'>Get help when you need it</p>
                </div>

            </div>
           <div className="text-center summary-details">
                <div className="icon mb-3">
                <MdSync className='font-bolder text-6xl text-orange-600 mx-auto'/>
                </div>
                <div className="title">
                <h1 className='text-2xl font-bold'>100% MONEY BACK</h1>
                    <p className='text-xl text-gray-400'>30 day money back guarantee</p>
                </div>

            </div>
           </div>
        </div>
    );
};

export default Summary;