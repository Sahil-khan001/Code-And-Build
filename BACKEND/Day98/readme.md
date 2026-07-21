let's talk about JWT tokens

jwt token store in cookies -- 
-- in cookies we have token

suppose we are on a website --
we already enrolled in a course

now -- we have to install a extension -- cookie editor 
then open it and click on export and then JSON 

now we have to go to same cohort purchase page
now we have to open cookie editor , click on import then paste this code
then refresh the page 
now it can bypass the course now u can saw the content in free
<!-- ----------------------------------------------- -->
now move to Digital Signature --

1. Content -- hashcode 
2. hashcode -- encrypt 

this is Digital Signature

now we use this in JWT -- JSON WEB TOKEN 

we have  CLIENT                           SERVER
when client got login in server 
Server give is JWT -- json web token 

so that everytime we don't need to login again and again 
we just give it JWT -- it is just a string 
--when we login in we get -- jwt 
when we access another feature -- we just give JWT 

in first --
the client give username and password to the server - the server verify the user from checking from the database 
and it generate the JWT -- json web token 

then we give this jwt token to server next time and it will give access with username and password

now we have to go to jwt.io 
then we have jwt token 
in which we have 3 diff line/color of code

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

1st line it represent Header Part
2nd line is Payload
3rd line is Digital Signature 

so for first time we send username and password then it give us JWT
now second time we have to send JWT 
it consist ur Username information too

all things that are sensitive not stored in JWT
people say put ur password in JWT but no 

u can put ur username in JWT
but not the sensitive information 

now in JWT we have Header.Payload.Digital Signature 
--
we have APIendpoints --
app.get("/chat")
app.get("/reel")
app.get("/video")


we have payload 
 {
    username : "sahil01",
    email : "rohit@gmiail.com"
 }

 with the payload we can store the info of student 

 when we make a request another time JWT will go -- 
 we make a request  --app.get("/chat")
 it go in server  he said for whom u will get chat
 so we have username , email in JWT -- because of JWT we willget chat of particular person


 basically user will make a request -- app.get("/chat")
 for which person u want chat
 so we have JWT

 we can just make a req in get
 we can't send person details in body in get request we know
 but we can send token of it 

 token contains details of that particular person 

 then what we do is 
 (Header and Payload) --> Hashcode
  HashCode --> Encrypt  -----------now we got Digital Signatue 

  now to encrypt this hashcode we want key 
  the server have key to encrypt this 

  we use digitalsignature to make sure that there is no changes made 
  whatever i am sending is send by real users

  bascally we are given token to a server
  it contains sensitive info too
  so server think sometime people can create this fraud token as well
  like they can copy 
  header and Payload 
  but not the digital signature because to encrypt this the key is in server itself 


  so what happened when this jwt goes into server
  sever check it is real token or not 
  this jwt give -- header.payload.digital signature


  what u do behind-- u take header.payload from it convert into hashcode
  then this hashcode encrypt using ur own key -- than u got digital signature

  now u match ur own digital signature with the coming jwt digital signature if it is same then u give access to it 
 
  this we call as STATE LESS -- means u dont have to store anything in db
  u just do one operation and it done 


  we have 2 types of protocol -- stateful and stateless

1. Stateful -- we know in session id -- server have to generate it then it give us so it have to stored this session id either in server or db
so this is Stateful 

2. Stateless -- here we see in jwt when we login in it generate jwt then it give(no storage) us when we again request then we have to give jwt and server just have to verify it no need to store jwt and anthing so this is Stateless

the Header and Payload does not hash 
it convert into hashcode then encrypt by key when we need digital signature 
otherwise it is in normal state
we can check it out too

IN HASHING -- we can do only one way
-- Sahil@124 ---- fdhjkdhrjkj45jj5j4t4
u cannot revert it back

BUT U CAN DO ENCRYPTION AND DECRYPTION AT SAME TIME --
-- Rohit ------- mohit 


in JWT -- we can do hashing + encryption and decryption 

YOU can give user JWT while registering 
or u can give him after login too 
it's ur choice 

JWT or Access Token --
when we do login server gives u jwt 
it consist all info -- usernmae , email or other too

if anyone steal it then 
also there should be some expiry on the JWT

we have seen some website expire the session after log in 
some cannot 
like leetcode -- it expire session after sometime 
then again login in and it give us JWt

now -- it depends on os either we will expire the token or not

in token -- we can set Invalidate --
we can set Date too 
on which date it gonna be expired the token 

