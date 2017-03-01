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
      totalScore: {},
      response: ''
    }
  }

  componentDidMount() {
    axios.get('/quizzes')
    .then(resp => this.setState({ quizzes: resp.data.quizzes }))
    .catch((error) => {
      console.log(error)
    })
  }

  handleSubmit(score) {
    fetch('/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ score: score})
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
      this.setState({ response: response.score })
    })
  }

  updateScore(id, score) {
    const currentScore = Object.assign({}, this.state.totalScore, { [id]: score})
    this.setState({ totalScore: currentScore })
  }

  showScore() {
    let { totalScore } = this.state
    return Object.keys(totalScore).reduce((acc, key) => {
      return acc = acc + totalScore[key];
    }, 0)
  }

  render() {
    const score = this.showScore()
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
        <Quiz data={this.state.quizzes} callback={this.updateScore.bind(this)} />
        {score}
        <button onClick={() => this.handleSubmit(score) }>Submit</button>
        {this.state.response}
      </div>
    );
  }
}
