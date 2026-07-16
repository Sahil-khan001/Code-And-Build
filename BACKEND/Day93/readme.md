lets start with the MONGO DB --
the data present in mongo db -- 
it is in form of bson --  not json , not js objects
b json -- binary json 
means u can put binary data into it too 
u can't put binary in json -- it take object , string , number 

like in B JSON -- u can add Dates , binary data into it -- 
u can add data into it

we store data into database so that we know at which time we created this data
at what time we updated the data -- 
it includes some other functionality too -- 
<!-- 
   ---------------------------------------------------------------------------------------------------- -->

   now move to MONGO DB --

   it is an application layer to manage the databases 

   two steps to install --
   1. install mongodb drivers on system and make some portion of our secondary memory to database 

   2. to make database on the server 
     mongo db provides us server which have storage that act as database and we can put our data into it 
     in future if user increases then mongo db handle it we just have to purchase their plan and we can scale the database 


     IN THIS COURSE WE ARE USING THE 2ND APPROACH -- 
-- go to mongodb.com 
-- sign up and choose free plan and make a cluster 

now what is cluster -- why not server 
diff b/w cluster and server 

u have to write a cluster name -- 
then select server provider with free plan

actually mongo db dont have their own server it take free plan from aws , google cloud , azure u can choose anyone 

mongo db is just a application layer -- which manage db -- server(ram , storage) provided by aws/azure

diff b/w cluster and server 

cluster -- combination of 2 or more server is called Cluster 
we see prev we make replica of mongodb data
so that whenever we update on master server it automatic update on other servers too

so mongo db purchase all these server for u and whatever u update on main it appears on others too 
so that is why it called cluser -- combo of servers(replicas)
WhenEver u put data on db then it automatically create replica of these db means others server and put data onto it ...

in free plan -- u get REPLICA service 
but not SHARDING means horizontally scalling 
sharding means -- if one server storage is full with data , create a new server and put data into it

in free plan we got 512mb -- include all 3 replicas

now move ahead to process to install mongodb 
sign in compass name all 

mongodb+srv://communication981171_db_user:<db_password>@cluster01.lfcg0o2.mongodb.net/
thsi is connection string 
u have to make a file database.js and put it into it 

now whatever cluster u make how to connect with this cluster 
so for this we have this string 

and u have to download the mongodb compass -- so it is an UI 
where u can see ur data 

now open compass and put ur connection string into new connection 
so that ur mongo db is connecting with ur cluster 


mongodb compass(it helps to show database on self ui that are on cluster) --------- CLUSTER 

in compass we have to make a new connection then create a database with name 




we have 

mongodb compass(locally install on pc) --------------------cluster(on server)
now this compass make db on these cluster 
and it helps to show db on this compass as an User Interface


now we have to connect compass with cluster than make a db --
we have to make a db with name then collection name then we can insert data into it as well
for that what we have to do is --

the data show in bjson format --

with a key with the name as Object 
{
   id : Object_id
}

like this -- act as key/primary key to initialize data 
now we have 
Cluster --> DatabaseName --> Collections --> Document --> field 

now whatever data coming from frontend so we have to store in db too for this whatwe do is -- 
this is normal interface-- 


frontend                            backend ------            mongodb

when we have request from frotend to get and submit data -- request come in backend -- backend do this work to submit data on mongodb or take data from mongodb  and then give it too frontend to fulfill its request 

so for this we have to download drivers into system --
for this we have to install it from npm -- go to npm docs and take command from there
npm i mongodb

now we have to take code from npm mongodb from docs
and we have to put it in database.js

<!-- ================================================================================================================== -->

code be like - 
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://communication981171_db_user:<db_password>@cluster01.lfcg0o2.mongodb.net/";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected Successfully!");

    const db = client.db("sample_mflix");
    const collection = db.collection("movies");

    //u can perform crud operation here 

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();

explanation be like -- 
Here's the code with a short interview-style explanation for each line.

const { MongoClient } = require("mongodb");

➡️ Imports the MongoClient class from the MongoDB package.

const uri = "YOUR_MONGODB_CONNECTION_STRING";

➡️ Stores your MongoDB Atlas connection URL.

const client = new MongoClient(uri);

➡️ Creates a MongoDB client object using the connection string.

