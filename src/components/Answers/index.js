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

  setScore(e, score, id) {
    this.setState({ answer: e.target.value, score: score})
  }

  render() {
    const { data, questionId } = this.props
    const answers = data.map((answer, i) => {
      let {title, score} = answer;
      return (
        <label key={i}>
          <input
            type='radio'
            value={title}
            onChange={ (e) => this.setScore(e, score, questionId)}
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
