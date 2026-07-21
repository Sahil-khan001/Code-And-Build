Lets talk about Moongoose -- 
basically it provide feature + optimization -- 

same like we can make server using node js too 
but we use express js for more feature and optimize code 

same in this way we prefer Moongoose over MongoDb --

suppose from frontend data is comming in huge quantity an what happen u put those data into db 
without validation and filteration then what happend 

ur database is full now u have to upgrade it -- 

what happen with leo is - he made a SAAS with vibe coding 
and at time of registration he missed checks on name and its length 
people put sooo much content into it and without check it goes into backend 

so we have to filter , validate before sending the data into database -- 

so here comes MOONGOOSE ==

mongo db is schema less -- we can provide it too or not it our choice 
what is SCHEMA -- 
which type fields we want to set in the document in an Collections

suppose if we not defined the schema then what happen --
anyone can send anything make new key value pair and send it 

so we have to define it by ourself in our db what are the keys present 

lets take an example of insta pge --

we have fields like -- 

{
  photo 
  comment 
  like 
  share
}

we have to design its schemas other anyone add new key value pair like dislike , code anything
also we have to put checks on it like photo limit , comment limit , like limit all 

so that anyone not write anyhing and break the checks

SO in all these things MOONGOOSE helps us --

we can do all these using Mongo Db too but we have to write too much code there 
so that's why we use MOONGOOSE

so the archi be like --

express.js ----------- mongoose ----------- mongodb ----------------- database

mongoose is top of the mongodb
first express.js  interact with mongoose it interact with mongodb and finally it take/put data from database

so MONGOOSE create a high level abstraction for us 

it same like we are playing with js object
means it gives us something like this also we modify the js object and it reflect in main db too 

so mongoose is -- elegant mongodb with object modeling for node.js
moongoose is a ODM(object Data Modelling) library for mongoDB

data modelling with mongoose is very flexible -- 

now -- 
in js ----------- html
we seen that in dom we treate this html is dom 
because we know if we treat this as object we can do anything with Object as JS

in same way Mongoose say to node.js/express.js treat me like JS OBJECT 


node.js/express.js ================== JS Object(mongoose) =================database

now we can easily manipulate the moongoose and it code convert into mongodb and it interact with real database 

same like we doing with html , js using dom in this way whatever we do on mongoose it reflect on real database too 

now lets install mongoose from npm -- 
npm install i mongoose


-- now move to code --
we see how we connect to our Cluster/database 

// getting-started.js
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    
}
main()
.then(()=> console.log("Mongoose is connecting with mongodb"))
.catch(err => console.log(err));

throught this code we understand how mongoose connect with cluster/database/server
after this  we see how to make schema using Mongoose 
code be like --
import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

it is a Blog Schema -- 
now beyone this scheme user cannot write anything 
no key value pair , no number in place of string , no other thing 

only these field appear nothing other than that

STEPS are -- 
1. first mongoose connect with the mongodb/database/server/cluster 

2. Then Create schema for it 

3. create database -- cluster already created after cluster just write database name /database_name or , {db : "database_name"}

3. We have to create the model === collections(table creation);
create model means we have to create collections same like table in sql

before this we have to make the cluster too 
 await mongoose.connect('mongodb://127.0.0.1:27017/test'); --this is CLUSTER that is making
 
 after cluster we have to make the database then the collections 
  
  like in compass we first created the cluster then database then collections then document then field

  same in this way so for database 
  so for database we have to write the database name at last to the url 
  like this 
  const uri = "mongodb+srv://communication981171_db_user:mongodb@cluster01.lfcg0o2.mongodb.net/Bookstore";

  so it create Bookstore db

   now move to create model means Collection 
   so for Collections is -- 

   const user = mongoose.model("user" , userSchema) --
  
  "user" is collection name u have to write 
  what type of schema u want in this collection as we already defined earlier userSchema
  so we put userSchema here

   const user = mongoose.model("user" , userSchema)
   we call this line -- model creation , collection creation , 
   we can also say -- class creation

   if it is class then we can make object/instance of it as well --

   object belike -- 

   const user1 = new user({name : "sahil" , age : 23 , city : "delhi"})
   means we have to write acc to our schema 
   now we see we can easily write in js 

   it is same like class and object -- class is like blueprint , here class is collecton with shema/blueprint 
   the real data is in the object -- in js format

   no we created this object means our new user1 as Document 
   now we have to save it in our database code be like -- 
   const user1 = new user({name : "sahil" , age : 23 , city : "delhi"})
    await user1.save();

    we have to write await here because it takes time to save data in db 

    -- now we see easily that we can insert data in form of JS object in database 
    we just have to write in js object it can insert into Database by itself 

 const user1 = new user({name : "sahil" , age : 23 , city : "delhi"})
 await user1.save();

 this line says  -- Object Created , Document Created 

 now we can write in diff way too  like 
 1.const user1 = new user({name : "sahil" , age : 23 , city : "delhi"})
 await user1.save();
 2. await user.create({name : "sahil" , age : 23 , city : "delhi"});
 3. await user.insertMany([{name : "sahil" , age : 23} , {name : "hitesh" , age : "34"}])

 this code create documnent with following data and save it too
 so total we have 3 ways to write this

 note : one thing u have notice -- 
  const User = mongoose.model("BookStore", bookSchema);
