import React from 'react';
import '../styles/chat-window.css'

function ChatWindow ({ chatHistory }) {
    let chat = chatHistory.map( ( message ) => {
        return(
            <div key={ Math.floor(Math.random()*100) }>
                { message }
            </div>
        );
    } );
    
    return(
        <div id="chat-window">
            { chat }            
        </div>
    );
}

export default ChatWindow;