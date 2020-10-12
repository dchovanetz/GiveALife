import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import '../../App.css';
import missionImage from '../../assets/missionstatement.jpg';

function Mission(){
    return(
        <div>
  <Card className="text-white" style={{border:'none'}}>
  <Card.Img height={600} src={missionImage} alt="Piggyback Ride" />
  <Card.ImgOverlay style={{padding:'0 12em'}}>
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