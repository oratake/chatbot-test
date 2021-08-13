import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList, Chats } from './components/index';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question',
    });

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId,
    });
  };

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === 'init'):
        this.displayNextQuestion(nextQuestionId);
        break;

      case (/^http*:*/.test(nextQuestionId)):
        const anker = document.createElement('a');
        anker.href = nextQuestionId;
        anker.target = '_blank';
        anker.click();
        break;

      default: 
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: 'answer',
        });

        this.setState({
          chats: chats
        });

        setTimeout(() => this.displayNextQuestion(nextQuestionId), 600);
        break;
    }
  };

  componentDidMount() {
    const initAnswer = '';
    this.selectAnswer(initAnswer, this.state.currentId);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) scrollArea.scrollTop = scrollArea.scrollHeight;
  };

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} select={this.selectAnswer} />
        </div>
      </section>
    );
  }
}
