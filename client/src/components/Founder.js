import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import '../App.css';

function Founder(){
    return(
        <Card id='foundCard' body>
             <div id='fBody'>
                <h1 class='fHeader'><b>About the Founder</b></h1><br/>
                <p class='fText'>
                A few years ago, an airport architecht told Pam Boyd that his favorite childhood pasttime was building roads and bridges. Then he asked what made her happy as a child. He was hoping her answer would support his thesis that we all end up doing what we loved as children. But Pam couldn't pull up images of being happy: the only image that floated into her mind was of a seriously whacked-out kid sitting in the backyard praying for Martians to come and abduct her. While her siblings were out playing with the neighbors, she was spending her time why she felt so alienated and different from everyone else, and what she could possibly do to change it
                </p>
                <p class='fText'>
                As an adult, serious suicidal depression set in after a business failure, a divorce, and a subsequent romantic heartbreak. Pam is still here to talk about her experience because a friends's father had introduced a profound alternative to suicide. This man was a high-functioning alcoholic, a depressed war veteran, and also a strong Catholic. After retirement, he wanted to kill himself but didn't want to lose his soul. So instead, he went to a children's hospital and said, "I want to donate my life." And he did. After fifteen years of being a full-time volunteer there, he died a much happier man. His idea became crucial for Pam when she lost her reasons to live. Ringing in her head where these words:
                </p><br/>
                <h1 class='fHeader'><b>If you don't want your life, why not give it to someone who needs it?</b></h1><br/>
                <p class='fText'>
                    "Why couldn't I, instead of destroying my life, donate it-just as my friend's dad had done?", she thought. Just this slight glimpse into a possible alternative to the dilemma of wanting to live but not wanting to live her life as it was gave Pam hope. She started imagining a real place where people, whose suicide ideation was prompted by loss of meaning, could temporarily donate their lives in a way that rapidly revealed the value of their existence. This experience inspired the Give Your Life, Dont Take It organization.
                </p>
            </div>
        </Card>
    )
}

export default Founder;