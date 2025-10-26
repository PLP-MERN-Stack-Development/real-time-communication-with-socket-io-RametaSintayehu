function messagesHandler(io, socket){
    socket.on('join:room', (room) => {
        socket.join(room);
        socket.emit('jined:room', room);
    });

    socket.on('message:send', (message) => {
        //message.to contains room name
        io.to(message.to).emit('message:new', message);
    });
}

module.exports = {messagesHandler };