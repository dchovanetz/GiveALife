import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Partner from "../../assets/GIPartner.jpg";
import Event from "../../assets/GIEvent.jpg";
import GetInvolvedImage from "./GetInvolvedImage"

function GetInvolvedIntro() {
  return (
<div className="body-text">
  <p><strong>GIVE YOUR LIFE, DON’T TAKE IT</strong> expands the suicide prevention conversation to provide avenues for reciprocity and active giving as pathways to immediate usefulness and perspective for men, women, teens, vets, and seniors who stand on the suicidal trailheads of loss, feeling overwhelmed, shame, and disconnect. Studies support this strategy of providing a way for suffers to be active-givers versus passive-receivers to reduce suicidal depression and ideation.<sup>2</sup> </p>

     
  
  <footer>
    <ul>
      <li>
        <a href="National Institute of Mental Health: Suicide Statistic"><sup>1</sup>National Institute of Mental Health: Suicide Statistic</a>
      </li>
      <li>
        <a href="https://www.icloud.com/iclouddrive/07e11STHpY1sThK7hNcVOESQg#White_Paper_Suicide_Prevention" target="_blank"><sup>2</sup>GIVE YOUR LIFE, DON'T TAKE IT: White Paper (click to download)</a>
        </li>
    </ul>
  </footer>


 


  <div className="container yellowBackground " >
  <h2>My name is Pam Boyd.</h2>
    <Row className='mx-1 d-flex align-items-center'>
      <Col lg={3}>
      <iframe className="mb-3"
        width="280" 
        height="455" 
        src="https://www.youtube.com/embed/Buo4cV_2vOY?rel=0&amp;modestbranding=1" 
        frameborder="0" 
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; 
        picture-in-picture" 
        allowfullscreen>
      </iframe>
      </Col>
      <Col className='text-left'>
        <p className='div-p'>Several years ago, I experienced an avalanche of loss which sent me down a dark road of suicide. When you have experienced a loss of someone you love, something you cherished, or believe that your life is more burdensome than it is worth, taking your life might seem like a better option than living with the terrible pain. You or someone you know may have had a similar experience. </p>
        <p className='div-p'>When I faced this lose-lose situation, only one thought saved my life. That one thought was this: if I am going to take my life, why don’t I give it to somebody that needs it. That sent me to volunteering. My motto being, “If you’re too hopeless to fight for yourself, then do it for the next guy.” </p>
      </Col>
    </Row>


  


  </div>

  <p>Obviously, breaking through suicidal despair is a daunting task. Yet, for those who hide their pain and intent, the odds of breaking through the fatal mental agony is nearly impossible. The simple redirection toward doing and giving will not stop suicide for every sufferer but will do so for such a significant number that it cannot be ignored. We need your help to accomplish our mission. 
  </p> 

</div>
  );
}


function GetInvolvedWaysTo() {
  return (
    <div className="bg-dark p-4 white-text">
      <h1>Ways to Get Involved</h1>
        <div>
            <Row className="py-4">
              <Col>
                <img className="row-image"src={Event} />
              </Col>
              <Col clasName= "d-flex align-items-center">
                <h2 className="pt-3">Host an Event</h2>
                <p> Spread the word about suicide prevention and help grow community
              awareness.</p>
              </Col>
              <Col>
              <img className="row-image" src={Partner} />
              </Col>
              <Col >
              <h2 className="pt-3">Take Volunteers</h2>
                <p>
                Help individuals struggling with suicidal thoughts find a purpose
              and second chance at life.
                </p>
              </Col>
            </Row>
            <Row>
             
            </Row>
            <p className="d-flex justify-content-center"><a className="text-info" href="/#contact-form">Contact Us</a></p>
      </div>
    </div>
  );
}

function GetInvolved() {
  return (
    <div>
      < GetInvolvedImage />
      <GetInvolvedIntro />
      {/* <GetInvolvedWhatIf /> */}
      <GetInvolvedWaysTo />
    </div>
  );
}

export default GetInvolved;
