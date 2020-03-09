import React from 'react';
import './App.css';
import Navb from './Components/Navbar.js';
import Slider from './Components/Carousel.js';
import BodyCard from './Components/BodyCard.js';
import Mission from './Components/Mission'


function App() {
  return (
  <div id='background'>
    
    <Navb/>
    <Slider/>
    <BodyCard/>
    <Mission/>
    
  </div>
  );
}

export default App;
