import React, { Component } from 'react';
import { Container, Button, Header } from 'semantic-ui-react';
import './Question.css';

class Question extends Component {
	constructor() {
		super();
		this.state = {
		}
	}

	handleClick = (e) => {
		this.props.updateScore(this.props.question.correct_answer === e.target.value)
	}

  render() {
  	const question = this.props.question;
  	console.log(question);
  	const answered = this.props.answered;

    return (
      <div className="Question">
      	<Header as="h4">{"QUESTION " + (this.props.id + 1)}</Header>
      	<Header as="h1">{question.question}</Header>

      	<Container className="answer-choices">
      	{
      		question.answer_choices.map((choice, i) => {
      			return (
      				<Button 
      					className={"answer-choice " + (answered ? (choice === question.correct_answer ? "correct" : "answered") : "")}
      					disabled={answered}
      					value={choice}
      					onClick={this.handleClick} 
      					key={i}
      				>
	      				{choice}
	      			</Button>
	      		)
      		})
      	}
      	</Container>

      </div>
    );
  }
}

export default Question;
