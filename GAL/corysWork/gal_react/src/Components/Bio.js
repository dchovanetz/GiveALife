import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import '../App.css';
import pam from '../images/pam-boyd.jpg';

function Bio(){
    return(
        <Card id='pamCard'>
            <Card.Img id='pamPic' src={pam}/>
            <div id='pamInfo'>
                <p><b>Pam Boyd</b> has been involved in suicide prevention for several years and on numerous fronts.</p>
                <p><b>As a Life Coach</b>, she helps individuals get past their obstacles and on with their dreams by assisting with goal-setting, self-confidence, forgiveness, self-love, and clarity.</p>
                <p><b>As a speaker and a writer</b>, she hopes to increase awareness of the deadly nature of depression and introduce a new prevention idea that involves high-energy volunteer environments where new purpose and hope is introduced.</p>
                <p><b>As a Crisis Intervention Specialist volunteer</b> and trainer for Contact Crisis Line.</p>
            </div>
        </Card>
    )
}

export default Bio;