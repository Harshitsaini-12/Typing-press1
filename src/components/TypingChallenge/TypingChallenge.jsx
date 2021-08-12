import React from 'react';
import TestLetter from '../TestLetter/TestLetter';
import './TypingChallenge.css';

const TypingChallenge = ({

    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    }) => {

    return ( 
        
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:
                {timeRemaining>=10 ? timeRemaining :`0${timeRemaining}`}
                </p>
                <p className="timer-info">
                    {!timerStarted && "Start typing to start the test"}
                </p>
            </div>

           <div className="textarea-container">
           {/* {Text area left} */}
               <div className="textarea-left">
               <div className="textarea text-paragraph">
                        {/* {selectedParagraph} */}
                        {
                            testInfo.map((individualLetterInfo, index) => {
                                // return <div>{individualLetterInfo.testLetter}</div>
                                return <TestLetter
                                    key={index}
                                    individualLetterInfo={individualLetterInfo} />
                            })
                        }
                    </div>
               </div>

            {/* {Text area right} */}
           <div className="textarea-right">
               <textarea 
               onChange={(e)=>{onInputChange(e.target.value)}}
               className="textarea textarea-right" 
               placeholder="Start typing here....">

               </textarea>
           </div>

           </div>

        </div>
     );
}
 
export default TypingChallenge;