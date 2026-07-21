
we can validate data based on API's level --
api level validation 

-- like before this line can we validate the data --

// app.post("/info" , async (req , res)=>{
//     await User.create(req.body);
//     res.send("User Registered Successfully");
// })


await User.create(req.body);
before creating the data in backend can we validate the date 
means whatever data we are going to send first validate then create/store

for this --
like in first name we mention in schema validation -- required : true
can we check here 
that data consist of firstname or not --


benefit is --
if we do at schema level than what happened we have high bill 
soo much network call
all validation at schema level 

why not at api level otherwise for each quiery pay the money --
now how we write code for field that have required : true;

const mandatoryField = ["firstName" , "email", "age"];

const isAllowed = manatoryField.every((k) => Object.keys(req.body).includes(k));
if(!isAllowed)
throw new Error("Field Missing");


<!-- ================================================================================================== -->
✅ API-level validation (preferred first)

Validate before sending data to the database.

Why?

🚀 Faster → Rejects bad data without a DB query.
😊 Better error messages → "Email is required" instead of a database error.
💰 Saves database resources.
🛡️ Can validate business rules (password length, confirm password, custom logic).
✅ DB/Schema validation

Acts as the last line of defense.

Why?

Ensures no invalid data is ever stored, even if another API or developer forgets validation.
Protects data integrity.
Best Practice

Use both:

API validation → Better user experience and performance.
Schema/DB validation → Final safety check.

Think of it like airport security:

API validation = Security check before boarding.
DB validation = Final gate check before entering the plane.
but why tell me in short

Because API validation catches errors early, before they reach the database.

✅ Less load on the database.
✅ Faster response to the client.
✅ Cleaner, user-friendly error messages.
✅ Can check business rules (e.g., confirm password, age > 18).

Schema/DB validation is still needed because someone might bypass your API (another service, script, or developer). It ensures invalid data is never saved.

Rule: Validate early (API) + Validate finally (DB).

<!-- ---------------------------------------------------
 -->

 basically we can do data Validation too but it takes time 
 first request call then response 

 if we do this at api level then our time can reduce too 
 less load on db , cleaner , fast reponse to client

 for this we have to use the VALIDATOR library from npm 
npm install validator 

it provide functions for validation so that we can validate the data at api level but
for this first we have to make a folder any name utils then validator.js file
then write all the functions provided by validator also 
we have to export this file 

so that we can import on server.js file 
we make sure that our server file must be clean 
so all other thing must be in other folder 


what we done till now -- 

we have completed validation at API level before it going to the DB
now less on db validation even no

then we convert password into hashcode as well using bcrypt libray 
first import in server.js file then use 
so password is coming first validate at api level using validator library 
then convert 

now user is registered --

now we implement login -- 
for this 
user have to enter 3 things -- _id , email , password 
_id -- we discuss about it later how user know his id
then email , then password

code be like --

app.post("/login" , async (req , res)=>{

    //we can do validation also here -- using validator library too
    
      try{
          const people = await User.findById(req.body._id);
      
          if(!(req.body.email === people.email))
              throw new Error("Invalid Credentials");
      
   const isAllowed = await bcrypt.compare(req.body.password , people.password);

   if(!isAllowed){
    throw new Error("Invalid credentials");
   }

          res.status(201).send("Login Succeed");
      }catch(err){
        console.log("error " + err.message);
      }
})

//in this request writin this  Invalid Credentials is right or u have to write separate diff
message like email is incorrect , password is wrong -- we dont have to do this 
otherwise hacker will know okk email is correct ans pass is wrong and vice versa
so we have to pass Invalid Credentials in both 
so hacker will not able to know --

now move to  ==
-- bascially we make a login --
we login through --
email
password 

we make a request and it response   -- that u login in 
now this connection is over 
now we  make a request i want to go on chat 
another request -- so for this what we do is --
so how server know he is the right person 
because anyone can do this 
so how server will authenticate --

request like -- "user/:id"

const result = await User.findById(req.param.id);
res.send(result);

suppose anyone can come and ask same request --
so we have to authenticate the user first 

THe issue is IF we login into a application -- using email and password --
then in that application if we want to use other feature so we need to authenticate ourself --

we have some methods for this -- 
 1. old way is -- Every time we have to send the email and password and get the info
 because other user dont have password 

 the problem with this is -- we have to again verify the things again and again 
 and make db call again and again that email is right pasword is right 
 the more u call the database the more bill it has 

 2. Session Id -- we have to send the session id 
 it is like when u do a parking in a parking a lot
 the man gives u slip with a number u take that slip
 the parking man also have that slip when u came u show ur slip it match with man slip
 then it give ur car

 same like -- when we login in -- then server gives us Session id 
 like we login with sahil@123 then he give 9 to us 
 then when we make a other request we show 9 to him then he check in it record book because insta have big application lakhs of users he understand yes he is sahil@123 give him access
 this cycle goes on --

he store this record in db and create replica of it 
This is StateFull

BUt -- if someone steal ur session id then it can steal ur data too
also if we store in memory/server than we have to share it with others also 
like we have to maintain this info suppose we have to 

3. can we have any solution through which we cannot store this record
--eg like resturant -- it gave u a token u take it -- restu dont have to store a record of it
after food ready u give him token and it give u food 
no record maintain and everything works

-- now 
in passport also upon ur photo govt make a sign if u remove photo then u will not allowed --
so same like we have -- digital signature 

Digital Signature -- 
we have two banks 
bank 1 have to send 100 rs to bank2
while sending message suppose something change because of ups and down of bits then how bank know they do hashing
bank1 message into hashcode
bank2 got message and hashcode
then both message and hashcode checked
that way we do the integrity 

Integrity is maintained --
but how bank2 know that this message is given by bank1

here we have Digital Signature
we have public and private key
 
we own have private key , but all others have my public key
if u have encrypted using private key then u can decrypt it by public key only 


-- we have 
me -- i have to send 100rs to bank
we have private key, public key 



hacker -- he have public key




bank2 -- he have public key 

--we send the data from me first i convert it into hashcode  then encrypt it using private key 

then bank2 got he first decrypt it using public key and convert into hashcode 
if same then okk

now hacker also have -- public key he can also decrypt it 

--- now because of this Digital Signature(public and private keys) -- hacker cannot do anything 


Digital Signature -- convert ur message into Hashcode
--then encrypt it using ur Private key

key is string 
private key  , public key -- converts ur message into hashcode


Everyone have their own private and public key 


DIGITAL SIGNATURE SAYS-- whatever message send to u-- 1. it is safe properly , integrity is maintain , and
2. It is send by me 

the hashcode u encrypted by private key -- it is Digital Singature 













 