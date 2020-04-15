import React from 'react';
import '../styles/message-window.css';
import { Component } from 'react';

class MessageWindow extends Component {
    
    constructor() {
        super();
        this.state = {
          message: ''
        }
    }

    handleSend = (e) => {
        e.preventDefault();
        this.props.handleSend(this.state.message);
        this.setState({
            message: ''
        });
    } 

    handleKeyPress = (e) => {
        this.setState({ message: e.target.value });
    }
    
    render() {
        return(
            <form id="form" onSubmit={ this.handleSend }>
              <input 
                type="text" 
                name="message" 
                id="message" 
                value={ this.state.message } 
                onChange={ this.handleKeyPress }
              />
              <button>Send</button>
            </form>
        );

    }
}

export default MessageWindow;