async function run() {

➡️ Creates an asynchronous function so we can use await.

try {

➡️ Starts a block to handle code that might throw an error.

await client.connect();

➡️ Connects your application to the MongoDB database.

console.log("Connected Successfully!");

➡️ Prints a success message after connecting.

const db = client.db("sample_mflix");

➡️ Selects the sample_mflix database.

const collection = db.collection("movies");

➡️ Selects the movies collection from that database.

const movie = await collection.findOne({
  title: "Back to the Future",
});

➡️ Finds the first document where title is "Back to the Future".

console.log(movie);

➡️ Prints the fetched document.

} catch (err) {

➡️ Catches any errors that occur inside the try block.

console.error(err);

➡️ Prints the error to the console.

} finally {

➡️ Runs whether an error occurs or not.

await client.close();

➡️ Closes the MongoDB connection.

}

➡️ Ends the run() function.

run();

➡️ Calls the function and starts the execution.

Flow to remember (very important)
Import MongoDB
      ↓
Create URI
      ↓
Create Client
      ↓
Connect to DB
      ↓
Select Database
      ↓
Select Collection
      ↓
Perform CRUD Operation
      ↓
Print Result
      ↓
Close Connection

<!-- ======================================================================================================================= -->

--- NOW --
we know whenever backend connects with database/cluster and want to get data from db
then it have to use await -- means to wait data is comming 

when we write this line -- 
await client.connect() -- we use await here to connect backend with database 
and we have to wait for connection 

-- but in this line 
 const db = client.db("sample_mflix");
    const collection = db.collection("movies");

in Reality they dont check there is no network call if there is network call and one system is talking to another system and it check then there should be await THAT WE HAVE TO USE 

<!-- ========================================================================================================= -->

now we have to run this 
we write node database.js
it give us error -- it give error because of @ that we used in url of connection 
the url is -- 

"mongodb+srv://communication981171_db_user:sahil@9811@cluster01.lfcg0o2.mongodb.net/"

so in this we see
: before this we have db user name
: after this we have password 

when mongodb read this url it check for @ because after this the real cluster is there
like in this we have 
@cluster01.lfcg0o2.mongodb.net/"

but what happened here we used @ in our password too as u see because of it it give error
so instead of @ we write -- %40  basically @ convert into hexadecimal ascill value 
now mongo read this connection url it see only one @ and after this the real cluster 
now it run without any error 

now -- 
can we do crud operation -
to get data from database

   //u can perform crud operation here 
    const Result = await collection.find({}).toArray();
    console.log("Result are : " , Result);


    it print all the data 

now we discuss these 2 lines --
    
    const db = client.db("Schools");
    const collection = db.collection("Classes");

    these lines check database and collection exists now when we do CRUD operation okk

    now if database and collection dont exist then it throw error or make database and collection by own

So answer is : it create by their own 


<!-- ------------------------------------------------------------------------------------------------- -->
   
   now this line -- 
    const Result = await collection.find({}).toArray();
    console.log("Result are : " , Result);

-- if we remove .toArray() then 
it give very long answer 
and if we remove await -- it give same long answer
but why--
also it treat this collection.find as CURSOR 
means this collection.find() is not calling to db but this .toArray()
but why -- 

also when we use await .toArray() it give object 

the real network call is done by -- .toArray();
he goes in db take all the data and wrap up into an Array 
then give it to ur system 

this .toArray() is very dangerous it wrap all the data into an Array 
suppose in db u have 5gb data it wrap all this data into an array and give it to u and all processes is running so it gone into ram like 5gb and suppose u have 8 gb ram ur system will crash 

collection.find() -- is CURSOR -- what is cursor -- 
suppose we have to do sum of all the balance of data present in the database 
if we do without cursor then it take all the balance at once 
that is dangerous  it wrap up all balance at once and then give instead of it we use cursor 

cursor take one by one document from there and give it to system then remove it then again 
come next document one by one which is best approach 

code be like --

const document = collection.find({});

for await(let obj of document){
console.log(obj);
}

now one by one document come first remove then next 

now ------------------

    //to insert the data
     const store = await collection.insertOne({name : "sahil" , aim : "ai developer"});
     console.log("Data sending into db : " , store);

now there is a network call and we say insert this document into my collection  
and there is promise that if someone data is not stored give him a message 

//we can insert many data as once too








