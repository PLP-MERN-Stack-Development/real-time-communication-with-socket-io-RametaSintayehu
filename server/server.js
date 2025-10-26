// server.js - Main server file for Socket.io chat application

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const presence = require('./socket/presence');
const message = require('./socket/messages');


const app = express();
app.use(cors());


const server = http.createServer(app);
const io = new Server(server, {cors: {origin:'http://localhost:3000'}});


io.on('connection', (socket) => {
  Console.log('connected', socket.id);
  presence.handleConnection(io, socket);
  message.messageshandler(io, socket);
});

server.listen(5000, () => console.log('server 5000'));