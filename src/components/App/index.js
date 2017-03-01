import React, { Component } from 'react';
import axios from 'axios';
import sam from './sam.png';
import Quiz from '../Quiz';
import './App.css';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      quizzes: [],
      totalScore: 0,
      allScores:
    }
  }

  submitScore(score) {
    axi
  }

  updateScore(id, newScore) {
    let score = Object.assign({}, this.state.totalScore);
    score[id] = newScore;
    this.setState({ totalScore: score}, () => {
      submitScore(score);
    });
  }

  componentDidMount() {
    axios.get('/quizzes')
      .then(resp => this.setState({ quizzes: resp.data.quizzes }))
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={sam} className="App-logo" alt="logo" />
          <img src={sam} className="App-logo" alt="logo" />
          <img src={sam} className="App-logo" alt="logo" />
          <img src={sam} className="App-logo" alt="logo" />
          <img src={sam} className="App-logo" alt="logo" />
          <h2>Sam Johnson's Mod3 Assessment</h2>
        </div>
        <Quiz data={this.state.quizzes} updateScore={this.updateScore.bind(this)} />
      </div>
    );
  }
}
<img src={sam} className="App-logo" alt="logo" />
