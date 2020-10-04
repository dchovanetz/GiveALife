import React from 'react';
import '../../App.css';
import Carousel from './Carousel';
import BodyCard from './BodyCard';
import ContactForm from './ContactForm'
import Mission from '../layout/Mission'


function Home() {
  return (
  <div>
    <Carousel/>
    <BodyCard/>
    <ContactForm />
    
  </div>
  );
}

export default Home;