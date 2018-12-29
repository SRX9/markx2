import React, { Component } from 'react';
import './App.css';
import Head from './components/Head/Head';
import Chatlog from './components/Chat/Chatlog';
import Send from './components/Send/Send';
import 'tachyons';
class App extends Component {
  render() {
    return (
      <div className="a">
        <Head/>
        <Chatlog/>
        <Send/>
      </div>
    );
  }
}

export default App;
