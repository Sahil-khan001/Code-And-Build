lets talk about Web Socket -- 

we know we have to make a request then server give us data
but suppose we want a feature that automaatically give us data without requesst

so websocket help us in this case --

eg-- zerodha -- the price of stock updating by itself onto ui
without making a request again and again 
so here websocket concept works 

lets start from basics --

when we make a connection -- 
we do normally 3 way handshaake connection between client and server 

client ------------------------------------ server 

syn 
syn-ack
ack

basically we send packets -- 
101 102 103 104

supposse we ssend packet 101 while synking
then ack add + 1 onto it and tell me to send from 102
then it also send a syn that is 500 now sserver give this to client
and do it regularly
now it said i receive message from syn start from 500

next message start from 111
next message u receive from syn 500

client  ==============================  server
I.p                                     packet
port                                    port 
packet                                  ip

they transfer messaage with ip address , port , packet  
they make a connection data changes then connection breaak
every request connection make fulfill then break

but how this connection break --
here also 4 way handshake make
syn
syn + ack
ack 
then server said i send u full data basicaally giving him ack

all these thing done in http 1.0 

but in http2.0
there is also 3 way handshake 
but here the connection is not break it will maintain so it is fast
the connection is maintain after every other message
but here also they follow rules -- first req then response
but we have to break the connection too -- resources are using -- if no one responsing then nodejss or any other proglanau breaaak it by own after a time that set by them

whaat is poling -- u are trying to make req to server again and again even it is not responsing 
ping again and again for new message 

so is there aany way so server automatically push update data to client 

Long Poling -- we have to wait for long time for data receive
we make a req server hold req when server got data it send to client 
then hold another req by client then give data later 
this is long Poling 

disadvantage is -- 
there is load in server , check data again ana aagain 
lot of wait time 

sol for this we find at that time is --
streaming facility come at that time -- 

we get data in streaming little by little 
like in gpt stream by stream

we make a req but we got data in chunks by chunkss

when to send the data from server --
http polling 
long polling -- we make a get req aand but server hold our req then give us data when available 
then stream facility -- 
data comes from server in form of chunks
supposse dataa comess in chunks in packet if any packet lost then we caan't dissplaay it on ui
so we have to retraansmit the paacket get it agaain from server

so long polling , streaming both is not solution of it 

 Now webssocket -- 

1st -- 3 way handshake is there first
once tcp connection is made 
it say convert this into websocket
there is 2 way handshaake agaain 
1. make this connection websocket
2. ur connection is made

basically we upgraded our 3way tcp connection to Websocket connection -- 
now server can send date without any request again and again 
at same time we we can make req too 
Now there is no rules of first make req then response 

imp.point -- tcp connection upgraded to websocket connection remember it -- 

what is socket.io -- 

we prefer express js over node js for server 
in same way -- 

it is a library that enables low latency , bidirectional communication between a client and a server 
it is build over websocket 

the code which is written by websocket we can write that code easily using socket

EARLIER -- in some browser and company the websocket code dont work
but socket.io which convert ur browser into http long polling  

problems with websocket -- 
didn't work with corporaate firewaalls , old browser or mobile network disable it also 

if in any company the webssocket is disable 
then socket convert that browser or company into http long polling we know everyone follow it 
so socket gives us flexibility to write code

in websocket 
we have to write some code over websocket that the connection is still alive or not
like there is client or server or not

like server is sending data again and again to client
but 
client is not there -- so resource are using wastage
like we have to break the connection 

so we have to write code for this over websocket 
but in SOCKET.IO , this check automatically
like he send ping request again and again in midway to check it is still alive or not 

in websocket -- suppose due to network issue client gone and come after some time
and server sending data again and again 
server think client got the data but it didn't so 

means if packet is not received to client then server dont get acknowledgement 
but it is done by socket.io 
acknowledgement also done here
like whenever client got packet the server got acknowledge

-- Now move to the code part --
--
first we have to make a server --

const express = require('express');
const app = express();

const {Server} = require('socket.io');

app.get('/' , (req , res)=>{

})





const server = app.listen(3000, (req , res)=>{
    console.log("server is listening at port 3000")
})

//upgrade to websocket sserver 
const io = new Server()



here what we do is we upgraded our server to webssocket server using this line --const io = new Server(server);
also whaatever request we get -- if it is related to websocket then it is solve by io server 
otherwise if it is normal request then normal server will attend it 
Now we connected our socket server to normal server 

now the issue in this code is -- 
suppose the socket server not able to attach with the normaal sserver after listening
sos what we do is --
we creaate sserver using http

const http = require('http');

const server = http.createServer(app);
const io = new Server(server);

//how to connect with the websocket code be like -- 
io.on("connection" , (socket)=>{

})


server.listen(3000 , ()=>{
    console.log("server is listening");
})



//suppose we have 3 client everyone waant to connect with the websocket 
all connected via different socket.id and everyone have different socket id so it uniqely identify

whenever aany requesst is ccoming we can find itss detail under 
req. parameter 

also once we connect to socket we have to disconnect too --
code be like -- 

io.on('connection' , (socket)=>{


    socket.on('disconnect' , ()=>{
        console.log("disconnected from server");
    })
})

for message code be like -- 

io.on('connection' , (socket)=>{

    socket.on('message' , (data)=>{
        io.emit('new message' , data);
    })

    socket.on('disconnect' , ()=>{
        console.log("disconnect from server");
    })
})


  socket.on('message' , (data)=>{
        io.emit('new message' , data);
    })

