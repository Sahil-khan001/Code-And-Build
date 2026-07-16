const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://communication981171_db_user:mongodb@cluster01.lfcg0o2.mongodb.net/";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected Successfully!");

    const db = client.db("Schools");
    const collection = db.collection("Classes");

    //u can perform crud operation here
    //to get data from database 
    // const Result = await collection.find({}).toArray();
    // console.log("Result are : " , Result);

    //to insert the data
    //  const store = await collection.insertMany([{name : "sahil" , aim : "ai developer"} , {name : "hitesh" , age : 23 }]);
    //  console.log("Data sending into db : " , store);

     //we can filter the data
     const filt = await collection.find({age : 23}).toArray();
     console.log(filt);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();