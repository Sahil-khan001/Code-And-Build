Data Sanitization and Schema Validation -

we have seen example of leo -- he build a saas using vibe coding then it crash 
because of 
NO Data Sanitization and Schema Validation --

what is this --
Basically we are doing Schema Optimization -- 

lets make a new db  -- instagram
new schema 
new server and make sure 
in every request u are using -- 

try{

}catch(err){
    console.log("error : " + err.message);
}

this is for error handling -- 

now move to schema validation and data sanitization --

const instaSchema = new Schema({
    firstName : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 20,
    },
    lastName : {
           type : String,
    },
    age : {
         type : Number,
         min : 18,
         max : 70,
    },
    gender :{
     type : String,
     enum : ["male", "female" , "others"];
        or 
     validate(values){
        if(!["male" , "female" , "other"].include(values)){
            throw new Error("Invalid Gender");
        }
     }
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true 
    },
    photo : {
        type : String,
        default : default photo link 
    }
})

-- we can add 
while registering on Instagram we want some validation --

we want validation in age field --
min : 18 ;
max : 70;

we want : 
this particulary field must be filled so we use --
required : true;

we want email field must be unique --
unique;

we want the username length must be in limit-
length be from 10 to 50
so that user cannot send anything in length
minLength : 3 ,
maxLength : 20 

this 3 and 20 is character okk
if user send more than 20 character db will not accept it 

default --
it means when user dont upload a photo
instead of this we set a default photo 
we provide link -- anonymous photo link 

default : 

photo : {
    type : String ,
    default : This is the default Photo/anonymous photo
}

--validate -- schema type
it consist validator function 

suppose user came he have to write his gender -
gender : {
    type : String ,
    enum : ["male" , "female" , "others"];
}

user can put anything in string 
we have to set enum -- it contains value in an array
now user have to use these values only otherwise he will not register 

Sometimes user can send data with so much space 
so we have to remove that space for this we use --
like email -- "  sahilkhan@gmailcom"  -- it store same like in db so for this we have 

trim : true;
it remove all the unused space 

for lowercase character we use --
lowercase : true;

basically we are validating the data means --
whatever data coming from frontend we first check it do validation then put the data 

so the validating functionis --
instead of enum we write function like -- 

gender : {
    type : String ,
    <!-- enum : ["male" , "female" , "others"]; -->
    validate(value){
        if(!["male" , "female" , "others"].includes(value)){
            throw new Error("Invalid Gender");
        }
    }
}
instead of enum we can write this too 

now if we write - smale it throw error -- Invalid Gender
--
but what happened when u update using the id and id u send gender : smale
then it save smale in db means validator not work so for this u have to pass a parameter that is 

{"runValidators" : true};

full code of update like--

const {_id , ...update} = req.body;
await User.findByIdAndUpdate(_id , update , {"runValidators" : true});
res.status(200).send("Updated Successfully");

or 
await User.find({id : parseInt(req.params.id)} , {gender : "male"} , {"runValidator":true});


<!-- -------------------- -->
now next is -- TimesStamp --
when user registered at instagram
when was the last time he updated the account 

for this we have to write small code at last like -


const instaSchema = new Schema({
    firstName : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 20,
    },
    lastName : {
           type : String,
    },
    age : {
         type : Number,
         min : 18,
         max : 70,
    },
    gender :{
     type : String,
     enum : ["male", "female" , "others"];
     validate(values){
        if(!["male" , "female" , "other"].include(values)){
            throw new Error("Invalid Gender");
        }
     }
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true ,
        immutable : true
    },
    photo : {
        type : String,
        default : default photo link 
    }
} , {timestamps: true});


now when u register anyone --
in db it show -- created at  --------- , updated at ----------------

next is immutable -- which we dont change 
if we write 
email : {
   immutable : true;
}
now if we try to update all document  - instead of email it will update everything

but update have to give us a error but it can't because of immutable 

note -- here we are validating the data based on Schema

<!-- ----------------------------------------------------------------------------------------- -->
NOW -- 

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

<!-- ========================================================================================================================= -->


Now we talk about -- why we not store plain password in database 
why we use hashing --

instead of plain text -- we use hashing why

suppose a company db is leak
now user can login into ur insta account -- now u thinking then what happened 
there is a human psychology -- most human use same passwork across multiple sites , gmail or etc

then ur other account too hacked and it create problems --

then what we do is --
we use encryption decryption


we send sahil@123 it goes into backend with the help of key it encrypted turn too -- mohan321@
same way we can decrypt it also mohan321@ to sahil@123

if hacker get this mohan321@ he put username and this password then server convert into encryption
so he is not able to access 

same key used for encryption and decryption -- it is called symmetric crytography
but suppose he got access of key also then 

