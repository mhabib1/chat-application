import React from "react";

const MyMessage = ({message}) => {

    // This will if the message sent an in attach or text message.
    if(message?.attachements ?.length > 0){
        return (
            <img
                src = {message.attachments[0].file}
                alt = "message-attachment"
                className = "message-image"
                style = {{ float: 'right'}}
            />
        )
    }

    return(
        <div className = "message" style={{float : 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50'}}>
            {message.text}
        </div>
    );
}

export default MyMessage;