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





