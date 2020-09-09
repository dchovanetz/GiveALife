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
<Row className="justify-content-md-center">    
<CardDeck className="resourcesCardDeck align-items-center">
<Col xs={1} lg={12}></Col>
  <Card>
    <Card.Img variant="top" className="cardImg" src={suicidePrevention}/>
    <Card.Body>
      <Card.Title> <a href="https://texassuicideprevention.org/"> Texas Mental Health and Substance Use Services </a></Card.Title>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" className="cardImg" src={texasMentalHealth} />
    <Card.Body>
      <Card.Title><a href="https://hhs.texas.gov/services/mental-health-substance-use"> Texas Mental Health and Substance Use Services </a></Card.Title>

    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" className="cardImg" src={oklahomaYouthSuicidePrevention} />
    <Card.Body>
      <Card.Title><a href="#">Oklahoma Youth Suicide Prevention Initiative: </a></Card.Title>

    </Card.Body>
  </Card>
  </CardDeck>
  <CardDeck className="resourcesCardDeck">
  <Col xs={1} lg={12}></Col>
  <Card>
    <Card.Img variant="top" className="cardImg" src={preventTeenSuicide} />
    <Card.Body>
      <Card.Title> <a href="https://www.sptsusa.org/">The Society to Prevent Teen Suicide:</a> </Card.Title>
      
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" className="cardImg" src={suicidePreventionResourceCenter} />
    <Card.Body>
      <Card.Title> <a href="http://www.sprc.org/ ">Suicide Prevention Resource Center : </a> </Card.Title>

    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" className="cardImg" src={suicidePreventionAction}  />
    <Card.Body>
      <Card.Title><a href="http://www.spanusa.org/"> Suicide Prevention Action Network USA:  </a> </Card.Title>

    </Card.Body>
  </Card>
</CardDeck>
</Row>
        </div>
    )

}

export default Resources;