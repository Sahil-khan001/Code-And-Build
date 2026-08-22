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

it means the message we send to server the server send this message to everyone except me

note -- whatever we are building its a feature of live chat 
it not store ur old chats if u want them then u have to use database to store it 











 







