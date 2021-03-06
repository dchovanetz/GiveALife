import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import pam from '../../assets/pam-boyd.jpg';

function Bio(){
    return(
        <div className="container mb-3" id='pamCard'>
            <div className="row pt-1 d-flex align-items-center">
                <div className="col-lg-4">
                <img id='pamPic' src={pam}/>
                </div>
                <div className="col-lg-8">
                    <h3>About the Founder</h3>
                    <p className="pamInfo">Pam Boyd has been involved in suicide prevention for several years and on numerous fronts. Her current project is a dark comedy based on her experience with suicide.</p>
                    <p className="pamInfo"><em>As a trainer and coach</em>, she helps individuals get past their obstacles and on with their dreams by assisting with goal setting, self-confidence, forgiveness, self-love, and clarity.</p>
                    <p className="pamInfo"><em>As a speaker and a writer</em>, she hopes to increase awareness of the deadly nature of depression and introduce a new prevention idea that involves high-energy volunteer environments where new purpose and hope is introduced.</p>
                    <p className="pamInfo"><a href='http://wp.me/p10vYS-2nC' target="_blank">Confessions of a Suicide Groupie</a> is an essay she wrote about her own experience with suicide.</p>
                    <p className="pamInfo"><em>As a Crisis Intervention Specialist</em> volunteer and trainer for Contact Crisis Line.</p>
                    <div id="pamSocial">
                    <div >
                        <a className="fab fa-2x fa-twitter px-3" href="http://twitter.com/PamGBoyd" target="_blank"></a>
                    </div>
                    <div>
                        <a className="fab fa-2x fa-blogger" href="https://pamboyd.wordpress.com/" target="_blank"></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio;