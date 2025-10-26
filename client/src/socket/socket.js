import {io} from 'socket.io-client';
export let socket;
export function connectSocket(){
    socket = io('http://localhost:5000');
    return socket;
}
