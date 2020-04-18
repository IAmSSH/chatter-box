import React from 'react';
import ChatWindow from './ChatWindow';
import MessageWindow from './MessageWindow';
import '../styles/chat-container.css'

function ChatContainer ( { chatHistory, handleSend, socket } ) {
    return(
        <div id="chat-container">
            <ChatWindow chatHistory={ chatHistory } />
            <MessageWindow handleSend={ handleSend } socket={ socket } />
        </div>
    );
}

export default ChatContainer;