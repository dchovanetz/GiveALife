import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardGroup} from 'react-bootstrap';
import '../App.css';

function BodyCard(){
    return(
        <div>
<CardGroup>
  <Card id='aboutCard'>
    <Card.Body>

      <Card.Text id='aboutText'>
      “Just this slight glimpse into a <b>possible alternative to the dilemma of wanting to live but not wanting to live my life</b> as it was gave me hope. I started imagining a real place where people, whose suicide ideation was prompted by loss of meaning, could temporarily donate their lives in a way that rapidly revealed the value of their existence.”
      <p id='pam'>Give Your Life Founder, Pam Boyd</p>
      </Card.Text>
    </Card.Body>
    
  </Card>
 <div id='filler'></div>
  <Card id='whyCard'>
    <Card.Body>

      <Card.Title class='whyTitle'><b>Why Consider This Idea?</b></Card.Title>
      <Card.Text class='whyText'>
      Focusing on the wellbeing of others is not a new idea. Concentrating on others instead of ourselves has saved many of us from bad decisions.
      </Card.Text>
      
      <Card.Title class='whyTitle'><b>Expanding the Conversation</b></Card.Title>
      <Card.Text class='whyText'>Research shows that people with suicide ideation usually have two symptoms in common:<br/>1) A sense of being a burden to others<br/>2) A profound sense of loneliness, alienation and isolation<br/><br/>
      <p>The two lowest recorded suicide days in the United States were the day of the 1980 triumph of the US Olympic hockey team over Russia, and 9-11; both days distracting from suicide ideation by increasing a sense of belonging to a larger purpose.</p>
      </Card.Text>
    
    </Card.Body>
    
  </Card>
</CardGroup>
        </div>
    )
}

export default BodyCard