this socket.on is individual socket listening a message 
io.emit when forward message at everywhere\
emit meaans send to everyone 
on means to receive or listen 
socket.on -- it means individual socket come with any message in key value pairs 
io.emit -- it is webssocket server and it is saying that to send this message to everyone 

io.on('connection', socket => {
  socket.emit('request', /* … */); // emit an event to the socket
  io.emit('broadcast', /* … */); // emit an event to all connected sockets
  socket.on('reply', () => { /* … */ }); // listen to the event
});

Now move to the Chat Application -- 
first we build the frontend part using normaal html and csss
then we have to attach the socket into client side 
so for this we have to add this code -- 

we have other option too 
like first install socket io client connect this to backend url 
or
passte thiss code in frontend 
<!-- <script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io();
</script> -->


basically we connected frontend to backend


-- we know whenever we hit on any api from frontend the backend send data in JSON
now we see how to send file like index.html or other instead of Json

for this u have to install
npm i path 
then

const path = required('path');

app.get('/' , (req , res)=>{
    res.sendFile(path.join(__dirname , 'index.html'));
})

from backend we are opening index.html file 


also this
<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io();
</script>

connected to 
io.on('connection');

   socket.on('message' , (data)=>{
    io.emit('new-message' , data);
    })

this individual socket is listening at messsage key 

we can send message to individuaal socket or all socket 
socket.emit -- this individual socket broacast messaage onthis key 'messaage'
io.emit -- here we brodcasting this message to every connected socket to it 

when u write 
io.emit
it broadcast message to all socket connected to them
even itself too 
but if u want that it broadcast message to others not itself then write 
socket.broadcast.emit('new-message' , data);

Note -- NOW it means the message we send to server the server send this message to everyone except me
because of socket.broadcast  

note -- whatever we are building its a feature of live chat 
it not store ur old chats if u want them then u have to use database to store it 


-- Now the next feature is --
if u want to display the sender message on right and receiving one on the left then we can do it too -- 
the function that is sending messaage we have to edit it in -- 

code be like -- 
function sendMessage(){
    const msg = messageInput.value;
    socket.emit('message' , msg);
     const element = document.createElement('div');
    element.textContent = msg;
    element.style.textAlign = 'right';
    messageDisplay.appendChild(element);
    messageInput.value = '';
  }


now can we build a feature what we broadcast display to all only people in a specific groups --
like we created a room in which other people can join it just with the room id like in backend we have to create it 
so for this we have -- 
socket.on('join-room' , (room)=>{
    socket.join(room);
})

code for frotend -- 

  function joinRoom(){
  const room = roomNumber.value;
  socket.emit('join-room' , room);
  }

const roomNumber = document.getElementById('roomInput');

backend --
socket.on('join-room' , (room)=>{
    socket.join(room);
})

now we join the room but how can we send the message to the room --
for this we have to send the 3 things -- 
join room , room number , ur message

full code be like 
frontend --
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Chat Application</title>
</head>
<body>
    <h1>CHAT APP</h1>
    <input type="text" placeholder="Enter ur Room Number" id="roomInput">
    <button onclick="joinRoom()">Join</button>
    <div id="messageDisplay" style="height: 50vh; width: 50vw; background-color: antiquewhite;margin-bottom: 50px; margin-top: 30px;"></div>
    <input type="text" placeholder="Enter ur Message here" id="messsage" style="height: 10vh; width: 40vw; font-size: large;">
    <button style="height: 10vh; width: 10vw; border-radius: 20px; " onclick="sendMessage()">Send</button>

<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io();

  const messageDisplay = document.getElementById('messageDisplay');
  const messageInput = document.getElementById('messsage');
  const roomNumber = document.getElementById('roomInput');
  let roomId = null ;

  function sendMessage(){
    const msg = messageInput.value;
    socket.emit('message' , {room : roomId , msg});
     const element = document.createElement('div');
    element.textContent = msg;
    element.style.textAlign = 'right';
    messageDisplay.appendChild(element);
    messageInput.value = '';
  }

  function joinRoom(){
  const room = roomNumber.value;
  roomId = room;
  socket.emit('join-room' , room);
  }
  
  socket.on('new-message' , (data)=>{
    const element = document.createElement('div');
    element.textContent = data;
    messageDisplay.appendChild(element);
  })

</script>

</body>
</html>

backend --

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


now whoever join the room can see message and reply it --
also if a room is not create with a particulaar id then it creaated at that time --

SUpposse now we want to send message to a private person not in privaate room 
so we need only socket id of that particular person we can easily send private messaage to him

for this-- 
 socket.to(room).emit('new-message' , msg);
instead of this room -- 
we have to mention socket_id of that particular person 

for this we dont have to make room first 
we jusst need socket id
but behind the scene it also follow room system

we know that socket id is changing again and again 
so what we do is --

we can't store every user socket id 
so we have to find the common thing that are constant like usernaame , itss mobile number 
username which is constant

suppose we do this --
socket.emit('message' , {receiver:9191 , msg : "hello bhai kese ho"});
we send this from frontend but how sockerServer/whatsapp server know this what is 9191 
for this -- 
whenever we connected to whatsapp server 
on server side we have to manage this like we have to 
make a list of phone number along with its socket id once we store socket id along with it number we can easily send perssonaal messsaage 

so we need only db to store the phone number along with its socket id db like redis
then we pass
socket.to(socket_id).emit('new-message' , msg);

in phone the db be like -- 
phone number ------------ socket_id
phone -- [socketId1, socketId2 , socketId3 , socketId4]
we have to mention all socket id of tab 

we know socket is creation of ip address + port number 
socketID is generating when u connect with the webssocket server
at that time ur server store ur ssocketId along with ur phone number













 







