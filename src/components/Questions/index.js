import React, { Component } from 'react';
import Answers from '../Answers';
import './Questions.css';

export default class Questions extends Component {

  handleQuestionRender() {
    return this.props.questions.map(question => {
      return (
        <div key={question.id}>
          <h4>{question.title}</h4>
          <form>
            <Answers data={question.answers} questionId={question.id} />
          </form>
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
