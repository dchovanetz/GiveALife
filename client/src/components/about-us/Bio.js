import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import '../../App.css';
import pam from '../../assets/pam-boyd.jpg';

function Bio(){
    return(
        <Card id='pamCard'>
            <Card.Img id='pamPic' src={pam}/>
            <div id='pamInfo'>
                <p><em>Pam Boyd</em> has been involved in suicide prevention for several years and on numerous fronts.</p>
                <p><em>As a Life Coach</em>, she helps individuals get past their obstacles and on with their dreams by assisting with goal-setting, self-confidence, forgiveness, self-love, and clarity.</p>
                <p><em>As a speaker and a writer</em>, she hopes to increase awareness of the deadly nature of depression and introduce a new prevention idea that involves high-energy volunteer environments where new purpose and hope is introduced.</p>
                <p><em>As a Crisis Intervention Specialist volunteer</em> and trainer for Contact Crisis Line.</p>
            </div>
        </Card>
    )
}

export default Bio;