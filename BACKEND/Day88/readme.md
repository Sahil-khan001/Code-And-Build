so in this project lets do work on more request too --

patch -- patch update means small changes in a data like name , id like in an single object only one change is allowed 
put -- in one object u can change as any as u can

delete -- u can delete any specific object 
make use of findIndex , slice property properly -- 

code be like -- 
const express = require('express');

const app = express();
app.use(express.json());


const BookStore = [
    {id : 1 , name : "Rich dad poor dad" , author : "Alen"},
    {id : 2 , name : "friends" , author : "alex"},
    {id : 3 , name : "SSB by col rajveer" , author : "Rajveer"},
]

app.get("/book" , (req, res)=>{
    res.send(BookStore);
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


app.listen(1234 , (req, res)=>{
    console.log("Server is running at port 1234")
})

for delete it -- 
make sure for delete and get no use of body and other things u can use but it is advisable 


app.delete("/book/:id" , (req, res)=>{
       const id =  parseInt(req.params.id);

       const index = BookStore.findIndex(info => info.id === id);
       
          BookStore.splice(index,1);
          res.send("Successfully Deleted");
})

Yes. splice() is the most common way to delete an object from an array, but there are other methods. First, let's understand splice() because it is very important.

How splice() works
BookStore.splice(index, 1);

Syntax:

array.splice(startIndex, deleteCount);
startIndex → where to start deleting.
deleteCount → how many elements to delete.
Example
let arr = ["A", "B", "C", "D"];

arr.splice(1, 1);

console.log(arr);

Output:
["A", "C", "D"]


<!-- ------------------------------------------------------------------------------- -->

yesterday we see 
when we send data from client to server --
client                                                                      Server 
JSON format                                                        JSON format --- to JS object with the help of express.json()
 
 also if the number is in string then we need to parse it but this express.json do it automatically 

but when we pass through api in post
using https://localhost:4000/5
this 5 still is in string 
later we need to convert it into Number using ParseInt means in ROUTING 
we have to use ParseInt  -- remember it 


<!-- ---------------------------------------------------------------------------------------------- -->
Now suppose u want to use filter in this POST api then 
like u want books of author alen only so how can u do it 

in PostMan if u see with get u can't use body it is nott good way 
but u can use Params like 
u have to write key value pairs

like u want key as author  vaulue as alen  then in api  it show be like 

https://localhost:5000/book?author=alen

and if u provide name too or other key value then it add it using & in same api like
https://localhost:5000/book?author=alen&name=rohan
in this way 
we see this also in form too in html like key value pair 

and make sure it is not an routing 
all this is QUERY PARAMETER


?author=alen&name=rohan -- this extra information is used for filteration 
as we see this in our Weather Api project , Crypto coin PRoject we used this in as well

-- Code be like -- 


//in this get we are using query parameter for filteration 
app.get("/book" , (req, res)=>{
        //    console.log(req.query); //it return author : alen
    const book = BookStore.filter(info => info.author === req.query.author);
    // const book = BookStore.filter(info => info.name  === req.query.name);  // u can do with name also 

    res.send(book);
})


in Swiggy project also we use this work on this type of api 
to filter the data 









