import React, { Component } from 'react';
import './Answers.css';

export default class Answers extends Component {

  constructor() {
    super()
    this.state = {
      answer: '',
      score: 0
    }
  }

  setScore(e, score, id, callback) {
    this.setState({ answer: e.target.value, score: score}, () => {
      callback(id, score);
    })
  }

  render() {
    const { data, questionId, updateScore} = this.props
    const answers = this.props.data.map(answer => {
      let {title, score} = answer;
      return (
        <label key={answer.Id}>
          <input
            type='radio'
            value={title}
            onChange={ (e) => this.setScore(e, score, questionId, updateScore)}
            checked={this.state.answer === title}
          />
          {title}
        </label>
      )
    })

    return (
      <ul className="answers-container">
        {answers}
      </ul>
    );
  }
}
