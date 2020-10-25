import React from "react";
import "../../App.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Partner from "../../assets/GIPartner.jpg";
import Event from "../../assets/GIEvent.jpg";
import GetInvolvedImage from "./GetInvolvedImage"

function GetInvolvedIntro() {
  return (
<div className="body-text">
  <p><strong>GIVE YOUR LIFE, DON’T TAKE IT</strong> expands the suicide prevention conversation to provide avenues for reciprocity and active giving as pathways to immediate usefulness and perspective for men, women, teens, vets, and seniors who stand on the suicidal trailheads of loss, feeling overwhelmed, shame, and disconnect. Studies support this strategy of providing a way for suffers to be active-givers versus passive-receivers to reduce suicidal depression and ideation.<sup>2</sup> </p>


  <p>Obviously, breaking through suicidal despair is a daunting task. Yet, for those who hide their pain and intent, the odds of breaking through the fatal mental agony is nearly impossible. The simple redirection toward doing and giving will not stop suicide for every sufferer but will do so for such a significant number that it cannot be ignored. We need your help to accomplish our mission. 
  </p>   
  
  
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



</div>
  );
}


function GetInvolvedWaysTo() {
  return (
    <div className="bg-dark white-text mx-4 mb-4 py-2">
      <h1>Ways to Get Involved</h1>
        <div id='div-container'>
            <Row className="mt-3 d-flex align-items-center">
              <Col>
                <img className="row-image"src={Event} />
              </Col>
              <Col clasName= "d-flex align-items-center">
                <p className="pt-3 d-text"><strong>Host an Event</strong></p>
                <p className="d-text"> Spread the word about suicide prevention and help grow community awareness.</p>
              </Col>
              <Col>
              <img className="row-image" src={Partner} />
              </Col>
              <Col >
                <p className="pt-3 d-text"><strong>Need Volunteers?</strong></p>
                <p className="d-text">Help individuals struggling with suicidal thoughts find a purpose
                and second chance at life.</p>
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
      <GetInvolvedWaysTo />
    </div>
  );
}

export default GetInvolved;
