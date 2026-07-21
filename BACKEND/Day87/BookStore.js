const express = require('express');

const app= express();
app.use(express.json());

const BookStore = [
    {id : 1 , name : "Rich dad poor dad"},
    {id : 2 , name : "friends"},
    {id : 3 , name : "SSB by col rajveer"},
]


app.get("/book" , (req,res)=>{
    res.send(BookStore);
})


app.get("/book/:id" , (req,res)=>{
     const book = BookStore.find(info => info.id === parseInt(req.params.id));
     res.send(book);
})

app.post("/book" , (req , res)=>{
    BookStore.push(req.body);
    res.send("hey ur data is received and push to BookStore");
})


app.listen(9000 , (req , res)=>{
    console.log("Server is listening at PORT 9000");
})