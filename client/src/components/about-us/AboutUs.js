import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
//import about from '../../assets/about-us.jpg';
//import about from '../../assets/about-sun-5189430_1920.jpg' 
//import about from '../../assets/about-clouds-4750959_1920.jpg'
import about from '../../assets/about-Helping-Others-drawing.jpg'

import Founder from './Founder';
import Bio from './Bio'
// import Mission from '../layout/Mission'

function AboutUs() {
    return(
        <div>
        <Card>
        <Card.Img height={575} src={about} alt="Silhouette" />
            {/* <Card.ImgOverlay> */}
            <Card.ImgOverlay style={{padding:'0 12em'}}>
    {/* <Card.Title id='missTitle'><b>OUR MISSION</b></Card.Title> */}
    <Card.Text id='missText'><br/><br/>
    The goal of GIVE YOUR LIFE, DON'T TAKE IT is to expand the suicide prevention conversation to provide opportunities for <b>active giving</b> as a pathway to suicide prevention for men, women, teens, vets, and seniors who are experiencing an intense sense of loss, being overwhelmed, shame, and disconnection
    </Card.Text>
  </Card.ImgOverlay>
</Card>

                {/* <Card.Text class="centered">
                <p id='missText'>
                <br></br><br></br>
                The goal of GIVE YOUR LIFE, DON'T TAKE IT is to expand the suicide prevention conversation to provide opportunities for <b>active giving</b> as a pathway to suicide prevention for men, women, teens, vets, and seniors who are experiencing an intense sense of loss, being overwhelmed, shame, and disconnection</p> */}
                 {/* <p id='aboutQuote'>"The best way to find yourself is to lose yourself in the service of others."</p>
                 <p id='aboutAuthor'> - Mahatma Gandhi</p> */}
                {/* </Card.Text>
            </Card.ImgOverlay>
        </Card> */}

        <Founder/>

        <Bio/><br/><br/>

        {/* <Mission/>  CC removed */}
        </div>
       
    )
}

export default AboutUs;