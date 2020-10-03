import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardDeck, Row, Col} from 'react-bootstrap';
import '../../App.css';
import backgroundImage from '../../assets/backgroundImage.jpg'

function BodyCard(){
    return(
<div>
<div className="container my-2 body-text">
<h1>My name is Pam Boyd.</h1>
<p>Several years ago, I experienced an avalanche of loss which sent me down a dark road of suicide. When you have experienced a loss of someone you love, something you cherished, or believe that your life is more burdensome than it is worth, taking your life might seem like a better option than living with the terrible pain. You or someone you know may have had a similar experience. </p>
<p>When I faced this loss, loss situation, only one thought saved my life. That one thought was this: if I am going to take my life, why don’t I give it to somebody that needs it. That sent me to volunteering. My motto being, “If you’re too hopeless to fight for yourself, then do it for the next guy.” </p>
<p><a className="text-info" href="/community">Find resources now.</a></p>
<p>GIVE YOUR LIFE, DON'T TAKE IT is about giving access to anyone who is thinking about taking their life because of loss. Let the “doing” change the beliefs and actions. We need to grow awareness and build partnership. </p>
<p><a className="text-info" href="/get-involved">Find out how you can help.</a></p>
</div>


{/* <div className="container mx-auto py-2"  >
 <video className="mx-auto" width="320" height="540" controls>
 <source src="../../assets/VID_20200515_112539.mp4" type="video/mp4"/>
 </video>
</div>  
</div> */}
    )
}

export default BodyCard