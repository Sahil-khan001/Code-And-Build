const express = require('express');

const app = express();
app.use(express.json());


const BookStore = [
    {id : 1 , name : "Rich dad poor dad" , author : "Alen"},
    {id : 2 , name : "friends" , author : "alex"},
    {id : 3 , name : "SSB by col rajveer" , author : "Rajveer"},
    {id : 4 , name : "move on" , author : "alex"},
]

// app.get("/book" , (req, res)=>{
//     res.send(BookStore);
// })


//in this get we are using query parameter for filteration 
app.get("/book" , (req, res)=>{
        //    console.log(req.query); //it return author : alen
    const book = BookStore.filter(info => info.author === req.query.author);
    // const book = BookStore.filter(info => info.name  === req.query.name);  // u can do with name also 

    res.send(book);
})


app.get("/book/:id" , (req , res)=>{
    const id = parseInt(req.params.id);
    const BOOK = BookStore.find(info => info.id ===  id);
    res.send(BOOK);
})

app.post("/book" , (req, res)=>{
  BookStore.push(req.body);
  res.send("ur assurance is here");
})

app.patch("/book" , (req , res)=>{

    const book = BookStore.find(info => info.id === req.body.id);

    if(req.body.name)
    book.name = req.body.name;

    res.send("ur small change is update");
})


app.put("/book" , (req , res)=>{
    
  const book = BookStore.find(info => info.id === req.body.id);

  if(req.body.name)
    book.name = req.body.name ;

  if(req.body.author)
    book.author = req.body.author;

   res.send("ur all changes are succesfully changed");
})

app.delete("/book/:id" , (req, res)=>{
       const id =  parseInt(req.params.id);

       const index = BookStore.findIndex(info => info.id === id);

       const book = BookStore.find(info => info.id  === id);
       
          BookStore.splice(index,1);
          
          res.send("Successfully Deleted");
})


app.listen(1234 , (req, res)=>{
    console.log("Server is running at port 1234")
})