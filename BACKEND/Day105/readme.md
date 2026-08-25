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
like we have to use the websocket in order to send the ip addresss , port number that's why we need it 

in real world we connect on a whatsapp -- throught sockets and its server
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
Now receiver got that algo meanss codec it check that it is compatible with codec or not or conformable with audio/video

<!-- =============================================================================================================== -->

NOW THE SCALING PART -- WHAT WE DO IF WE WANT TO SCALE OUR WEBRTC APPLICATION
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

 ===================================================================================================================/
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

so -- we have ICE Candidate -- 
these all are candidate and falling mechanissms --

-- Private Address
-- Stun Server -- Public Address
-- Turn Server -- own address

first start with private address then stun server then turn server 


<!-- ========================================================================================================== -->
---SHORT -- stun server give us ip address , port number
if we are in private network then we can send ip ,port no using private addressss
if both device have firewall then we have to use the turn server but we have to pay the cost for it 
if both have no firewaall we can send ip/port using PUBLIC 
later we connected through any waay we can send video info to other and vice versaa 

BEFORE PROJECT --
Ice Candidate --
can 1 -- private address
can 2 -- stun - public address
can 3 -- turn server ip/port no

Client send two thingss to 2nd device 
1. 1st is 
in the form of streaams/chunks one by one 
send private address 
send public address/port no
send turn server ip/port no
via 
connected throught websocket server 

2nd is 
client send offer that this is our requirements to compress file algo we use -- 2nd client accept that offer and give him answer
Offer that is Sdp -- session dessciption protocol
algo that used to compresss file audio/video

Once he send all ice candidate addressses and once he connected then we dont need any websocket we directly send data to client and vice verssa
but first we need webssocket sserver to connect both client --

<!-- =========================================================================================================== -->


Now letss Start the Project --

we have frontend --
we have a container div
in which we have local video , remote video
then we have 2 button to accept and reject button of incoming call
then we have some controls and button we have start call and end call button 

then we haave backend -- 
we first access of allbuttons then
we have ICE SERVERS -- {
      {
            urls:
      }
      {
       urls:
       username:
       credentiaals
      }

}

this consist of stun server url
turn server 
but we know turn server is a paid service 
so for free we use twillo it provide $15 worth free server services just go to ssign up then login then u have account_id , authtoken copy it 
then there is a scipt run with thi account id , aauthotken it generaate url aand 


copy account sid and auth token from twilio 
so that u can create username or password/credientals for turn server 
u have to generate this first run some code with account id and auth token
it generaate url username credentialss 


Now on ui we have 
2 frames - client 1 and client 2 
buttons are cameraa , start call , end call

2nd is incoming call 
it show accept and reject option  
if we accept incoming call then we have to give access of 
access of camera , mic 
and show it on ui
self video also 


for access of camera and ui we have free api in browser
navigator.mediaDevices.getUserMedia{
      video : {width : 1280 , height : 720},
      audio : true ,
}

it is free we can write true we want access of video and camera
after got access of video and cameraa 
whatever data is coming  from media access then we have to show on ui too

 localStream = await navigator.mediaDevices.getUserMedia{
      video : {width : 1280 , height : 720},
      audio : true ,
}

localvideo.srcObject = localStream;
startBtn.disabled = true;

from this we learn how to access to media and show it on ui

Now move to the -- 
create PeerConnection -- 
and we have to pass the iceServer 

this rtc peer connection do all these things to fetch data addresses/port no from stun , turn server 
like rtc call their api to get data
they handle everything through which address we make aa connection everything

--also we have to send our self video to the client as well
through this line -- localvideo.srcObject = localStream;
well see ourself on ui 
but we have to send our self video to the client as well
for this rtc peerconnection help us -- 
like localStream.gettrack().forEach(track =>{
      pc.addTrack(track , localStream);
})

in localStream video is coming in chunkss we are adding this in pc to ssend client 

now the other client video we have to sshow it on ui for thaat
 rtcPeerConnection give us client video --
 pc.ontrack = event  =>{
      remoteVideo.srcObject = event.Streams[0]
 }

also we have to send the candidate as well 
pc.onicecandidate({candidaate})

Now we handle the offer -- 
setdescription of offer and create a answer for it 

incoming call reject --
currentOffer = null;
incoming call set as hidden

hangup --
pc.close(); 
pc = null

remoteVideo = null
locaalstream track = stop

<!-- ============================================================================ -->
u can't memorize whole code FLOW IS IMP.

the most imp. thing is -- 

ADDRESS -- icecandidate -- private , public , Turn server 
IN which language we talk to each other -- Offer , Answer

all these things is handled by RTCPeerConnection 
 

all thing is generaated in WEBRTC but he dont know how to ssend this data to other client that where Socket is coming 
we use socket to send details 


we know if we want to talk to anyone wewant its address
it iss handle by icecaanditate it have other candidate like can we connect through public , private address or we need turn server 

in which language we talk -- offer accepted and rejected , answer we have to ssend 

all these things handled by rtcPeerConnection -all these thing done by it how to make connection finding public , private ip aaddress , offer generaate 

then all thesse things handle by webrtc 
it generaates all daata 


then we use socket to send all these data to another client
then rtcPeerConnection analyze  which connection best for him public , private , turn 
the video call start now we dont need any server like socket

-- we also leaarn two things --
like relay 
to write same code for 3 types we usse relay to make it sshort

in routing we do like -
app.use('/server' , Server);

it only contain one file that is Server.js
suppose instead of one file if we want that on ui it render whole folder which contain index , css , js file then we uss
app.use(static , folder name )
u can gpt it for this 

in turn server -- 
the credentials will expire after 1hour call got disconnect 
we saw this in real world too it got disconnect 
now turn server dont access to u u have to again connect with turn using diff credentiaals


 















