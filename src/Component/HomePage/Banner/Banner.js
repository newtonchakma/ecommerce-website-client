import React from 'react';
import './Banner.css'
import { BeakerIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const Banner = () => {
    return (
        <section id='banner' className="text-gray-600 body-font h-[650px]">
        <div className=" mx-auto flex items-center 
         h-full ">
          <div className="flex flex-col pl-8 font-serif pt-5 mt-5 rounded-lg  mb-10 md:mb-0 md:w-[800px] mx-8 ">
                <h4 className="title-font  text-xl font-medium font-bold text-black ">CHAIR
                    
                </h4>
                <h6 className="leading-relaxed md:text-2xl text-black mb-3">GET ALL</h6>
                <h2 className="leading-relaxed md:text-5xl text-black text-3xl font-bold font-serif">THE GOOD STUFF</h2>
                <button className="btn btn-wide my-8  btn-warning font-bold text-2xl text-white">VIEW MORE
                <ArrowRightIcon className="h-6 w-6 text-white ml-2 font-bold"/>
                </button>
            </div>  
        </div>
    </section>  
    );
};

export default Banner;