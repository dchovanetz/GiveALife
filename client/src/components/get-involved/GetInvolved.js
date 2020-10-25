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

      <p>
      Suicide claims approximately 48,000 lives each year in the United States. In the age group 10 to 34, it is the second leading cause of death and fourth leading cause of death from ages 35 to 54.<sup>1</sup> Research suggests that people with suicide ideation usually have two symptoms in common: a sense of being a burden to others and a profound sense of loneliness, alienation and isolation.<sup>2</sup> You or someone you know may have had a similar experience. 
      </p>
      <h3>Some believe that they only have two options: 1) living with the terrible pain or 2) taking thier life.  </h3>
      <div className="py-3 my-3" id="whatIf-div">
        <p>
        What if people struggling with depression knew that therapists, psychiatrists, social workers, clergy, and organizations would help them step out of their private mental prisons into a “new life” offering the possibility of new perspective, meaning and connections? What if the depressed knew of the immediate availability of a third option other than staying and suffering unbearable agony, or leave the pain by expediting my own death? 
        </p>
      </div>
      <h3>The 3rd option is give your life, don't take it.</h3>
      <p>
      <strong>GIVE YOUR LIFE, DON’T TAKE IT</strong> expands the suicide prevention conversation to provide avenues for reciprocity and active giving as pathways to immediate usefulness and perspective for men, women, teens, vets, and seniors who stand on the suicidal trailheads of loss, feeling overwhelmed, shame, and disconnect. Studies support this strategy of providing a way for suffers to be active-givers versus passive-receivers to reduce suicidal depression and ideation.<sup>2</sup>   
      </p>
      <p>
      Obviously, breaking through suicidal despair is a daunting task. Yet, for those who hide their pain and intent, the odds of breaking through the fatal mental agony is nearly impossible. The simple redirection toward doing and giving will not stop suicide for every sufferer but will do so for such a significant number that it cannot be ignored. We need your help to accomplish our mission. 
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
    <div className="bg-dark p-4 white-text">
      <h1>Ways to Get Involved</h1>
        <Container>
            <Row className="py-4">
              <Col>
                <img className="row-image"src={Event} />
              </Col>
              <Col clasName= "d-flex align-items-center">
                <h2 className="pt-3">Host an Event</h2>
                <p> Spread the word about suicide prevention and help grow community
              awareness.</p>
              </Col>
            </Row>
            <Row>
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
            <p className="d-flex justify-content-center"><a className="text-info" href="/#contact-form">Contact Us</a></p>
      </Container>
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
