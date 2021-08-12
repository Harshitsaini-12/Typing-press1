import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css';

const TypingChallengeContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,

}) => {
    return (  
        <div className="typing-challenge-container">

          <div className="details-container">

              <ChallengeDetailsCard cardName={"Words"} cardValue={words}/>

              <ChallengeDetailsCard cardName={"Characters"} cardValue={characters}/>

              <ChallengeDetailsCard cardName={"Speed"} cardValue={wpm}/>
          </div>

           {/* {The Real Challenge} */}
            <div className="typewriter-container">

              <TypingChallenge 
              testInfo={testInfo}
              timerStarted={timerStarted} 
              timeRemaining={timeRemaining}  
              selectedParagraph={selectedParagraph}
              onInputChange={onInputChange}
              />
            </div>

        </div>
        );
}
 
export default TypingChallengeContainer;