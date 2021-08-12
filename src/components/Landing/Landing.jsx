import React from 'react';
import './Landing.css';
import Typewriter from 'typewriter-effect';
import icon from "./../../assests/new.png";

const Landing= () => {
    return (  
      <div className="landing-container">
        <div data-aos="fade-right" className="landing-left">
            <h1 className="landing-header">
                Can you Type ...
            </h1>
            <div className="typewritter-container">
            <Typewriter
                options={{
                    strings: ['Fast?', 'Correct?','Quick?'],
                    autoStart: true,
                    loop: true,
                }}
/>
            </div>
        </div>
        <div  className="landing-right">
            <img data-aos="fade-left" className="icon-image" src={icon} alt="hero" />
        </div>
      </div>

    );
}
 
export default Landing;