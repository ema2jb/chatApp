import React from 'react'

import './input.css'
//import closeIcon from './closeIcon'

const Input =({message, setMessage, sendMessage})=>{

    return(
        <form className="form">
            <input
                className="input" 
                type="text" 
                placeholder="Type a message "
                value={message} 
                onChange={({target:{value}})=>setMessage(value)} 
                onKeyPress={event=>event.key==="Enter"? sendMessage(event): null}
            />
            <button onClick={(event)=>sendMessage(event)} className="sendButton" >Send</button>
        </form>
    )
    
}

export default Input