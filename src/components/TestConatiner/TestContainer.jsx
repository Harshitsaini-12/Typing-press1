import react from 'react';
import './TestContainer.css';
import TryAgain from './../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';

const TestContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    startAgain,
}) => {
    
    return ( 
          <div className="test-container">
          {timeRemaining > 0 ?(
                <div className="typing-challenge-cont">
                    <TypingChallengeContainer 
                    words={words} 
                    characters={characters} 
                    wpm={wpm}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                    selectedParagraph={selectedParagraph}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                    />
                </div>
              ):(
                <div className="try-again-cont">
                    <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
                </div>
              )
          }
          </div>
     );
}
 
export default TestContainer ;