import React from 'react';
import Navbar from '../component/navbar';
import Announcements from '../component/announcements';
import Slider from '../component/slider';
import Categories from '../component/categories'
import Products from '../component/productCat'
import Newsletter from '../component/newsLetter'
import Footer from '../component/footer'

const Home = () => {
  return (
    <div className='container'>
      <Announcements/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
      </div>
  );
};

export default Home