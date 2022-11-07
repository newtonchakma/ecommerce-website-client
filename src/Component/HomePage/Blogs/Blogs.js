import React from 'react';
import './Blogs.css'
import blog1 from '../../../immages/blog-1.jpg'
import blog2 from '../../../immages/blog-2.jpg'
import blog3 from '../../../immages/blog-3.jpg'

const Blogs = () => {
    return (
        <div>
            <div className="text-center mb-5">
                <h1 className='text-center text-3xl font-serif font-bold'>From Our Blogs</h1>
                <p className='text-center text-xl text-gray-400'>Design your home interior story! Here are the latest trends, tips,<br/> and design tricks to help you out.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
            <div class="card card-compact w-96 bg-base-100 shadow">
                <div className="inner">
                <figure><img src={blog1} alt="Shoes" /></figure>

                </div>
                     <div class="card-body text-center">
                          <h2 class="card-title">What is Shabby Chic?</h2>
                           <p className='text-xl text-orange-500'>Read More</p>
                          
                 </div>
                </div>
            <div class="card card-compact w-96 bg-base-100 shadow">
                        <div className="inner">
                        <figure><img src={blog2} alt="Shoes" /></figure>

                        </div>
                     <div class="card-body text-center">
                          <h2 class="card-title">What is Shabby Chic?</h2>
                           <p className='text-xl text-orange-500'>Read More</p>
                          
                 </div>
                </div>
            <div class="card card-compact w-96 bg-base-100 shadow">
                        <div className="inner">
                        <figure><img src={blog3} alt="Shoes" /></figure>

                        </div>
                     <div class="card-body text-center">
                          <h2 class="card-title">What is Shabby Chic?</h2>
                           <p className='text-xl text-orange-500'>Read More</p>
                          
                 </div>
                </div>
            </div>
            <div className="mx-auto text-center mt-5">
            <button class="btn btn-wide btn-outline btn-warning">VIEW MORE</button>
            </div>
        </div>
    );
};

export default Blogs;