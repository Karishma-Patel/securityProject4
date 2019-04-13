import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';

class AnswerChoice extends Component {
	constructor() {
		super();
		this.state = {
			content: ""
		}
	}

  render() {
    return (
      <div className="AnswerChoice">
        <Button>
        	hi this is home
        </Button>
      </div>
    );
  }
}

export default AnswerChoice;
