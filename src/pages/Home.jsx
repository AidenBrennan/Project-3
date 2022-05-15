import React from 'react';
import Navbar from '../component/navbar';
import Announcements from '../component/announcements';
import Slider from '../component/slider';
import Categories from '../component/categories'

const Home = () => {
  return (
    <div className='container'>
      <Announcements/>
      <Navbar/>
      <Slider/>
      <Categories/>
      </div>
  );
};

export default Home