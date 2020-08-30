import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import first from '../../assets/firstheart.jpg';
import second from '../../assets/sunflower.jpg';
import third from '../../assets/yellow-background.jpg';
import fourth from '../../assets/water-lily2.jpg';
import fifth from '../../assets/lastspace.jpg';
import '../../App.css';

//hello
//hello2

function Slider() {
    return (
    <div>
  <Carousel>
  <Carousel.Item >
    <img
      class='resize'
      height = {575}
      className="d-block w-100"
      src={first}
      alt="Heart"
      
    />
    <Carousel.Caption>
      <h3 class='title'><b>Give Your Life, Don’t Take it</b><br/><h4>Opportunity for Reciprocity</h4></h3>
      
      <p class="caption">Let the “doing” change the beliefs and actions. A motto being,<br/> “If you’re too hopeless to fight for yourself, then do it for the next guy.”</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      class='resize'
      height = {575}
      className="d-block w-100"
      src={second}
      alt="Dandelion"
    />

    <Carousel.Caption>
      <h3 class='quote' >“If you want to lift yourself up, lift up<br/>someone else”.</h3>
      <p class='author'> - Booker T. Washington</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      class='resize'
      height = {575}
      className="d-block w-100"
      src={third}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 id='thirdText'><b>If you are asking the question:</b><br/>
      <h4>Would it be better<br/> if I wasn’t here?</h4></h3>
      <h3 id='thirdSubText'><b>The answer is:</b><br/>
      <h4>No one can take your place. <br/>People you haven’t met yet <br/>or who are not even born need you.</h4></h3>
    </Carousel.Caption>
  </Carousel.Item>


<Carousel.Item>
    <img
      class='resize'
      height = {575}
      className="d-block w-100"
      src={fourth}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 id='fourthText'><b>Growing Partnerships… Growing Awareness</b></h3>
      <p id='fourthSubText'>“I have worked as a team member with the Washington County Wellness Initiative (CHIO) for several years.  I recently presented with Pam Boyd at our annual Suicide Prevention & RX Drug Awareness summit in Bartlesville, Oklahoma and believe she is doing important and innovative work that cannot be ignored. Pam is passionate about preventing the unnecessary loss of life and is using her creativity to launch new a new approach to suicide prevention.”</p>
      <p id='fourthAuthor'>-M’liss Jenkins, MSW and Social Entrepreneur</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      class='resize'
      height = {575}
      className="d-block w-100 img-responsive"
      src={fifth}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 class='quote'><p></p>“Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.”</h3>
      <br/><p class='author'>― Dale Carnegie </p>
    </Carousel.Caption>
  </Carousel.Item>

  </Carousel>
    </div>
    );
  }
  
  export default Slider;
  