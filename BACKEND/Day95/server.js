const express = require('express');
const main = require("./database");
const  User = require("./Model/Student");

const app = express();
app.use(express.json());

// app.get("/info" , async (req , res)=>{
//     const info =  await User.find({});
//     res.status(200).send(info);
// })

// app.post("/info" , async (req , res)=>{
//     await User.insertMany(req.body);
//     res.status(201).send("Data saved successfully in db");
// })

// app.delete("/info" , async (req , res)=>{
   
//     await User.deleteMany({});
//     res.send("deleted");
// })


// app.post("/info" , async (req , res)=>{
// //     // await User.create(req.body);
// //     // res.status(201).send("single student data is submitted");
//     await User.insertMany(req.body);
//     res.status(201).send("all data is stored in db");
// })

// app.get("/info" , async (req , res)=>{
//      const data =  await User.find({});
//       res.status(200).send(data);
// })

// app.get("/info" , async (req , res)=>{
//      const data =  await User.find({marks : {$gt : 90}});
//       res.status(200).send(data);
// })

// app.get("/info/:id" , async (req , res)=>{
//      const data =  await User.findById(parseInt(req.params.id));
//       res.status(200).send(data);
// })


// app.put("/update" , async (req , res)=>{
//     await User.updateMany({age : 21} , {id : 3});
//     res.status(200).send("updated");
// })

// app.patch("/info" , async (req , res)=>{
//     await User.updateOne({name : "Rahul"} ,{$set : {city : "Delhi"}});
//     res.status(200).send("city is updated");
// })

// app.patch("/info" , async (req , res)=>{
//     await User.updateOne({name : "Rahul"} , {$inc : {marks : 5}});
//         res.status(200).send("marks is inc by 5");

// })

// app.patch("/info" , async (req , res)=>{
//     await User.updateOne({name : "Rahul"} , {$push : {skills : "Mongoose"}});
//         res.status(200).send("skill added");

// })

// app.patch("/info" , async (req , res)=>{
//     await User.updateOne({name : "Rahul"} , {$pull : {skills : "C++"}});
//         res.status(200).send("C++ removed");

// })

// app.patch("/info" , async (req , res)=>{
//     await User.updateOne({name : "Rahul"} , {$addtoSet : {skills : "Mongoose"}});
//         res.status(200).send("mongoose set");

// })

// app.patch("/info" , async (req , res)=>{
//     await User.updateOne({name : "Rahul"} , {$unset : {city : ""}});
//         res.status(200).send("city field removed");

// })

// app.delete("/info" , async (req , res)=>{
//     await User.deleteOne({age : 19});
//     res.send("deleted");
// })


// app.get("/info" , async (req , res)=>{
//   const result =   await User.find({marks : { $gt : 80}});
//     res.send(result);
// })

// app.get("/info" , async (req , res)=>{
//   const result =   await User.find({age : { $gt : 23 , $lt : 25}});
//     res.send(result);
// })

// app.get("/info" , async (req , res)=>{
//   const result =   await User.find({city : { $in : ["Delhi" , "Mumbai"]}});
//     res.send(result);
// })

// app.get("/info" , async (req , res)=>{
//   const result =   await User.find().select("name  age");
//     res.send(result);
// })

// app.get("/info" , async (req , res)=>{
//   const result =   await User.find().sort({marks : -1}).limit(5);
//     res.send(result);
// })

// app.get("/info" , async (req , res)=>{
//   const result =   await User.find().countDocuments({active : true});
//     res.send(result);
// })

// app.get("/info" , async (req , res)=>{
//   const result =   await User.exists({age : 22});
//     res.send(result);
// })





// ❌ Mistakes
// 1. Checking if collection is empty
// if(await User.length === 0)

// ❌ Wrong.

// User is a model, not an array.

// 2. findById()
// User.findById(parseInt(req.params.id));

// ❌ Wrong if you're using MongoDB's default _id.

// Use:

// User.findById(req.params.id);

// Only use parseInt() if you created your own numeric id field and then use findOne({ id: Number(req.params.id) }).

// 3. updateMany()
// await User.updateMany({age : 21} , {id : 3});

// ⚠️ It works, but the recommended way is:

// { $set: { id: 3 } }
// 4. Typo
// $addtoSet

// ❌ Wrong.

// Correct:

// $addToSet

// Capital T and S.

// 5. countDocuments()
// User.find().countDocuments({active : true});

// ❌ Not recommended.

// Use:

// User.countDocuments({ active: true });













main()
.then(()=>{console.log("Connected with DB")
app.listen(8000 , (req , res)=>{
    console.log("server is listening at port 8000");
})
})
.catch((err)=>{
console.log(err);
})
