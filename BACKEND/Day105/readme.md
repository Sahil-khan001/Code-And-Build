lets talk about WebRTC  --
Web Real time Communication --
with the help of WebRtc we can build live streaming app , video/audio ;

behind the scene of WebRTC -- 

normally what we do in video -- 
rohaan  ---------- server -------------- sohan
rohaan send video to server 
server send video to sohan
sohan send video to rohaan

here there is load on server , server bandwidth is using here a lot -- 
now with the help of WebRtc there is no SERVER --

rohaan ------------------p2p ------------------sohan

Peer to Peer Connections 

we know to send something to server we have to its I.p address , Port number 
if we get those I.p address , port number directly of sohan we can send the data

how we get those ip address , port number -- 
we want a way so that they can change their ip address, port number --
so for this what we do is -- 

here we use websocket server 
as such there is no server in webRTC provided but we have to use this to solve the problem 

in real world we connect on a whatsapp -- throught sockets 
then we click on video call -- it started 
in backend what happened --

they both shared ip address and port number with each other -- 
because of it this is possible --
so there should be a intermediarry so that we can share ip address , port number -- 
this is called Signaling 

more deep dive --
how can rohan and sohan get their own ip address
they get from stun server 
they have api that hit on stun server and stun server give him ip address , port no

now we have audio and video 
which use some algo to compress
Codecs -- this consist of some algo that convert our audio and video filess or it encode and decode the digital data , especially in multimedia formals like audio and video 

at the end after compress all data in 010101010101010101110
so how receiver know which part is for audio and which part is for video 

so receiver have to decode this into originaal form 
so from sender side we have to send the codecs algo , tell the receiver i use this to compress file  and this is audio and video part

before the ip address, port number come ussing stun server
we send Sesssion Description Protocol (media , format); to the receiver so that we know receiver browser supportss this algo or not 

sdp contains codecs algo which we use for compress file 
so if receiver it able to do it then it got video easily 

suppose we have more poeple who want to join video they came
they share own ip , port , sdp all together 
but there is an problem that there we one persson have to send their video to all other personss
saame ass this other person haave to do this 
ssuppose more people came how can we do it u can't handle that load
it create MESH upload bandwidth , cpu load

for this we have to introduce a central server like -- 


MCu -- multipoint conference unit  it is in server 
server -- it take all video mke once and compresss it and give it all others 

      com1        ----------       server(MCU)    ---------           com 3

      mcu -- each participant send their own audio and video streaam to mcu , they decode all into incoming streams into single compossite stream like in picture and picture tv broadcast to each participant 

conss -- server load -- decoding , mixing , re enter thiss can limit scalability 
scalability comess with lot of problems delaay is there high latency 











