import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardDeck } from "react-bootstrap";
import Mission from "../layout/Mission";
import Donate from "../../assets/GIDonate.jpg";
import Partner from "../../assets/GIPartner.jpg";
import Event from "../../assets/GIEvent.jpg";

function GetInvolvedIntro() {
  return (
    <div>
      <h1>Ways To Get Involved</h1>
      <p  class="GetParagraph">
        The <strong>GIVE YOUR LIFE. DON’T TAKE IT</strong> approach targets
        those who have lost hope due to external circumstances. Obviously,
        breaking through suicidal despair is a daunting task. Yet, for those who
        hide their pain and intent, the odds of breaking through the fatal
        mental agony is nearly impossible.
      </p>
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
    <section>
      <h2 class="GetInvolvedSectionTitle">How can you help?</h2>

      <CardDeck>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Event} />
          <Card.Body>
            <Card.Title>Host an Event</Card.Title>
            <Card.Text>
              Spread the word about suicide prevention and help grow community
              awareness.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Partner} />
          <Card.Body>
            <Card.Title>Partner with Us</Card.Title>
            <Card.Text>
              Help individuals struggling with suicidal thoughts find a purpose
              and second chance at life.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Donate} />
          <Card.Body>
            <Card.Title>Donate</Card.Title>
            <Card.Text>
              No contribution is too small. Donations support events and
              educational materials.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </section>
  );
}

function GetInvolved() {
  return (
    <div id="GetInvolvedPage">
      <GetInvolvedIntro />
      <GetInvolvedWhatIf />
      <GetInvolvedWaysTo />
    </div>
  );
}

export default GetInvolved;
