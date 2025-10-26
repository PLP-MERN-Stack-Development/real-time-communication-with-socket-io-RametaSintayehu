const users = {};//socketId->{username}

function handleConnection(io, socket){
    socket.on('user:join', (username)=> {
        users[socket.id] ={username};
        socket.broadcast.emit('user:joined', {socketId: socket.id, username:username.username});
       io.emit('users:list', Object.values(users).map((u)=>u.username));
    });

    socket.on('disconnect', ()=> {
        const user = users[socket.id];
        if(user){
            socket.broadcast.emit('user:left', {socketId: socket.id, username: user.username});
            delete users[socket.id];
            io.emit('users:list', Object.values(users).map((u)=>u.username));
        }
    });
}

module.exports = {handleConnection };