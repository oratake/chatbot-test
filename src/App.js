import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
  }

  render() {
    return (
      <>
      </>
    );
  }
}

