import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardDeck, Row, Col} from 'react-bootstrap';
import '../../App.css';

function BodyCard(){
    return(
<div id='midSec'>

<Row className="justify-content-md-center">    
 <CardDeck>
   <Col xs={6} lg={8}>
    <Card id='whyCard'>
      <Card.Body>
        <Card.Title class='whyTitle'><b>Why Consider This Idea?</b></Card.Title><br/>
          <Card.Text class='whyText'>
           <p>Focusing on the wellbeing of others is not a new idea. Concentrating on others instead of ourselves has saved many of us from bad decisions.</p>
        </Card.Text>
        <br/>
        <hr/>
        <br/>
        <Card.Title class='whyTitle'><b>Expanding the Conversation</b></Card.Title><br/>
        <Card.Text class='whyText'><p>Research shows that people with suicide ideation usually have two symptoms in common:<br/><br/><p id='symptom'>1) A sense of being a burden to others<br/>2) A profound sense of loneliness, alienation and isolation</p><br/></p>
        <p>The two lowest recorded suicide days in the United States were the day of the 1980 triumph of the US Olympic hockey team over Russia, and 9-11; both days distracting from suicide ideation by increasing a sense of belonging to a larger purpose.</p>
        </Card.Text>
    </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card id='aboutCard'>
      <Card.Body>
        <Card.Text id='aboutText'>
        <p>“Just this slight glimpse into a <b id='emph'>possible alternative to the dilemma of wanting to live but not wanting to live my life</b> as it was gave me hope. I started imagining a real place where people, whose suicide ideation was prompted by loss of meaning, could temporarily donate their lives in a way that rapidly revealed the value of their existence.”</p>
        <p id='pam'>Give Your Life Founder,<br/> Pam Boyd</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </CardDeck>
    </Row>
  
</div>
    )
}

export default BodyCard