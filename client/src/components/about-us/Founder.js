import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import '../../App.css';

function Founder(){
    return(
    <div className="mx-5">
    <div className="body-text">
        <p><strong>GIVE YOUR LIFE, DON'T TAKE IT</strong> is a nonprofit that gives people experiencing pain and loss an alternative when life feels unlivable. Our approach specifically targets those who have lost hope due to external circumstances, versus those who may be intrinsically driven toward suicide by chemical imbalance, dependency, or chronic psychological issues. Expanding the suicide prevention conversation is essential to providing avenues for reciprocity and active giving as pathways to immediate usefulness and perspective.</p>
    </div>
    <div className="container yellowBackground py-4 rounded" >
        <h2 className="body-text">Why We Do It</h2>
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
    <div className="body-text">
        <p><strong>It is time for a change.</strong>
        </p>
        <p>In 2013, Pam was inspired by a speaker, General Mark Graham, at a suicide prevention conference. General Graham had lost two sons, one to suicide and another in combat. After sharing his story, he made this appeal to the audience, 
        <p><em>“If anyone out there has a new idea or another option for those who are taking their own lives, please, please share it. Because what we are currently doing is not enough to stop this escalating crisis.”</em></p>   
        </p>
        <p><b>GIVE YOUR LIFE, DON'T TAKE IT</b> is a response to that plea. Thousands every year end their lives over the loss of love, family, career, dreams, health, wealth, and self-respect, choosing death over the painful option of living with perceived irreversible loss. Our goals are to expanding the suicide prevention conversation to include this approach as a viable solution and connect people who need places to volunteer with organizations that need volunteers. We are in the early stages of getting the word out and building partnerships.</p>
        <p><a className="text-info" href="/get-involved">Find out how you can help.</a> </p>
    </div>
</div>
    )
}

export default Founder;