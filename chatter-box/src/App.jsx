import React from 'react';
import Heading from './components/Heading';
import ChatContainer from './components/ChatContainer';
import { Component } from 'react';
import io from 'socket.io-client';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      chatHistory: []
    }
    this.socket = io('localhost:8080');
  }

  componentDidMount() {
    // left message
    this.socket.on('chat message', (message) => {
      let messageObj = {
        message: message,
        direction: 'left'
      }
      this.setState({
        chatHistory: [ ...this.state.chatHistory, messageObj ]
      })
    })
  }
  
  handleSend = (message) => {
    // right message
    let messageObj = {
      message: message,
      direction: 'right'
    }
    this.setState({
      chatHistory: [...this.state.chatHistory, messageObj]
    });
    this.socket.emit('chat message', message);
  }  
  
  render(){ 
    return (
      <div id="wrapper">
        {/* <Heading /> */}
        <ChatContainer 
          chatHistory={ this.state.chatHistory } 
          handleSend={ this.handleSend } 
          socket={ this.socket } 
        />
      </div>
    );
  }
}

export default App;
