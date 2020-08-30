import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import '../../App.css';
import miss from '../../assets/missionstatement.jpg';

function Mission(){
    return(
        <div>
  <Card className="bg-dark text-white">
  <Card.Img height={600} src={miss} alt="Piggyback Ride" />
  <Card.ImgOverlay>
    <Card.Title id='missTitle'><b>OUR MISSION</b></Card.Title>
    <Card.Text id='missText'><br/>
    The goal of GIVE YOUR LIFE, DON'T TAKE IT is to expand the suicide prevention conversation to provide opportunities for <b>active giving</b> as a pathway to suicide prevention for men, women, teens, vets, and seniors who are experiencing an intense sense of loss, being overwhelmed, shame, and disconnection
    </Card.Text>
  </Card.ImgOverlay>
</Card>
        </div>
    )
}

export default Mission