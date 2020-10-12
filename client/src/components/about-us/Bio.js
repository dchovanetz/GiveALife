import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import '../../App.css';
import pam from '../../assets/pam-boyd.jpg';

function Bio(){
    return(
        <div className="container" id='pamCard'>
            <div className="row d-flex align-items-center">
                <div className="col-4">
                <img id='pamPic' src={pam}/>
                </div>
                <div className="col">
                    <h3>About the Founder</h3>
                    <p className="pamInfo"><em>Pam Boyd</em> has been involved in suicide prevention for several years and on numerous fronts. Her current project is a dark comedy based on her experience with suicide. </p>
                    <p className="pamInfo"><em>As a Life Coach</em>, she helps individuals get past their obstacles and on with their dreams by assisting with goal-setting, self-confidence, forgiveness, self-love, and clarity.</p>
                    <p className="pamInfo"><em>As a speaker and a writer</em>, she hopes to increase awareness of the deadly nature of depression and introduce a new prevention idea that involves high-energy volunteer environments where new purpose and hope is introduced.</p>
                    <p className="pamInfo"><em>As a Crisis Intervention Specialist volunteer</em> and trainer for Contact Crisis Line.</p>
                </div>
            </div>
        </div>
    )
}

export default Bio;