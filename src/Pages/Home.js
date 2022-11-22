import React from 'react';
import AutoVideo from '../components/AutoVideo/AutoVideo';
import Cards from '../components/cards/Cards';
import RotanaShowCase2 from '../components/rotanashocase2/RotanaShowCase2';
import RotanaShowCase from '../components/rotanashowcase/RotanaShowCase';
import SwiperHome from '../components/Swiper.js/Swiper';

const Home = () => {
  return (
    <>
      <AutoVideo/>
      <SwiperHome/>
      <Cards/>
      <RotanaShowCase/>
      <RotanaShowCase2/>
    
    </>
  );
}

export default Home;
