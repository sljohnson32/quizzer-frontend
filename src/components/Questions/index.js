import React, { Component } from 'react';
import Answers from '../Answers';
import './Questions.css';

export default class Questions extends Component {

  handleQuestionRender() {
    return this.props.questions.map((question, i) => {
      return (
        <div key={i}>
          <label>
            <h4>{question.title}</h4>
          </label>
            <Answers data={question.answers} />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="questions-container">
        {this.handleQuestionRender()}
      </div>
    );
  }
}
