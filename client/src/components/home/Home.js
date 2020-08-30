import React from 'react';
import '../../App.css';
import Carousel from './Carousel';
import BodyCard from './BodyCard';
import Mission from '../layout/Mission'


function Home() {
  return (
  <div id='background'>
    
   
    <Carousel/>
    <BodyCard/>
    <Mission/>
    
  </div>
  );
}

export default Home;