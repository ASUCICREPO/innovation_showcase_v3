import Feedback1 from '../ui-components/Feedback1';
import OurTeam from '../ui-components/OurTeam';
import Message from '../ui-components/Message';
import './About.css';
import React, { useState, useEffect } from 'react';
import useTranslate from './useTranslate';

const About = () => {
    const { translatedText, error, translate } = useTranslate();
    useEffect(() => {
        translate("I like to eat spaghetti");
    }, []);  // This will translate the text once when the component mounts

    return (
    <div>
       {error && <p>Error: {error.message}</p>}
            <p>Translated Text: {translatedText}</p>
        <div className= "mission-container">
            <Message style={{margin: "5%"}}/>
            <Feedback1 style={{margin: "5%"}}/>
        </div>
        <div className='our-team'>
            <OurTeam/>
        </div>
    </div>
    );
  };
  
  export default About;
  