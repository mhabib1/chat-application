import {useState} from 'react';
import {sendMessage, isTyping} from 'react-chat-engine';
import React from "react";

const MessageForm = (props) => {

    const [value, setValue] = useState ('');
    const {chatId, creds} = props;
    const handleSubmit = () => {
        event.preventDefault(); // This will prevent from browser refresh once the form is been submitted.
        const text = value.trim();

        //Authenticates the string of the text message
        if(text.length > 0) sendMessage(creds, chatId, {text});

        // after sending the message this will set the value to empty form
        setValue('');
    }
    
    const handleChange = (event) => {
        setValue(event.target.value)
        isTyping (props, chatId);
    }
    return(
        <form className ="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message ..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </form>
    );
}

export default MessageForm;