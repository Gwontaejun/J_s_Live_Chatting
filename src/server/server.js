const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, { cors: { origin: "*" } });

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
        socket.emit('disconnected');
    });
    socket.on('chat message', (name, msg) => { //클라이언트로부터 chat message라는 메시지를 전송받을때 실행
        io.emit('chat message', name, msg);
        console.log('message: ' + name, msg);
    });
});

server.listen(3001, () => {
    console.log('listening on *:3001');
});