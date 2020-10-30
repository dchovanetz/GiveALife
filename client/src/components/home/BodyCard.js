import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardDeck, Row, Col} from 'react-bootstrap';
import '../../App.css';

function BodyCard(){
    return(
<div className="body-text mx-5">
<p>
        Suicide claims approximately 48,000 lives each year in the United States. In the age group 10 to 34, it is the second leading cause of death and fourth leading cause of death from ages 35 to 54.<sup>1</sup> Research suggests that people with suicide ideation usually have two symptoms in common: a sense of being a burden to others and a profound sense of loneliness, alienation and isolation.<sup>2</sup> You or someone you know may have had a similar experience. 
    </p>

    <p><Link className="text-info" to="/find-help">Find resources now.</Link></p>  



    <div className="py-3 my-3 rounded" id="whatIf-div">
        <p><strong>Some believe that they only have two options: 1) living with the terrible pain or 2) taking thier life. The 3rd option is give your life, don't take it.</strong></p>
        
    </div>

    <p>What if people struggling with depression knew that therapists, psychiatrists, social workers, clergy, and organizations would help them step out of their private mental prisons into a “new life” offering the possibility of new perspective, meaning and connections? What if the depressed knew of the immediate availability of a third option other than staying and suffering unbearable agony, or leave the pain by expediting my own death?</p>

    <p>GIVE YOUR LIFE, DON'T TAKE IT is about giving access to anyone who is thinking about taking their life because of loss. Let the “doing” change the beliefs and actions. We need to grow awareness and build partnership. </p>
    <p><Link className="text-info"to="/get-involved">Find out how you can help.</Link></p>
        <Route path ='/find-help' component={FindHelp} />
        <Route path ='/get-involved' component={GetInvolved} />
<footer>
    <ul>
        <li>
          <a href="https://www.nimh.nih.gov/health/statistics/suicide.shtml#part_154968"><sup>1</sup>National Institute of Mental Health: Suicide Statistic</a>
        </li>
        <li>
          <a href="https://www.icloud.com/iclouddrive/07e11STHpY1sThK7hNcVOESQg#White_Paper_Suicide_Prevention" target="_blank"><sup>2</sup>GIVE YOUR LIFE, DON'T TAKE IT: White Paper (click to download)</a>
        </li>
    </ul>
</footer>
 
</div> 
    )
}

export default BodyCard