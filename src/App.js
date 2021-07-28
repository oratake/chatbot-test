import React from 'react';
import './App.css';
import defaultDataset from './dataset';

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

