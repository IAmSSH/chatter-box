import React from 'react';
import './App.css';
import Heading from './components/Heading';
import ChatWindow from './components/ChatWindow';
import MessageWindow from './components/MessageWindow';
import { Component } from 'react';
import io from 'socket.io-client';

class App extends Component {

  constructor() {
    super();
    this.state = {
      chatHistory: []
    }
    this.socket = io('localhost:8080');
  }

  componentDidMount() {
    this.socket.on('chat message', (message) => {
      this.setState({
        chatHistory: [...this.state.chatHistory, message]
      })
    })
  }
  
  handleSend = (e) => {
    this.setState({
      chatHistory: [...this.state.chatHistory, e]
    });
    this.socket.emit('chat message', e);
  }  
  
  render(){ 
    return (
      <div>
        <Heading />
        <ChatWindow  chatHistory={ this.state.chatHistory } />
        <MessageWindow handleSend={ this.handleSend } socket={ this.socket } />
      </div>
    );
  }
}

export default App;
