import React from 'react';
import './TryAgain.css';

const TryAgain = ({words,characters,wpm,startAgain}) => {
    return (  
        <div className="try-again-container">
            <h1>Test Results 🎊</h1>

            <div className="result-container">
           <p>
               <b>Characters : </b>{characters}
           </p>
           <p>
               <b>Words : </b>{words}
           </p>
           <p>
               <b>Speed : </b>{wpm} wpm
           </p>
            </div>

            <div className="buttons">
                <button
                    onClick={() => startAgain()}
                    className="end-btn start-again-btn"
                >
                    Try Again!
                </button>
                <button
                    onClick={() => {
                        window.open(
                            "https://www.linkedin.com", "linkedin-share-dialog",
                            "width=800,height=600"
                        );
                    }}
                    className="end-btn share-btn"
                >
                    Share
                </button>
                <button
                    onClick={() => {
                        window.open(
                            "https://www.twitter.com",
                            "Twiiter",
                            "width=800,height=600"
                        );
                    }}
                    className="end-btn tweet-btn"
                >
                    Tweet
                </button>
            </div>
        </div>
    );
}
 
export default TryAgain;