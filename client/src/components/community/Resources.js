import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardDeck, Row, Col} from 'react-bootstrap';
import Mission from '../layout/Mission'
import about from '../../assets/about-us.jpg';
import texasMentalHealth from '../../assets/texasMentalHealth.jpg';
import suicidePrevention from '../../assets/suicidePrevention.jpg';
import oklahomaYouthSuicidePrevention from '../../assets/oklahomaYouthSuicidePrevention.jpg';
import preventTeenSuicide from '../../assets/preventTeenSuicide.jpg';
import suicidePreventionResourceCenter from '../../assets/suicidePreventionResourceCenter.jpg';
import suicidePreventionAction from '../../assets/suicidePreventionAction.jpg';


function Resources() {
    return(
  <div className="resourcesMain container">
          <h1 class='resourcesTitle'>Find Help Now</h1>
          <a className='phoneNumber btn btn-block' href="tel:1-800-273-8255">  Call 1-800-273-TALK (8255)</a>
         
          
{/* <Row className="d-flex justify-content-md-center">     */}
<CardDeck className="resourcesCardDeck d-flex flex-wrap justify-content-center align-items-stretch text-center">
{/* <Col xs={1} lg={12}></Col> */}
  <Card className="resourcesCard">
    <a href="https://texassuicideprevention.org/">
    <Card.Img variant="top" className="cardImg hovereffect"  src={suicidePrevention} />
    </a>
    <Card.Body>
      <Card.Title className='black-text'> <a href="https://texassuicideprevention.org/"> TX Mental Health and Substance Use Services </a></Card.Title>
    </Card.Body>

  </Card>

  <Card className="resourcesCard">
  <a href="https://hhs.texas.gov/services/mental-health-substance-use">
    <Card.Img variant="top" className="cardImg hovereffect" src={texasMentalHealth} />
    </a>
    <Card.Body>
      <Card.Title className='black-text'><a href="https://hhs.texas.gov/services/mental-health-substance-use" >TX Health Mental Health Support Line</a></Card.Title>
    </Card.Body>  
  </Card>
   
  <Card className="resourcesCard">
  <a href="https://www.ok.gov/odmhsas/Prevention_/Prevention_Initiatives/Youth_Suicide_Prevention_and_Early_Intervention_Initiative/index.html">
    <Card.Img variant="top" className="cardImg hovereffect" src={oklahomaYouthSuicidePrevention} />
    </a>
    <Card.Body>
      <Card.Title className='black-text'><a href="https://www.ok.gov/odmhsas/Prevention_/Prevention_Initiatives/Youth_Suicide_Prevention_and_Early_Intervention_Initiative/index.html">OK Youth Suicide Prevention Initiative </a></Card.Title>
      </Card.Body>
  </Card>
  </CardDeck>

  <CardDeck className="resourcesCardDeck align-items-center  text-center">
  {/* <Col xs={1} s={2} lg={12}></Col> */}
  <Card className="resourcesCard">
  <a href="https://www.sptsusa.org/">
    <Card.Img variant="top" className="cardImg hovereffect" src={preventTeenSuicide} />
    </a>
    <Card.Body>
      <Card.Title className='black-text'> <a href="https://www.sptsusa.org/">The Society to Prevent Teen Suicide</a> </Card.Title>
    </Card.Body>

  </Card>

  <Card className="resourcesCard">
  <a href="http://www.sprc.org/">
    <Card.Img variant="top" className="cardImg hovereffect" src={suicidePreventionResourceCenter} />
    </a>
    <Card.Body>
      <Card.Title className='black-text'> <a href="http://www.sprc.org/">Suicide Prevention Resource Center</a> </Card.Title>
      </Card.Body>
 
  </Card>

  <Card className="resourcesCard">
  <a href="http://www.spanusa.org/">
    <Card.Img variant="top" className="cardImg hovereffect" src={suicidePreventionAction}  />
    </a>
    <Card.Body>
      <Card.Title className='black-text'><a href="http://www.spanusa.org/"> Suicide Prevention Action Network USA</a> </Card.Title>
    </Card.Body>
 
  </Card>
</CardDeck>
{/* </Row> */}
        </div>
    )

}

export default Resources;