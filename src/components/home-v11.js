import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner-v2';
import Aboutv2 from './section-components/about-v2';
import Category from './section-components/category-v3';
import ProductSlider from './section-components/product-slider-v4';
import Neighbour from './section-components/neighbour';
import Cateogory from './section-components/category-v2';
import Testimonial from './section-components/testimonial-v2';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Home = () => {
    return <div>
        <Navbar/>
        <Banner />
        <Aboutv2 />
        <Category />
        <ProductSlider />
        <Neighbour />
        <Cateogory />
        <Testimonial />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Home