he will be able to get access o account so we have to do something -- 
for this what we do is-- we have to find a way so that we can't convert back to Decrypt --
we can do Encrypt part but not the Decrypt part in anyhow 

so we have to DESIGN an algo not to do Decrypt -- 
so  we have Hashing algorithm --
like sha , sha2 , sha3

in sha256 -- when we write password - sahil@123 it convert into hash code 
and it is next to impossible to understand the pattern how it is converting 
so it is not possible to understand the pattern and reverse back 
this is hashing only one way that is Encryption 

but he really want to do it then he use BRUTE FORCE APPROACH--
he check one by one character a , ab , abc , abcd and compare with hash code 
but it takes eternity

that's why u must have long password -- A-Z , a-z , 0to9 , special character as well
sha256 -- 256 bit

means whatever ur password length it is converted into 256bit 
so it is hard for hacker to understand even length --


but hacker find a solution for this also -- 
there is a rainbow table in which common password and hashcode are there
if ur password is common then hacker can get it easily

-- we can't expect from a user that he can filled strong password 
so we have to do something -- 
so we have salting -- 
means whatever the password we are storing server from own side attach some string into it 
and then its hashcode stored into it 
now rainbow table not able to help -- 

1. we have to use same salt with every password -- we can store this as a variable in server too
2. diff salf for diff password -- in this option we have to store the salt to in the Db 

1st approach is dangerous -- 
if we have mohit as salt for everyother password - some people use common password like -- 12345
SO ITs 12345Mohit -- suppose same password is of around 10k and if user crack 1 hashcode -- he will access 10k people details 


2nd apporach is ok-
suppose hacker crack someone password then he will get access of only 1person not others
also in this we have to store salt too

now u asking should we have to store this salt in encryption or what -- just store as normal no need to encrypttion -- why

so at the end -- in Database we have to store the Password as well as the Salt

now move to the Code Part -- 
first we have to install npm i bcrypt
then 

const bcrypt = require('bcrypt');

const password = sahil@321;

we have to convert this password into hashcode + add salt to it convert into hashcode 

const hashpass = bcrypt.hash(password , 10);

this libray create hashcode of it + salt into it
this is a very slow process so we have to wait so for this we have to use 
await then async too so code be like

async function Hashing(){

    const hashpass = await bcrypt.hash(password , 10);
    console.log(hashpass);
}

Hashing (); 

now when we run this it give us new hashcode everytime 
because for diff user there is diff salt 

this 10 refers to rounds 
the more the rounds value the more complex hashcode is 
the more rounds the more it gets slow -
generally we use 10-12 
if we do 31 then it takes 3 days means when user come put username , password it takes 3 days to give me acccess of his account that is wrong so we used 10 rounds 

we can also measure time using 
console.time();
console.timeEnd();

rounds means how much time the algorithm run and generate more complex hashcode

u can write separate code for salt and password 
it look like -- 

const salt = await bcrypt.genSalt(10);
const password = await bcrypt.hash(password , salt);

salt like -- $2b$10$N5ehmB3b5kW1D3Mdhp15J0
pass like -- $2b$10$N5ehmB3b5kW1D3Mdhp15J0r9WCkz9sqnsdjUtut8BgG5rFTz0yqc0

$2b$10$N5ehmB3b5kW1D3Mdhp15J0r9WCkz9sqnsdjUtut8BgG5rFTz0yqc0
at the end -- it will store in the database -- 
it consist -- salt , password , all details

How to read this --
$2b$10$N5ehmB3b5kW1D3Mdhpl5JO
$2b$10$N5ehmB3b5kW1D3Mdhpl5JOr9WCkz9sqnsdjUtut8BgG5rFTz0yqcO

Breakdown:

bcrypt version: $2b
Cost (rounds): 10
Salt (22 characters): N5ehmB3b5kW1D3Mdhpl5JO
Hash (31 characters): r9WCkz9sqnsdjUtut8BgG5rFTz0yqcO 

now we have code that tell us -
whether u login in or not 

code like -- 
const ans = await bcrypt.compare(password , hashcode);
console.log(ans);

it will tell u whether u can login or not 
if yes it give u 1 otherwise 0

behind --
this hashcode take out salt code 
then run this code await bcrypt.hash(password , salt);
then compare -- this code or hashcode if it is same then give 1 or 0


at the end -- mostly the code u write for encrypted and decrypted is 

async function Hashing(){
const hashcode = await bcrypt.hash(password , 10); ----------automatically convert password into hashcode and add salt hashcode to it + rounds and version detail --- ENCRYPTION 

const ans = await bcrypt.compare("sahil@212" , hashcode);  -------- DECRYPTION 
console.log(ans);
}
Hashing();



