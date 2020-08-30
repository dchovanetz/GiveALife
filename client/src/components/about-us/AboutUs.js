import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import about from '../../assets/about-us.jpg';
import Founder from './Founder';
import Bio from './Bio'
import Mission from '../layout/Mission'

function AboutUs() {
    return(
        <div>

        <Card>
        <Card.Img height={575} src={about} alt="Silhouette" />
            <Card.ImgOverlay>
                <Card.Text>
                 <h3 id='aboutQuote'>"The best way to find yourself is to<br/> lose yourself in the service of others."</h3>
                 <p id='aboutAuthor'> - Mahatma Gandhi</p>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>

        <Founder/>

        <Bio/><br/><br/>

        <Mission/>
        </div>
       
    )
}

export default AboutUs;