import React from 'react'
import ReactEmoji from 'react-emoji'

import './message.css'
//import closeIcon from './closeIcon'

const Message =({message : {user, text}, name})=>{
    let  isSentByCurrentUser;
    const trimedName = name.trim().toLowerCase()

    if(user===trimedName){
        isSentByCurrentUser = true
    }

    return(
       isSentByCurrentUser
       ? (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimedName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
       )
        :(
            <div className="messageContainer justifyStart">
                <div className="messageBox backgrouneLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                </div>
                <p className="sentText pl-10">{user}</p>
            </div>
        )
    )
    
}

export default Message