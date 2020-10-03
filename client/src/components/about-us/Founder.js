import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import '../../App.css';

function Founder(){
    return(
             <div className="body-text mx-5">
                <h1> Who We Are</h1>
                <p>
                <b>GIVE YOUR LIFE, DON'T TAKE IT</b> is a nonprofit that gives people experiencing pain and loss an alternative when life feels unlivable. Our approach specifically targets those who have lost hope due to external circumstances, versus those who may be intrinsically driven toward suicide by chemical imbalance, dependency, or chronic psychological issues. Expanding the suicide prevention conversation is essential to providing avenues for reciprocity and active giving as pathways to immediate usefulness and perspective. 
                </p>
                <h1> Why We Do It</h1>
                <p>
                <b>It is time for a change. </b>
                </p>
                <p>
                In 2013, Pam was inspired by a speaker, General Mark Graham, at a suicide prevention conference. General Graham had lost two sons, one to suicide and another in combat. After sharing his story, he made this appeal to the audience, 
                <p><em>“If anyone out there has a new idea or another option for those who are taking their own lives, please, please share it. Because what we are currently doing is not enough to stop this escalating crisis.”</em></p>   
                </p>
                <p>
                <b>GIVE YOUR LIFE, DON'T TAKE IT</b> is a response to that plea. Thousands every year end their lives over the loss of love, family, career, dreams, health, wealth, and self-respect, choosing death over the painful option of living with perceived irreversible loss. Our goals are to expanding the suicide prevention conversation to include this approach as a viable solution and connect people who need places to volunteer with organizations that need volunteers. We are in the early stages of getting the word out and building partnerships. 
                </p>
                <p><a className="text-info" href="/get-involved">Find out how you can help.</a> </p>
            </div>
    )
}

export default Founder;