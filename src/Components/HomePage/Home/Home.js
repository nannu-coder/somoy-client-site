import React from 'react';
import AnotherFeature from '../../AnotherFeature/AnotherFeature';
import BestSeller from '../../BestSeller/BestSeller';
import Feature from '../../Feature/Feature';
import Footer from '../../Footer/Footer';
import RatingHome from '../../RatingHome/RatingHome';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <Feature></Feature>
            <BestSeller></BestSeller>
            <RatingHome></RatingHome>
            <AnotherFeature></AnotherFeature>
            <Footer></Footer>
        </div>
    );
};

export default Home;