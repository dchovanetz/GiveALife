import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import about from '../../assets/about-Helping-Others-drawing.jpg'
import Founder from './Founder';
import Bio from './Bio'

function AboutUs() {
  return (
    <div>
      <Card>
        <Card.Img height={575} src={about} />
        <Card.ImgOverlay style={{ padding: '7rem' }}>
          <Card.Text className='mt-5 carousel-center carousel-text'>
          Our mission is to expand the suicide prevention conversation to provide opportunities for active giving as a pathway to suicide prevention for men, women, teens, vets, and seniors who are experiencing an intense sense of loss, overwhelm, shame, or disconnect.
            </Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Founder />

      <Bio />
    </div>

  )
}

export default AboutUs;