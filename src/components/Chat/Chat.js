import React, {useState, useEffect} from 'react'
import {useLocation} from "react-router-dom";
import queryString from 'query-string'
import io from 'socket.io-client'
import './chat.css'
import InfoBar from '../InfoBar/infoBar'
import Input from '../Input/input'
import Messages from '../Messages/messages'
import TextContainer from '../TextContainer/textContainer';




let socket
const Chat =()=>{
    const[name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const ENDPOINT = 'https://arcane-ocean-13863.herokuapp.com/'

    const params= useLocation()


    useEffect(()=>{
        const {name, room}= queryString.parse(params.search)
        setName(name)
        setRoom(room)

        socket=io(ENDPOINT)

        socket.emit('join', {name, room}, (error)=>{
            if(error){
                alert(error)
            }
        })

        return ()=>{
            socket.emit('disconnect')
            socket.off()
        }
     
    }, [ENDPOINT, params.search])

    useEffect(()=>{
        socket.on('message', (message)=>{
            setMessages([...messages, message])
        })

        socket.on("roomData", ({ users }) => {
            setUsers(users);
          });

    }, [message])

    const sendMessage = (event)=>{
        event.preventDefault()

        if(message){
            socket.emit('sendMessage', message, ()=>setMessage(''))
        }
    }
/*
    const  messageHandler =(value)=>{
        setMessage(value)
    }
*/
    console.log(messages)
    return(
        <div  className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
                />
            </div>
            <TextContainer users={users}/>
        </div>
    )

}



    


export default Chat