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
     res.status(500).send("error is there");
}
})

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



main()
.then(()=>{console.log("Connected with Db")
app.listen(5000 , (req , res)=>{
console.log("Server Listening at port 3000");
})
})
.catch((err)=>{console.log(err)});



