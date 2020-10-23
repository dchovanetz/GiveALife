import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardDeck } from "react-bootstrap";
import Mission from "../layout/Mission";
import Donate from "../../assets/GIDonate.jpg";
import Partner from "../../assets/GIPartner.jpg";
import Event from "../../assets/GIEvent.jpg";
// import map from "../../assets/chart_155139.png"


function GetInvolvedIntro() {
  return (
<div className="body-text">
      {/* <figure> 
      <img id="mapImage" src={map} alt='map illustrates the suicide rates of the US in 2018'/>
      <figcaption>
      Figure shows a map of the United States with each state’s age-adjusted  suicide rate in 2018 indicated by color.<sup>1</sup>
      </figcaption>
      </figure> */}
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

function GetInvolvedWhatIf() {
  return (
    <section class="GetParagraph">
      <h2 class="GetInvolvedSectionTitle">But what if people who are depressed...</h2>

      <p>
      <strong>knew</strong> of the immediate availability of a third option?
      </p>

      <p>
      <strong>escaped</strong> their mental prisons by obtaining purpose through service?
      </p>

      <p>
      <strong>contributed</strong> their skills and talents to a well matched non profit?
      </p>

      <p>
      <strong>received</strong>  financial support from organizations to allow them to access these opportunities?
      </p>

    </section>
  );
}

function GetInvolvedWaysTo() {
  return (
    <div className="bg-dark p-4">
      <h2 class="white-text">Ways to Get Involved</h2>

      <CardDeck>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Event} />
          <Card.Body className="yellowBackground">
            <Card.Title>Host an Event</Card.Title>
            <Card.Text>
              Spread the word about suicide prevention and help grow community
              awareness.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Partner} />
          <Card.Body className="yellowBackground">
            <Card.Title>Partner with Us</Card.Title>
            <Card.Text>
              Help individuals struggling with suicidal thoughts find a purpose
              and second chance at life.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Donate} />
          <Card.Body className="yellowBackground">
            <Card.Title>Donate</Card.Title>
            <Card.Text>
              No contribution is too small. Donations support events and
              educational materials.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}

function GetInvolved() {
  return (
    <div id="GetInvolvedPage">
      <GetInvolvedIntro />
      {/* <GetInvolvedWhatIf /> */}
      <GetInvolvedWaysTo />
    </div>
  );
}

export default GetInvolved;
