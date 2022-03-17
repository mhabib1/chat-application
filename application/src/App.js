import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css'

const App = () => {
    return(
        //ChatEngine is a component
        <ChatEngine
            //here we are going to pass all the props
            height="100vh"// This is the view point of the application.
            projectID="53afc2ac-927a-4c5d-87d8-32134e57fbaa
            "// This is the string when you create your chat application.
            userName="admin"// This is the username.
            userSecret="123456"// This is your user password.
        />
    );
}
export default App;