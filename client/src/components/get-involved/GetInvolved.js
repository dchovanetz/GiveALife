import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import Mission from '../layout/Mission'
import Donate from '../../assets/GIDonate.jpg'
import Partner from '../../assets/GIPartner.jpg'
import Event from '../../assets/GIEvent.jpg'

function GetInvolved() {
    return(
        <div>
            {/* <div class="BlockFiller"></div> CC removed*/}

            <Mission/><br/>

            <div id="GetBody"><p class="GetText">The <b>GIVE YOUR LIFE. DON’T TAKE IT</b> approach targets those who have lost hope due to external circumstances. Obviously, breaking through suicidal despair is a daunting task. Yet, for those who hide their pain and intent, the odds of breaking through the fatal mental agony is nearly impossible.</p><br/>
            <p><h1 id="GetHeader"><b>But what if...</b></h1></p>
            <p class="GetText">The depressed knew of the immediate availability of a third option, reclaiming self-respect by giving, other than:<br/><br/>1) stay and suffer unbearable agony, or<br/>2) leave the pain by expediting my own death?<br/><br/>People struggling with depression knew that therapists, psychiatrists, social workers, clergy, and organizations would help them step out of their private mental prisons into a “new life” offering the possibility of new perspective, meaning and connections?<br/><br/>When financial stress was the major trailhead to suicidal depression, organizations would pay financial obligations while a person volunteered in a customized environment where they would have the structure and freedom to focus on a different world?<br/><br/>Therapists, social workers, psychiatrists, clergy, and organizations worked with high-energy volunteer environments where the needs on both sides of the equation could be met by utilizing the untapped resources of the depressed? And, what if providers worked with the patient to help choose a volunteer environment customized to their interests?</p></div>

            <div id="WaysGet">Ways to Get Involved</div>
            <br/><br/><br/><br/>

            <div>
                <img id="EventImg" src={Event} />
                <img id="PartnerImg" src={Partner} />
                <img id="DonateImg" src={Donate} />
            </div>
            <br/>
            
            <div id="EventText"><p><b>Host an Event</b><br/>Spread the word about suicide prevention and help grow community awareness.</p></div>

            <div id="PartnerText"><p><b>Partner with Us</b><br/>Help individuals struggling with suicidal thoughts find a purpose and second chance at life.</p></div>

            <div id="DonateText"><p><b>Donate</b><br/>No contribution is too small. Donations support events and educational materials.</p></div>

           

        </div>
    )

}

export default GetInvolved;