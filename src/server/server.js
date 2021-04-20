const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, { cors: { origin: "*" } });
var chatArr = [];

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
        socket.emit('disconnected');
    });
    socket.on('chat message', (name, msg) => { //클라이언트로부터 chat message라는 메시지를 전송받을때 실행
        chatArr = chatArr.concat(name+":"+msg);
        io.emit('chat message', chatArr);
        console.log('message: ' + name, chatArr);
    });
});

server.listen(3001, () => {
    console.log('listening on *:3001');
});