import React, { Component } from 'react';
import './Answers.css';

export default class Answers extends Component {

  handleAnswersRender() {
    return this.props.data.map((answer, i) => {
      return (
        <div key={i}>
          <p>
            <input
              key={i}
              type='radio'
            />{answer.title}</p>
        </div>
      )
    })
  }

  render() {
    return (
      <ul className="answers-container">
        {this.handleAnswersRender()}
      </ul>
    );
  }
}
