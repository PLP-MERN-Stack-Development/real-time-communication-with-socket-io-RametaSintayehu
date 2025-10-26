import React, {useEffect} from 'react';
import {socket} from './socket/socket.js';


export default function App(){
    useEffect(() => {
        socket.on('connect', ()=> console.log('connected',socket.id));
        socket.emit('ping', 'hello server');
        socket.on('pong', (m)=>console.log(m));
    }, []);
    return <div>Socket.io test - open console</div>
}
