import React from 'react';
import { FaFacebookF,FaGoogle,FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-gray-700 text-white px-6'>
            <hr className='text-white' />
            <div className="grid grid-cols-1 md:grid-cols-3 pt-6">
                <div className="">
                    <h1 className='text-3xl text-bold text-white'>FLATLOGIC</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cupiditate recusandae dolore vel nulla sapiente?. </p>
                    <div className="footer-icons flex mt-8">
                        <FaFacebookF className='mr-3 text-3xl text-bolder'/>
                        <FaGoogle className='mr-3 text-3xl text-bolder'/>
                        <FaLinkedinIn className='text-4xl text-bolder'/>
                    </div>
                </div>
                <div className="">
                    <h2 className='text-3xl text-bolder'>COMPANY</h2>
                    <p>What we do? </p>
                    <p>Available Services </p>
                    <p>Latest Posts </p>
                    <p>FAQs </p>
                </div>
                <div className="">
                    <h2 className='text-3xl text-bolder'>Customer Services</h2>
                    <p>Helps & Contact Us</p>
                    <p>Return and Refunds</p>
                    <p>Online Stores</p>
                    <p>Tern & conditions</p>
                </div>
                
            </div>
            <hr className='text-white mt-6'/>
            <div className=" py-6">
                <h2 className='text-3xl text-gray-200'>© 2020-2022 powered by Flatlogic</h2>
            </div>
        </div>
    );
};

export default Footer;