lets talk about REFRESH TOKEN --

not every website use refresh token 
it depends on use case --

we have client     --token--              server

jwt A.K.A Access TOKEN -- 
what problems it have 

if we do expiry to none
then there is no need to login again 

--- now what we have to do --
suppose if u do expiry none
then suppose u login into applicatioh 
2nd time using token -- token is imp.  -- this is verifies by server and give u access
now what u have to do is --

--suppose this token is steal then anyone can access 
even server can invalidate it because id dont have access and it not stored it just verifies and give u acceess

the problem is -- server is not able to invalidate this 
it can verify but not invalidate 

so never unlimited the expiry of token 

in prev eg--
we see we are accessing the course without login and password 
just do it with the help of cookies in which token is there
means with the help of token we can accesss it 

so whenever u create jwt/token make sure u are putting expiry date
so when token came to server -- then it said now u have to login in
like after 30 min if u make any request then it says u have to login in this token is expire

because of this User experience is degrade like after 30 min we have to login again and again 
so here comes -- REFRESH TOKEN 

after login -- it create access token , refresh token
this access token valid till 30 min 
this refresh token valid till 7 days 

suppose u login then u made other requests 
then what happened -- after 30 min it expired access token 
then u send refresh token 
then sever think ohh refresh token come means access token expired okk lets create it new access token 2 and now it will be valid for again 30 min 
ola access token is remove new is here

because of it -- now i dont have to login again and again 

now u think -- 
after 7 days refresh token also expires so what happened
so server what do when he think that ohh refresh token is also gonna be expire
lets make another one -- refresh token 2 
that what server do 

what solve -- 
we can create access token again
we can create refresh token again 

now the issue is --
if refresh token is also if refresh token is steal than anyone can access data 

but at this time if u change ur password then refresh token will invalidate 
but ur access remains same 

Password change -- REFRESH TOKEN(we can do invalidate)
                   ACCESS TOKEN (not possible with this)


refresh token not look like --  header.payload.DigitalSingnature 
                                this is stateless like we not store this info 
                                at that time we validate it

Refresh token look like -- it create random string
also server stored this 
so that it can validate or invalidate it 
like it stored like this with some info

string -- SAHIL@#322
    7days remaining , 
    sahil - who is user


in future if refresh token come 
it check info of this with the db one it is valid , days remain , same owner , everything
then create new refresh token if time is over

suppose now ur refresh token is steal then anyone u changed the password
now ur server invalidate the refresh token it remove it from db
and create new on
if hacker come with old refresh token then it cannot do anything

this random string dont store any info 
they store string with some info username , days remaining etc
it is not like access token who store header.payload.digital signature


so when server generate its access token and 
refresh token which then it convert it into hashcode
and then stored in db(in hashcode but its own info not stored in db) because of this it can we can invalidate the token now 
we do this because if hacker steal our hashcode then no problem

