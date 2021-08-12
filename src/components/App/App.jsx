import React from 'react';
import Landing from '../Landing/Landing';
import Nav from "../Nav/Nav";
import './App.css';
import Footer from '../Footer/Footer';
import Challenge from '../Challenge/Challenge';
import {SAMPLE_PARAGRAPHS} from './../../data/SampleParagraph';

const totalTime=60;
const ServiceUrl="http://metaphorpsum.com/paragraphs/1/8"; //No SSL Certificate so we are using a fallback method because some browsers block the API requests with no SSL Certificate i.e. with url HTTP 
const defaultState = {
  selectedParagraph: "",
  timerStarted: false,
  timeRemaining: totalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: []
};

class App extends React.Component {
  state = defaultState;

 fetchNewParagraphFallback = () => {
    const data = SAMPLE_PARAGRAPHS[
      Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
    ];

    // this.setState({ selectedParagraph: data })
    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted"
      }
    })

    this.setState({
      ...defaultState,
      testInfo: testInfo,
      selectedParagraph: data
    });
  }

  fetchNewParagraph = () => {
    fetch(ServiceUrl)
      .then((response) => response.text())
      .then((data) => {
        // console.log('API RESPONSE IS', data)
        this.setState({ selectedParagraph: data })
        const selectedParagraphArray = data.split("");
        // console.log('SPLITTED ARRAY',selectedParagraphArray);
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted"
          }
        })

        this.setState({
          ...defaultState,
          testInfo: testInfo,
          selectedParagraph: data
        });
      })
  }

  componentDidMount() {
    // this.fetchNewParagraph();
    this.fetchNewParagraphFallback();
  }

  startAgain = () => {
    // alert('I am starting again');
    // this.fetchNewParagraph();
    this.fetchNewParagraphFallback();
  }

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        // Change the WPM 
        const timeSpent = totalTime - this.state.timeRemaining
        const wpm =
          timeSpent > 0
            ? (this.state.words / timeSpent) * totalTime
            : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm)
        })
      } else {
        clearInterval(timer)
      }
    }, 1000)
  }

  handleUserInput = (inputValue) => {
    if (!this.state.timerStarted) {
      this.startTimer()
    }

    // console.log(inputValue);

    /* 
      1. Handle the underflow case (when typed nothing) - all the characters should be shown as not-attempted
      2. Handle the overflow case - early exit
      3. Handle the backspace 
          - Mark the [index + 1] element as not attempted (Irrespective of whether the index is less than zero)
          - But don't forget to check for the overflow case here
            (index + 1 -> out of bound, when the index == length - 1)
      4. Update the status in the testInfo
          - Find out the last character in the inputValue and its index
          - Check if the character at the same index in testInfo (state)   
            matches or not      
            - Yes -> "correct"
            - No -> "incorrect"
      5. Irrespected of the case, characters, words and speed (wpm) can be updated
    */

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted"
          },
          ...this.state.testInfo.slice(1), // slice() is used so that first character doesn't gets repeated
        ],
        words,
        characters
      });

      return
    }

    if (index >= this.state.selectedParagraph.length) {
      this.setState({ characters, words })
      return;
    }

    // Make a copy of testInfo
    const testInfo = this.state.testInfo
    if (!(index === this.state.selectedParagraph.length - 1)) {
      testInfo[index + 1].status = "notAttempted"
    }

    // Check for the correct typed letters
    const isCorrect = inputValue[index] === testInfo[index].testLetter

    // Update the testInfo
    testInfo[index].status = isCorrect ? "correct" : "incorrect"

    // Update the state
    this.setState({
      testInfo,
      words,
      characters
    })

  };

  render() {
    // console.log(this.state.testInfo);
    return (
      <div className="app">
        <Nav />
        <Landing />
        <Challenge
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />
        <Footer />
      </div>
    );
  }
}

export default App;