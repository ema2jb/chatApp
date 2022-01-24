import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import "./join.css"

const Join =()=>{
    const[name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
    <div className="joinOuterContainer">
        <div className="joinInnerContainer">
            <h1 className="heading">Join</h1>
            <div>
                <input type="text" className="joinInput" placeholder='Name' onChange={({target:{value}})=>setName(value)}  />
            </div>
            <div>
                <input type="text" className="joinInput mt-20" placeholder='Room' onChange={({target:{value}})=>setRoom(value)}  />
            </div>
            <Link onClick={(event)=>(!name || !room? event.preventDefault(): null)} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit" >Sign In</button>
            </Link>
        </div>
    </div>
)
}

export default Join