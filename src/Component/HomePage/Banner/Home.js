import React from 'react';
import Navbar from '../../SharePage/Navbar/Navbar';
import Inspiretion from '../Inspiretion/Inspiretion';
import Products from '../Products/Products';
import TopSellingProducts from '../TopSellingProducts/TopSellingProducts';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Inspiretion/>
            <TopSellingProducts/>
        </div>
    );
};

export default Home;