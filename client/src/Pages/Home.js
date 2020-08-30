import React from 'react';
import '../App.css';
import Slider from '../components/Carousel.js';
import BodyCard from '../components/BodyCard.js';
import Mission from '../components/Mission'


function Home() {
  return (
  <div id='background'>
    
   
    <Slider/>
    <BodyCard/>
    <Mission/>
    
  </div>
  );
}

export default Home;