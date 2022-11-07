import React from 'react';
import chair from '../../../immages/inspretion.png';
import './Inspiretion.css'
const Inspiretion = () => {
    return (
        <div className='flex bg-slate-200 justify-between font-serif'>
            <div className="md:grid-cols-2 grid grid-cols-1">
            <div className="left-side my-20 ml-20">
                <h5 className='text-2xl'>NEWS AND INSPIRATION</h5>
                <h2 className='text-6xl font bolder my-5'>NEW ARRIVALS</h2>
                <div className='dik mb-2'>
                    <div className="inner"></div>
                </div>
                <div className=" flex">
                    <div className="timer">
                        <h3 className='text-orange-600 text-xl'>0</h3>
                        <p className='text-xl'>day</p>
                    </div>
                    
                    <div className="timer">
                        <h3 className='text-orange-600 text-xl'>0</h3>
                        <p className='text-xl'>hours</p>
                    </div>
                    
                    <div className="timer">
                        <h3 className='text-orange-600 text-xl'>0</h3>
                        <p className='text-xl'>mins</p>
                    </div>
                    
                    <div className="timer">
                        <h3 className='text-orange-600 text-xl'>0</h3>
                        <p className='text-xl'>secs</p>
                    </div>
                    
                    
                </div>
                <h1 className='text-6xl text-orange-600 mt-8'>$70</h1>
            </div>
            <div className="right-side">
                <img src={chair} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Inspiretion;