here we make the collection name -- BookStore 
but in real databases it show -- bookstores
why s at last + lower letter 
so it is done by Mongo DB -- lower + s  -- no worry about it 


    const bookSchema = new Schema({
        username: { type: String, required: true },
        age: { type: Number, required: true },
        bookName: { type: String, required: true },
        id: { type: Number, required: true },  // ← Changed to Number
    });

    if u put required true in schema then u have to send this detail compulsory

now move to ---
in real database the data show like this -- 

_id
6a5b70f21fd5380f7b67330d
username
"sahil"
age
23
bookName
"DeathNote"
id
1
__v
0

here we see --v this is version --means how many times this document modify 

now till now we seen how to insert data --
now how to take out data -- 
for this code be like -- 

    const Documents = await User.find({});
    console.log(Documents);


-- now 
we can find document by particular field -- 
code be like-- 

    const Specific = await User.find({username : "sahil"} , {marks , { gt > 80}});
    console.log(Specific);

    with find u can use mongodb query operators too - lt , gt , lte , gte , ne 


-- now we see howto do this with api with server -- 
for this -- 
first u have to make a model folder and make model_name.js 
put all code of collection creation , schema creation all in model_name.js and export the model access

and ur database file -- only contain 
const mongoose = require('mongoose');

async function main() {
   await mongoose.connect("mongodb+srv://communication981171_db_user:mongodb@cluster01.lfcg0o2.mongodb.net/?appName=Cluster01/Store");
 

main()
    .then(() => { console.log("Mongoose is connecting with the database") })
    .catch((err) => { console.log(err) });

now u go ur server.js file 
now u add 
require('./database file');

now what happend 
when u run nodemon server.js 
then it show port no 3000 is listening 
then it show 
connected to DB

so its a wrong approach if any user is come and make request earlier then server can't fulfill it request because it still not connecting DB 
we have to write code in diff way --
final code be like -- 

so we have total 3 files
1. Database file -- in which mongoose connect with the database  --- Accessing the Database
2. Model Creation -- means the Collection ---  Accessing the Collection 

we have to import both these file like the db function , model access into server.js file -- 

3. Server file(server.js) -- now the normal code 

final code look like -- 
const express = require('express');
const main = require('./database');
const User = require('./Model/BookStore');


const app = express();
app.use(express.json());

app.get("/info" , async (req , res)=>{
    const info = await User.find({});
    res.send(info);
})

app.post("/info" , async (req, res)=>{
   try{
    await User.create(req.body);
    res.status(201).send("Successfully saved in Db");

}catch(err){
     res.status(500).send(err.message  + "error is there");
}
})

main()
.then(()=>{console.log("Connected with Db")
app.listen(5000 , (req , res)=>{
console.log("Server Listening at port 3000");
})
})
.catch((err)=>{console.log(err)});


-- make sure in each request u are using try and catch to error handling 

note -- in post request if user try to add some other key value -- it is not possible -- it depends on schema we made so no user can send anything in database
Now we have control over the database --
if we send -- it only store values acc to its schema other key value will kick out 
LATER -- we see when someone send data and also add other key value pair for THOSE users we create a RED FLAG
we do it later guys

Remember -- await User.DeleteOne -- this await means there is a network call goes in db
then it takes time to response of that network call so it takes time 

now move to -- 
we have covered get and post request
now move to delete and update -- 

for delete we have two things-- deleteOne() , deleteMany()

for update -- we have -- updateOne() , updateMany()

now code be like --

//delete using normally 
// app.delete("/info" , async (req , res)=>{
//     await User.deleteOne({age : 53});
//     res.status(200).send("deleted Successfully");
// })

//delete using query parameter
// app.delete("/info" , async (req , res)=>{

//     try{
//         await User.deleteOne(req.body);
//         res.status(200).send("deleted Successfully");
//     }catch(err){
//         console.log("error");
//     }
    
// })

//delete using query parameter 
// app.delete("/info", async (req, res) => {
//     try {
//         const result = await User.deleteOne(req.query.username);
        
//         if (result.deletedCount === 0) {
//             return res.status(404).send("No user found to delete");
//         }
        
//         res.status(200).send("Deleted Successfully");
//     } catch (error) {
//         res.status(500).send("Error: " + error.message);
//     }
// });

//single document will update based on filter
// app.put("/info" , async (req , res)=>{
//     await User.updateOne({username : "khan"} , {age : 21});
//     res.status(200).send("updated successfully");
// })

//all documents that have same filter will updatee
// app.put("/info" , async (req , res)=>{
//     await User.updateMany({username : "sharique"} , {age : 40});
//     res.status(200).send("updated successfully");
// })