also we have seen --
on linkedin, other website -- u can see u always login in 
so it means they not have their expiry 


-- NOW move to the code part 

<!-- ---------------------------------------------------------------------------- -->

till now we have code in which we have written --

when we do login --

we have to send id , email , password


before login success
we sent jwt token -- in cookies like --
res.cookie("token" , "ghjgkfgjbgfkjgkkkj5665");

this value --ghjgkfgjbgfkjgkkkj5665 we generate it by jwt later

res.send("login Successfully");
then login success

-- when we run this code 
the token stored in postman -- in cookie session 

but when u make a request from browser then 
browser will handle it automatically

now we move to the ==
if we want this cookie like 
console.log(token);

now we move to get request --

when we try to print this it give us error--

like we do when data come in json to parser it to JS we do 
app.use(express.json());


we have to first parser it like this --
for this we have to install 
npm install cookie-parser

then import it -
const cookieParser = require('cookie-parser');

to convert same like -- express.json()
app.use(cookieParser());
u have to use all this in server.js file 

now it will show u in console after parse in js ojbect form --
{token : "dfjskekfjrjgkfjbr435343j44j54"};


till now we know how to send the cookie and how to parser it --
res.cookie("token" , "fjdkfjdflkjsdfkljdsoflj");
const cookieParser = require('cookie-parser');
app.use(cookieParser());

now -- 
res.send("token" , "gjskjsdksdklgjsd98898fd09");
instead of this line  gjskjsdksdklgjsd98898fd09 we have to send the jwt token  first we have to generate it then 
so for this we have to install
npm install jsonwebtoken 

because we have to know how to generate JWT token 
--code
const jwt = require('jsonwebtoken');

const token = jwt.sign({_id : people._id , emailId : people.emailId} , "Sahil@121");

{_id : people._id , emailId : people.emailId} -- this is payload
the header is automatically added
"Sahil@121" -- this is secret key at the time of verification it will help

res.cookie("token" , token);
res.send("login Successfully");

now this token represent -- an hashcode

now in "/info" to get all the details 
first we have to verify this jwt token too/ first verify the cookie then give all data
code be like --

now before sending all the data first we have to verify the cookie/jwt  for this code be like

app.get("/info" , async (req , res)=>{

   try{

   //first we validate the user using jwt
   const payload = jwt.verify(req.cookies.token , "sahil@212");
   console.log(payload);

    const result =  await User.findById({});
    console.log(result);

   }catch(err){
      console.log(err);
   }
})



 jwt.verify(token , "sahil@212");
 before giving all data first we verify 
 instead of this token where token come -- req.cookie.token
 "sahil@212" -- this is secret key -- through this it validate the user 

 const payload = jwt.verify(req.cookies.token , "sahil@212");
 console.log(payload);
 it can return payload if u are VALID USER otherwise it return ERROR 

 it give u data
 this is payload --
 {
   _id : "gnmf654yt56ttgbjiu6",
   email_id : 
   iat : 8598954893084
 }


 iat means this token generate at which time 
 now benefit of this payload 


  

final be like -- 
before login we have to send cookies/jwt so that we can get token -- 
so that later we can verify it --

const token = jwt.sign({_id : people._id , emailId : people.emailId} , "Sahil@121");
res.cookies("token_name" , token)
res.send("Login Successfully");



now we want data/new request after login --
now we have to verify before giving all data --
for verification he take token that he give and secret key to validate 
const payload = jwt.verify(req.cookies.token , "Sahil@121" );
console.log(payload);

//this verify code says if u are a valid user then it give upayload 


now it give payload or error --
in payload it give u  -- {
   _id : 
   email:
   iat : 
}

we got all this info that we send --

<!-- =================================================================================== -->
now the benefit of this is -- 

suppose we want a particular user so we find it using its id code be like
"/users/:id"

await User.findById(req.param.id);

like in postman we have to ediit in this line 
"/users/:id" -- now /users/3

so instead of this we use cookies like all the information stored in cookies
means in token that we stored using this line --
const token = jwt.sign({_id : people._id , emailId : people.emailId} , "Sahil@121");
res.cookies("token" , token);

to get this info we have to use --
const payload = jwt.verify(req.cookies.token , "Sahil@121");
all data in payload 

now we have to write

"/user"

const payload = jwt.verify(req.cookies.token , "Sahil@121");
const result = await User.findById(payload.id);
res.send(result);
