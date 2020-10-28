import React from "react";
import "../../App.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Volunteer from "../../assets/GIPartner.jpg";
import Partner from "../../assets/huddle.jpg"
import Event from "../../assets/GIEvent.jpg";
import GetInvolvedImage from "./GetInvolvedImage"

function GetInvolvedIntro() {
  return (
<div className="body-text mx-5">
  <p><strong>GIVE YOUR LIFE, DON’T TAKE IT</strong> expands the suicide prevention conversation to provide avenues for reciprocity and active giving as pathways to immediate usefulness and perspective for men, women, teens, vets, and seniors who stand on the suicidal trailheads of loss, feeling overwhelmed, shame, and disconnect. Studies support this strategy of providing a way for suffers to be active-givers versus passive-receivers to reduce suicidal depression and ideation.<sup>1</sup> </p>


  <p>Obviously, breaking through suicidal despair is a daunting task. Yet, for those who hide their pain and intent, the odds of breaking through the fatal mental agony is nearly impossible. The simple redirection toward doing and giving will not stop suicide for every sufferer but will do so for such a significant number that it cannot be ignored. We need your help to accomplish our mission. 
  </p>   
  
  
  <footer>
    <ul>
      <li>
        <a href="https://www.icloud.com/iclouddrive/07e11STHpY1sThK7hNcVOESQg#White_Paper_Suicide_Prevention" target="_blank"><sup>1</sup>GIVE YOUR LIFE, DON'T TAKE IT: White Paper (click to download)</a>
        </li>
    </ul>
  </footer>



</div>
  );
}


function GetInvolvedWaysTo() {
  return (
    <div className="bg-dark white-text mx-4 mb-4 py-3 rounded">
      <h2>Ways to Get Involved</h2>
        <div id='div-container'>
            <Row className="mt-3 d-flex align-items-stretch">
              <Col lg={4} sm= {12}>
              {/* <div class="card" style="width: 18rem;"> */}
              <div class="card-body">
              <img className="row-image"src={Event} />
                <h3 class="card-title">Host An Event</h3>
                <p class="card-text">Spread the word about suicide prevention and help grow community awareness.</p>
                </div>
              </Col>
              <Col lg={4} sm={12}>
              {/* <div class="card" style="width: 18rem;"> */}
              <div class="card-body">
              <img className="row-image"src={Volunteer} />
                <h3 class="card-title">Need Volunteers?</h3>
                <p class="card-text">Provide opportunities for active giving.</p>
                </div>
              </Col>
              <Col lg={4} sm={12}>
              {/* <div class="card" style="width: 18rem;"> */}
              <div class="card-body">
              <img className="row-image"src={Partner} />
                <h3 class="card-title">Partner With Us</h3>
                <p class="card-text">Help those struggling with suicidal thoughts find a purpose and second chance at life. </p>
                </div>
              </Col>    
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
