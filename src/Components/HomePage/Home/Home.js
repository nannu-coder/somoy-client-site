import React from 'react';
import AnotherFeature from '../../AnotherFeature/AnotherFeature';
import BestSeller from '../../BestSeller/BestSeller';
import Feature from '../../Feature/Feature';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <Feature></Feature>
            <BestSeller></BestSeller>
            <AnotherFeature></AnotherFeature>
        </div>
    );
};

export default Home;