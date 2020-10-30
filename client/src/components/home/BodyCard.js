import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardDeck, Row, Col} from 'react-bootstrap';
import '../../App.css';
import { Link, Route } from "react-router-dom";
import GetInvolved from "../get-involved/GetInvolved";
import FindHelp from "../community/Resources";

function BodyCard(){
    return(
<div className="body-text mx-5">
    <h1>GIVE YOUR LIFE. DON'T TAKE IT.</h1>
    <p>Research suggests that people with suicide ideation usually have two symptoms in common: a sense of being a burden to others and a profound sense of loneliness, alienation and isolation.<sup>1</sup></p>
    <p>You or someone you know may be experiencing this right now.</p> 
  
    <p><Link className="text-info" to="/find-help">Find resources now.</Link></p>  

    <p>According to the Center for Disease Control, in the US alone, suicide claims over 48,000 lives each year. That is one death by suicide every 12 minutes: approximately 123 Americans per day. In the age group 10 to 34, it is the second leading cause of death and fourth leading cause of death from ages 35 to 54.</p>

    <p><strong>And...</strong></p>

    <p>Worldwide, statistics from the World Health Organization show 1,000,000 deaths from suicide each year: one death every 40 seconds and predicted that the 2020 statistic will indicate one suicide every 20 seconds.<sup>3</sup></p>

    <div className="py-3 my-3 rounded" id="whatIf-div">
        <p><strong>Some believe that they only have two options: 1) live with the terrible pain or 2) end my life. There is a 3rd option: if you don’t want your life, give it to someone who needs it.</strong></p>
    </div>

    <p>It is often said that suicide is a permanent solution to a temporary problem.</p>

    <p>What if people experiencing <em>depression</em> due to loss could temporarily step out of their private mental prisons into a temporary new life with a change in perspective, meaning, and connections? What if accessibility to this third option was more widely known and made possible by organizations who were willing to provide appropriate volunteer environments and financial support for this experience?</p>

    <p>GIVE YOUR LIFE. DON'T TAKE IT. is about this possibility.</p>

    <p><Link className="text-info"to="/get-involved">Find out how you can help.</Link></p>

    <p>For anyone who is thinking about taking their life because of loss, giving their life in service to others is an opportunity to allow the “doing” to expand their world and transform their dark beliefs and actions. </p>
        <Route path ='/find-help' component={FindHelp} />
        <Route path ='/get-involved' component={GetInvolved} />
<footer>
    <ul>
        <li>
        <a href="https://www.icloud.com/iclouddrive/07e11STHpY1sThK7hNcVOESQg#White_Paper_Suicide_Prevention" target="_blank"><sup>1</sup>GIVE YOUR LIFE. DON'T TAKE IT. White Paper (click to download)</a>
        </li>
        <li>
          <a href="https://www.nimh.nih.gov/health/statistics/suicide.shtml#part_154968" target="_blank"><sup>2</sup>National Institute of Mental Health: Suicide</a>
        </li>
        <li>
          <a href="https://www.who.int/news-room/fact-sheets/detail/suicide" target="_blank"><sup>3</sup>World Health Organization: Suicide Fact Sheet</a>
        </li>
    </ul>
</footer>
 
</div> 
    )
}

export default BodyCard