import React from 'react';
import Footer from '../../SharePage/Navbar/Footer/Footer';
import Navbar from '../../SharePage/Navbar/Navbar';
import Blogs from '../Blogs/Blogs';
import Inspiretion from '../Inspiretion/Inspiretion';
import Products from '../Products/Products';
import Subcribe from '../Subcribe/Subcribe';
import Summary from '../Summary/Summary';
import TopSellingProducts from '../TopSellingProducts/TopSellingProducts';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Inspiretion/>
           {/*  <TopSellingProducts/> */}
            <Summary/>
            <Blogs/>
            <Subcribe/>
            <Footer/>
        </div>
    );
};

export default Home;