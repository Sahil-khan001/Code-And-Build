const express = require('express');

const { Server } = require('socket.io');
const path = require('path');
const app = express();

const http = require('http');
const server = http.createServer(app);
const io = new Server(server);

app.get('/' , (req , res)=>{
res.sendFile(path.join(__dirname , 'index.html'));
})

io.on("connection" , (socket)=>{

    
    // socket.on('message' , (data)=>{
    //     // io.emit('new-message' , data);
    //     socket.broadcast.emit('new-message' , data);
    // })

    socket.on('message' , ({room,msg})=>{
        // io.to(room).emit('new-message' , msg);
        socket.to(room).emit('new-message' , msg);
    })

    socket.on('join-room' , (room)=>{
    socket.join(room);
    })

    socket.on('disconnect' , ()=>{
    console.log("disconnected from server");
    })
})


server.listen(3000 , ()=>{
    console.log("server is listening at port no 3000 :")
})