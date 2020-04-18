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

    handleSet = (e) => {
        e.preventDefault();
    }
    
    render() {
        return(
            <div id="form">
                <form className="inner-form" onSubmit={ this.handleSet } >
                    <input 
                        type="text" 
                        name="name" 
                        className="message-field"
                        placeholder="Nickname"
                    />
                    <button className="buttons">Set</button>
                </form>
                <form onSubmit={ this.handleSend } id="messgae-form" className="inner-form" >
                    <input 
                        type="text" 
                        name="message" 
                        className="message-field" 
                        value={ this.state.message } 
                        onChange={ this.handleKeyPress }
                        placeholder="Message"
                    />
                    <button className="buttons">Send</button>
                </form>
            </div>
        );

    }
}

export default MessageWindow;