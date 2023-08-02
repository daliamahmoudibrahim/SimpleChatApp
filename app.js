const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
app.use(express.static('./public'));
io.on("connection",(socket)=>{
    console.log('connection user');
    socket.on('disconnect',()=>{
        console.log('user disconnection');
    });
    socket.on('message_chat',msg=>{
        io.emit('message_chat',msg);
    })

})


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('server listen in port 8000');
})