final -- 
after login -- send some info -- server create jwt
next time we comeup with jwt -- with our request
server verifies then solve our request 
after sometime jwt/token expire because we have to set the expiry too that is M.imp
now expiry is over -- so we have to login again and again -- to solve this bad user experience - -
now server created 2 token -- access token/jwt  , refresh token 
now we have refresh token-- refresh go to server 
now server create another jwt till expiry time
even also create new refresh token if required
this cycyle goes on 
when hacker come it steal our tokens first is --  
(invalidate means now hacker dont able to use steal token it can't get access)
jwt/access token if steal then server can't invalidate the token
but refresh token if steal then server can invalidate the token
because we store refresh token in db withsome info in hashcode 
when ever any refresh token is come then server verifies it with db stored data 
if steal by hacker first they is in hashcode if steal then we we change the password
then server remove that token from db 
now hacker come with that token after converting from hashcode to token now it wont work 
because server can't find it in their database 
in this way how it work

basically in some website we prefer -- 
access token and set expiry after 1 day 
if steal then at max after 1  day u got ur data
we use this in normal website not in critical ones

but if u want to that access token can also do invalidate then 
store it in db 
but again same problem now we have to do queries with the database --
we have to run queries on db to verify it which increase cost
same problem with the session id type too

so give hacker access for 30 min to 1 day acc to token expiry

<!-- -------------------------------------------- -->

in banks -- they used session id authentication which is valid for 15min
it have sensitive information 
it is secure but it is slow too
it is Old way 

<!-- ---------------------------------------------------------------- -->

------------------------CLEAN CODE CONVERSION ------------------------------
-- 
now we see how to write more structure code for the jwt -
we  know afte login -- we get token from server 
then we take token with us to verify and fulfill our other request --
so code be like-- 

app.get("/info" , async (req , res)=>{

    try{
   const {token} = req.cookies;
   if(!token){
    throw new Error("Token is missing");
   }
   const payload = jwt.verify(token , "secretkey");

   const {_id} = payload;

   if(!_id){
    throw new Error("Id is missing");
   }

   const result =  await User.findById(_id)
   if(!result){
    throw new Error("Throw New Error");
   }
   req.result = result ;
    }catch(err){
        console.log(err.message + "error");
    }
})

so in this request we write clean code -- we do verification(jwt) + validation(using !) both at same time --
now  we have to do this in every request so what we do now is -- 

like in  app.get , delete in every so what we do it --
 we make a folder -- middle ware with auth.js file and put whole code into this -- 
 then export and import in main file 

 so all this code lie in every request so we put this in middlelware
 as we know middle ware take all common code whenever any request come first go into middleware verify and validate then middle ware do next() now go to other request handler to solve ur request


 now in schema we see this we create model -- 

 like in schema 
 we create object then key value 
 we can put function/methods into it also 

 method provides reusability which is imp.

const Twitterschema = new Schema({
    firstName : {
        type : String,
        // required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true ,
    },
    password : {
        type : String,
        required : true,
        unique : true,
    }
} , {timestamps : true});

like in this code -- the firstName , email , password are variables 
now for the functions how we make -- 

Twitterschema.methods.FunctionName = function(){
}
this is the structure to write a method 
<!-- ============================================================================================================== -->
Why doesn't it need a class?

Because in JavaScript:

Functions are values.
Objects can store functions.
A function stored inside an object is called a method.
Why does Mongoose use .methods?

When you later create a model:

const User = mongoose.model("User", Twitterschema);

Every document created from that model automatically gets those methods.

const user = new User();

user.comparePassword(); // Works

So:

Twitterschema → Schema object.
Twitterschema.methods → Object where you define instance methods.
User model copies those methods to every document instance.

Flow:

✅ Schema is a class.
✅ new Schema() creates the Twitterschema object.
✅ You add methods to Twitterschema.methods.
✅ mongoose.model() creates the User model (constructor/class-like).
✅ User.findOne() or new User() gives you a document object.
✅ That document object can call the schema methods.
<!-- ========================================================================================================================= -->
<!-- --------------------------------------------------------------- -->
we see in class we make variable and functions 
and we see how a object call a function 
class Students{
  const name ;
  const email ;

  constructor(name , email){
    this.name = name;
    this.email = email;
  }

  age() : {
    console.log("this is my age");
  }
}
this is class 
let student 1 = new Students("sahil" , "sahil@121");
student1.age();
like in this way object call a method of its class same way we do here --

<!-- --------------------------------------------------------------------------------- -->
usually we can do our work without this methods/functions but if ask in interview then u can answer it 

const people = await User.create(req.body);
this User.create() -- it create a document/object 
this this object put in this people 
now this people is also an object

here people is the OBJECT


now we have this line where we create our token --
const token = jwt.sign({_id : people._id , email : people.email});
we can put this line into this method --

Twitterschema.methods.getJWT = function(){
jwt.sign({_id : this._id , email : this.email});
}

now here we write -- 
const token = people.getJWT();

why we use people.getJWT() ;
because people is object which is calling it function same like upper class and object ones

-- 
but here in this there is no people declare so we have to use this keyword and normal function instead of arrow function --

Twitterschema.methods.getJWT = function(){
jwt.sign({_id : this._id , email : this.email});
}

explain is -- 
const token = people.getJWT();
here the object call this .getJWT()

so what happen all properties of people go into jwt
then 

Twitterschema.methods.getJWT = function(){
jwt.sign({_id : this._id , email : this.email});
}
we have to use just this keyword
here this keyword is pointing to people object 

like we prev done this
whatever object calling u this point towards that object
but it should in normal function like this --

 getJWT : function(){
    console.log(this);
 }
 here this pointing to who is calling the jwt that is people

 same here with this 
 Twitterschema.methods.getJWT = function(){
jwt.sign({_id : this._id , email : this.email});
}
here this pointing to who is calling the jwt that is people

 and from this line we know who is calling that is people object
const token = people.getJWT();

also make sure that u are using normal function if u use arrow function then it pointing towards
diff object
 Twitterschema.methods.getJWT = ()=>{
jwt.sign({_id : this._id , email : this.email});
}

like in this -- 
if u use arrow then we know this takes from object from lexical scope that is getJWT
and it want who is calling the people object
so make sure u use people object 

now next =
 Twitterschema.methods.getJWT = function(){
 const ans = jwt.sign({_id : this._id , email : this.email});
 return ans ;
}

now this ans return goes in this token -- 
const token = people.getJWT();

so benefit is -- 
u have to write -- 
const token = people.getJWT();

just from this line u can create token 
and the benefit is if u want to create another token then u just have to use this function 

now in LOGIN request we can do it too -- 
like 

app.post("/login" , aysnc (req , res)=>{


    const people = await User.find({email : req.body.email});

    const isAllowed = await bcrypt.compare(req.body.password , people.password);

})

now if we make function for this verfication of password like-- 

UserSchema.methods.verifyPassword = async function(userPassword){
   const ans2 = await bcrypt.compare(userPassword , people.password);
   return ans2;
}

now we can write --

app.post("/login" , aysnc (req , res)=>{


    const people = await User.find({email : req.body.email});

    const isAllowed = people.verifypassword(req.body.password);

})

but here while calling we have to pass parameter like --
people.verifypassword(req.body.password) because there we can write this instead of people but what to write instead of req.body.password so we have to pass this as parameter --

but here in function that we have to write --

UserSchema.methods.verifyPassword = async function(userPassword){
   const ans2 = await bcrypt.compare(userPassword, this.password);
   return ans2;
}

<!-- ========================================================================================= -->
suppose here we already find the result in this auth 
like this -- 

const result = await User.findById.(_id);

here we have to add -
req.result = result ;      -- now we can write this in server.js


then here in server.js 

if we write 
console.log(result);

that will not work -- 
so what we have to do is now this req it act like object have result as well so to get it we write --
console.log(req.result); -- now it will work 


<!-- ====================================================================================================================================== -->
BEFORE AND AFTER CODE --

app.post('/register' , async (req , res)=>{
    
    try{
        //validate the data first 
    valid(req.body);
    
    req.body.password = await bcrypt.hash(req.body.password , 10);
    await User.create(req.body);
    
    res.status(201).send("Registered Successfully");
    }catch(err){
        console.log(err.message + "error");
    }
})

app.post('/login' , async (req , res)=>{
    try{
        const people = await User.findOne({email : req.body.email});
        
        if(!req.body.email === people.email){
            throw new Error("Invalid Email");
        }
        
        const verifypass = bcrypt.compare(req.body.password , people.password);
        
        if(!req.body.password === people.password){
            throw new Error("Invalid password");
        }
        
        const token = jwt.sign({id : people._id , email : people.email}, "secretkey121");
        res.cookie("token" , token);
        
        res.status(201).send("LOGIN SUCCESSFULLY");
    }catch(err){
        console.log("Error" + err.message);
    }
})

app.get('/info' , async (req , res)=>{

    //token verify
    const payload = jwt.verify(req.cookies.token , "secretkey121");

    try{
       const result =  await User.findById(payload.id);
        res.status(200).send(result);
    }catch(err){
        console.log("Error" , err.message);
    }
})


=====================================================================AFTER===============================================================


<!-- ===================================================================================================================================== -->

NOTE -- THIS IS UR CHOICE THAT U WANT TO USE METHODS OR NOT
u can use this methods or not 
it depends upon u
it make code clean

-- NOw move to the next thing --
is it right to store our all files and data into github or Production level 
the answer is no 

because it contains -- 
1. connection string that connect us to the database
2. keys that we use in order to verify tokens/jwt/access token 

so we can't keep it live in the codebase so what we have to do is -- 
we have to make a .env file 
and put ur database connection string there like
DB_CONNECT_KEY = "connection string";
SECRET_KEY = "rahul@212"
PORT = 3000

like this and in codebase u have to write 
process.env.DB_CONNECT_KEY
process.env.SECRET_KEY

in key also we do digital signature 
because if someone keep this key it will be very dangerous 
we see in digital sign first convert into hashcode then by secret key it encrypt
so we have to keep it secret

ALL THE SENSITIVE INFO WE PUT INTO .ENV

u can also put ur PORT number in the .env file -- 

Make sure u can't put .env file in Github 
because it contains sensitive info and CREDENTIALS

when we work in real company -- we can't put direct code into Production 
first we have to do the testing part 

also in this .env 
file we use different string , different secret key for testing purpose 
means just by changing this single file content we can do testing 

SO THAT WE CAN CHECK THIS CODE WILL WORK AT DIFF ENVIRONMENT OR NOT
BEFORE PUTTING IT INTO THE PRODUCTION CODE 

eg -- like u have a production code -- that is live 
now u want to add a feature

so u check that code with diff env variable first 
and do testing first 
before putting into the production 

now what is this process.env 
it is a global object 

but how this connect to all stirng , keys ,port
like how this global object connect take access of this string , keys 
so how this is working it because of .env
so we have to install this --

npm i dotenv --save
and in index.js file we have to add
require('dotenv').config

so this npm what did 
it attach .env file content with globalObject that is process.env
when we console it it print all key , string all
<!-- =========================================================================================================== -->

Now move the EXPRESS ROUTER == 

we know if we make a production level backend
then it have minimum 40 to 50 api 
if we make all these in just one index.js file 
then code become messy

LETS TAKE AN EXAMPLE --

Insta api --



-- Register , Login , Logout 
-- User Feed , User Edit , User Delete
-- Comment , Comment Delete , Comment Edit 
-- Story Upload , Story Delete , Story Edit

-- here we can add multiple api acc to task 
  but what we do is Grouping like --

we put this in Authentication folder
we put this in User folder
we put this in Comment Folder
we put this in Story Folder
so that in main file code not become messy -- 

so here we need ROUTING so how we do it -- 
now how we do in real codebase it --

first make a folder routes

so we take similar api like -- 
register , login 
then make AuthRouter.js  , we can set name acc to us
and put these 2 api there 
also import classes ,library what used in those api  
then EXPORT those api 
and import in main.js file 

<!-- ---------------------------------------------------------------------------- -->
now in Router code how to write --
just some changes 

const RouterName = express.Router();

u can put any name at RouterName like -- AuthRouter

now u have to put api here like
app.post("/register" , async (req , res)=>{
})

instead of this app we have to write RouterName like 
AuthRouter.post("/register" , async (req , res)=>{
})

at last module.exports = AuthRouter ;

import in main.js file like this--
app.use("/" , AuthRouter);
app.use("/" , UserRouter);


now user come with if 
/info then it first check in AuthRouter then UserRouter
means by default it check all routes -- 
can we optimize it like -- 


we can change initalpath --
app.use("/auth" , AuthRouter);
app.use("/user" , UserRouter);

when check api if they have common intial path then we put it here 
also we can add path acc to us too if no path matching like this /auth 
like in api we have /login /register then what we do is -- we add /auth
so if req is comming /auth/register then it can find it easily 

so that we have less and less time On Routing to ful fill our request 

also here in main file we use app.use because 
app.use can take any request as we know 
whenever any request is coming first go through from here 

why we need express router because without it also our code is working 
but it becomes too messy and very low Code Readibility 
so that's why we use express router for optmization -- 
also because of routing there is no delay okk 












