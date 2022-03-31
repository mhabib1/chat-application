import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css'

const App = () => {
    return(
        //ChatEngine is a component
        <ChatEngine
            //here we are going to pass all the props
            height="100vh"// This is the view point of the application.
            projectID="f528aaf3-451b-41ef-b086-57d15eade8be
            "// This is the string when you create your chat application.
            userName="admin"// This is the username.
            userSecret="123456"// This is your user password.
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}
export default App; // This allows us to export this to other js files