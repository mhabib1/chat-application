import React from "react";
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
// I had to import react to avoid : react/react-in-jsx-scope error
const ChatFeed = (props) => {
    const {chats, activeChat, userName, message} = props;
    const chat = chats && chats[activeChat];
    console.log(chat, userName, message);

    return(
        <div>
            ChatFeed
        </div>
    );
}
export default ChatFeed;