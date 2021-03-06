import React from "react";
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
// I had to import react to avoid : react/react-in-jsx-scope error

const ChatFeed = (props) => {
    const {chats, activeChat, userName, messages} = props;
    const chat = chats && chats[activeChat];
    const renderMessage = () => {
        const keys = Object.keys(messages);
        console.log(keys)
        return keys.maps((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return(
                <div key = {`msg_${index}`} style = {{width: '100%'}}>
                    <div className= "message-block">
                        {
                            isMyMessage
                            ? <MyMessage message = {message}/>
                            : <TheirMessage message = {message} lastMessage = {messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className = 'read-recipts' style = {{marginRight: isMyMessage ? '18px' : '0px', marginLeft : isMyMessage ? '0px' : '68px'}}>
                        read-recipts
                    </div>
                </div>
            );
        })
    }

    if(!chat) return 'Loading...';

    return(
        <div className = "chat-feed">
            <div className = "chat-title-container">
                <div className = "chat-title">{chat.title}</div>
                <div className = "chat-subtitle">
                    {chat.people.map((person) => `${person.person.userName}`)}
                </div>
            </div>
            {renderMessage()}
            <div style={{height: '100px'}}/>
            <div className = "message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    );
}
export default ChatFeed;