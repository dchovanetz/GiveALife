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
        <div className="resourcesMain">
          <h1 class='resourcesTitle'><b>Find Help Now</b></h1><br/>
<Row className="justify-content-md-center">    
<CardDeck className="resourcesCardDeck align-items-center  text-center">
<Col xs={1} lg={12}></Col>
  <Card className="resourcesCard">
    <a href="https://texassuicideprevention.org/">
    <Card.Img variant="top" className="cardImg hovereffect"  src={suicidePrevention} />
    </a>
    <Card.Body>
      <Card.Title> <a href="https://texassuicideprevention.org/" className="img-responsive"> Texas Mental Health and Substance Use Services </a></Card.Title>
    </Card.Body>
    <Card.Link className="phoneNumber" a href="tel:1-800-273-8255"> 1-800-273-TALK (8255) </Card.Link>
  </Card>

  <Card className="resourcesCard hovereffect">
  <a href="https://hhs.texas.gov/services/mental-health-substance-use">
    <Card.Img variant="top" className="cardImg" src={texasMentalHealth} />
    </a>
    <Card.Body>
      <Card.Title><a href="https://hhs.texas.gov/services/mental-health-substance-use" class="img-responsive">Texas Health Mental Health Support Line</a></Card.Title>
    </Card.Body>  
    <Card.Link className="phoneNumber" a href="tel:1-512-424-6500"> 1-512-424-6500 </Card.Link>
  </Card>
   
  <Card className="resourcesCard hovereffect">
  <a href="https://www.ok.gov/odmhsas/Prevention_/Prevention_Initiatives/Youth_Suicide_Prevention_and_Early_Intervention_Initiative/index.html">
    <Card.Img variant="top" className="cardImg" src={oklahomaYouthSuicidePrevention} />
    </a>
    <Card.Body>
      <Card.Title><a href="https://www.ok.gov/odmhsas/Prevention_/Prevention_Initiatives/Youth_Suicide_Prevention_and_Early_Intervention_Initiative/index.html" class="img-responsive">Oklahoma Youth Suicide Prevention Initiative </a></Card.Title>
      </Card.Body>
    <Card.Link className="phoneNumber" a href="tel:1-800-273-8255"> 1-800-273-TALK (8255) </Card.Link>
  </Card>
  </CardDeck>

  <CardDeck className="resourcesCardDeck align-items-center  text-center">
  <Col xs={1} s={2} lg={12}></Col>
  <Card className="resourcesCard hovereffect">
  <a href="https://www.sptsusa.org/">
    <Card.Img variant="top" className="cardImg" src={preventTeenSuicide} />
    </a>
    <Card.Body>
      <Card.Title> <a href="https://www.sptsusa.org/" class="img-responsive">The Society to Prevent Teen Suicide</a> </Card.Title>
    </Card.Body>
    <Card.Link className="phoneNumber" a href="tel:1-732-410-7900"> 1-732-410-7900 </Card.Link>
  </Card>

  <Card className="resourcesCard hovereffect">
  <a href="http://www.sprc.org/">
    <Card.Img variant="top" className="cardImg" src={suicidePreventionResourceCenter} />
    </a>
    <Card.Body>
      <Card.Title> <a href="http://www.sprc.org/" class="img-responsive">Suicide Prevention Resource Center</a> </Card.Title>
      </Card.Body>
    <Card.Link className="phoneNumber" a href="tel:1-800-273-8255"> 1-800-273-TALK (8255) </Card.Link>
  </Card>

  <Card className="resourcesCard hovereffect">
  <a href="http://www.spanusa.org/">
    <Card.Img variant="top" className="cardImg" src={suicidePreventionAction}  />
    </a>
    <Card.Body>
      <Card.Title><a href="http://www.spanusa.org/" class="img-responsive"> Suicide Prevention Action Network USA</a> </Card.Title>
    </Card.Body>
    <Card.Link className="phoneNumber" a href="tel:1-800-273-8255"> 1-800-273-TALK (8255) </Card.Link>
  </Card>
</CardDeck>
</Row>
        </div>
    )

}

export default Resources;