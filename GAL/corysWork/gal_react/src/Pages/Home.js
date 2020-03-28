import React from 'react';
import '../App.css';
import Slider from '../Components/Carousel.js';
import BodyCard from '../Components/BodyCard.js';
import Mission from '../Components/Mission'


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