import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import first from '../../assets/firstheart.jpg';
import second from '../../assets/secondImageFinal.jpg';
import third from '../../assets/thirdImage3.jpg';
import fourth from '../../assets/lastImage.jpg';
import '../../App.css';

//add a pause feature
function Slider() {

    return (
    <div>
  <Carousel style={{height: 550}}>
  <Carousel.Item autoplay={ false } >
    <img
      className='.img-fluid. max-width: 100% d-block w-100'
      height = {550}
      src={first}
    />
    <div className="carousel-centered">
    <p className="carousel-title">GIVE YOUR LIFE, DON'T TAKE IT</p>
x    </div>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className='resize d-block w-100'
      height = {550}
      src={second}
    />
      <div className="carousel-centered">
    <p className="carousel-text">"The best way to find yourself is to
      lose yourself in the service of others."</p>
    <p className="carousel-text d-flex justify-content-end">- Mahatma Gandhi </p> 
    </div>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className='resize d-block w-100'
      height = {550}
      src={third}
    />
<div className="carousel-centered">
    <p className="carousel-text"><b>If you are asking the question: </b> Would it be better if I wasn’t here?</p>
      <p className="carousel-text"><b>The answer is: </b> No one can take your place. People you haven’t met yet or who are not even born need you. </p>
    </div>
  </Carousel.Item>

  <Carousel.Item>
    <img
      class='resize'
      height = {550}
      className="d-block w-100 img-responsive"
      src={fourth}
    />
    <div className="carousel-centered">
    <p className="carousel-text">“Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.”</p>
      <p className="carousel-text d-flex justify-content-end">― Dale Carnegie </p>
    </div>
  </Carousel.Item>

  </Carousel>
    </div>
    );
  }
  
  export default Slider;
  