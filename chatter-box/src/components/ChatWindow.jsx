import React from 'react';
import { Component } from 'react';
import autoscroll from 'autoscroll-react'
import '../styles/chat-window.css'

class ChatWindow extends Component {


    render() {
        let chat = this.props.chatHistory.map( ( message, i ) => {

            if (i === this.props.chatHistory.length-1)
            {
                if( message.direction === 'left' ) {
                    return(
                        <div key={ Math.floor(Math.random()*100) } className="left" >
                            <div className="tri-left animate-tri"></div>
                            <div className="ht ht-left animate-bg">
                                { message.message }
                            </div>
                        </div>
                    );
                }
                else if( message.direction === 'right' ) {
                    return(
                        <div key={ Math.floor(Math.random()*100) } className="right" >
                            <div className="tri-right animate-tri"></div>
                            <div className="ht ht-right animate-bg">
                                { message.message }
                            </div>
                        </div>
                    );
                }
                else return null;
            }

            if( message.direction === 'left' ) {
                return(
                    <div key={ Math.floor(Math.random()*100) } className="left" >
                        <div className="tri-left"></div>
                        <div className="ht ht-left">
                            { message.message }
                        </div>
                    </div>
                );
            }
            else if( message.direction === 'right' ) {
                return(
                    <div key={ Math.floor(Math.random()*100) } className="right" >
                        <div className="tri-right"></div>
                        <div className="ht ht-right">
                            { message.message }
                        </div>
                    </div>
                );
            }
            else return null;
        } );        
        // console.log(chat);
        
        return(
            <div id="chat-window" >
                <div id="inner">
                    { chat }            

                </div>
            </div>
        );
    }    
}

export default autoscroll(ChatWindow);