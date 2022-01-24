import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../Message/message'

import './messages.css'
//import closeIcon from './closeIcon'

const Messages =({messages, name})=>{

    return(
       <ScrollToBottom className="messages">
           {messages.map((message, i)=><div key={i}><Message name={name} message={message} /></div>)}
       </ScrollToBottom>
    )
    
}

export default Messages