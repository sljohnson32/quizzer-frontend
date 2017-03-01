import React, { Component } from 'react';
import Questions from '../Questions';
import './Quiz.css';

export default class Quiz extends Component {

  handleQuizRender() {
    return this.props.data.map((quiz, i) => {
      return (
        <div key={i}>
          <h2>{quiz.title}</h2>
          <Questions
            questions={quiz.questions}
            callback={this.props.callback}
          />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="quiz-container">
        {this.handleQuizRender()}
      </div>
    );
  }
}
