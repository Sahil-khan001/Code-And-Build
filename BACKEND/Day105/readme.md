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
scalability comess with lot of problems delaay is there high latency we can't use this 

the we have SFU comes into the picture -- 
Selective forwarding unit 

it is also connected to diff devices --
when videoss comess to it it can't compress aany video it directly forwaard video 
supposes 4 devices and this server 
one upload and 3 download on browser

means now loaad on client side now client have 3 other streams
AND we use in this in reaal world -- 
GOOGLE MEET , ZOOM 
because there load on server is less
now load on client side 

supposse u are on a meeting with 1000 participants
dont u think ur device can handle 999 streaamss on ssingle phone 
how we solve this problem 

suppose there are 1000 people in a meeting -- 
 u know there is only some people that are visible and video coming , voice 

 so SFU streams only those ones not all 
 now u will be wondering suppose all video , voice are on how we do it
 if u see in zoom u can see only limited no of people in screen 

  like there is only 20 people in 1 tab so sfu only forward those 20 ones
  also they can reduce there quality too 

 that is how it work and we use this in real life 
 it is SCALABLE and less CPU intensive 

 So this is Scalaability and we understand it 
 now move to the TURN SERVER --

 if a router is connected to muliple devicess within a saame network aand thosse devices have own privaate address
 then for  baatcheet we can use
 private address too instead of public one -- 

 now we see like rohan and sohan change their ip address , port no
 we know everydevice have some firewall so that upcoming EXTERNAL request can block

but when rohan make aa request for CONNECTION  to sohan he can't doit because of firewall issue so what we do is
we create a TURN server apart from socket sever 

now onto that server rohan make request for connection sohan can do it too and now they make a connection 

firewall -- internal one make connection with outside one and access system but vice versa not possible because of Firewall

Now rohan send data/video to turn server 
and turn server send data/video to sohan and vice versa

in simple stepss --
webrtc find pubic , private  , turn server IP address of both rohan and sohaam
now they both find best way to connect if no firewll then connect via public
if both have firewall then usse turn server 
if they both were in same network then use private addresss

they find best way to connect 
before share ip they share SDP protocol compressed algo

turn server is taking costing and we have to spend money on it because it doing work requesst reponsse of video/audio

here in diaagram there is signaaling -- we already connected in websocket so if we want to transfer data then we can use it emit() then .on()
so here signaling is haappneing















