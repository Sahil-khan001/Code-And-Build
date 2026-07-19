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

we can validate data based on API's level --
api level validation 

-- like before this line can we validate the data --

// app.post("/info" , async (req , res)=>{
//     await User.create(req.body);
//     res.send("stored successfully");
// })


await User.create(req.body);
before creating the data in backend can we validate the date 
means whatever data we are going to send first validate then create/store

for this --