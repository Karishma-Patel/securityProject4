import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Container, Header, Image } from 'semantic-ui-react';
import Home from '../Home/Home';
import Question from '../Question/Question';
import AnswerChoice from '../AnswerChoice/AnswerChoice';
import QuestionData from '../../questions.json';
import FreeAImg from '../../assets/free_a.png';
import TestBankImg from '../../assets/test_bank.png';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			score: 0,
			correct: 0,
			answered: false,
			question_id: 0,
			questions: QuestionData,
			"total": QuestionData.length
		};
		this.updateScore = this.updateScore.bind(this);
	}

	updateScore(isCorrect) {
		this.setState({
			answered: true
		})

		if (isCorrect) {
			this.setState({
				score: this.state.score + 10,
				correct: this.state.correct + 1
			});
		}

		setTimeout(
	    function() {
		    this.setState({
		    	question_id: this.state.question_id + 1,
		    	answered: false
		    });
		  }
			.bind(this), 2000
		);
	}

	selectImage() {
		if (this.state.correct > 10) {
			return "https://media.giphy.com/media/pHZdGyFNp5sUXq4jp5/source.mp4";
		} else if (this.state.correct > 5) {
			return "https://media.giphy.com/media/l0Iy89GffSH7LVmne/source.gif";
		} else {
			return "https://media.giphy.com/media/3o7bu7cXrxi1Z3Cp44/source.gif"
		}
	}

	selectQuestion() {
		if (this.state.question_id >= this.state.total) {
			return (
				<div className="quiz-end">
					<Header as="h1">Congrats! You've reached the end of the quiz.</Header>
					<Image src={this.selectImage()} size="medium"/>
				</div>
			)
		} else {
			const question = this.state.questions[this.state.question_id];
			return (
				<Question 
					question={question} 
					updateScore={this.updateScore} 
					answered={this.state.answered}
					id={this.state.question_id}
				/>
			)
		}
	}

  render() {
    return (
      <div className="App">
      	<Image className="meme-t" src={FreeAImg}/>
      	<Image className="meme-l" src={TestBankImg}/>
      	<Image className="meme-r" src={TestBankImg}/>
      	<Container>
      		<Header as="h3">THE KRYP QUIZ</Header>
      		<div className="stats">
      			<div className="score">
      				{"SCORE: " + this.state.score}
      			</div>
      			<div className="correct">
      				{"CORRECT: " + this.state.correct + "/" + this.state.total}
      			</div>
      		</div>
      		{
      			this.selectQuestion()
      		}
      		<div>
      			<Header as="h5">made with ♥ by karishma, regina, yujie, and paulina</Header>
      		</div>
      	</Container>
      </div>
    );
  }
}

export default App;
