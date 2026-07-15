-- MONGO DB INTERNALS --

in sql db -- we call it as table 
in mongo db -- we say collections
               for code we say DOCUMENT 


{
    "id" : 1 , 
    "name" : "sahil"
}

this whole is Document 
mutiple Document is known as COLLECTIONS 
these single line is field


now we see how these mongo db stored in secondary memory -- ssd , hdd
basically on any db we can do -- insert , delete , update , search , range queries 

range query is -- similar to filter the data with specific data 
take out all details of those whose lastname is "yash"

these databases like mongo db , sql db follow the b+ tree structure 
let talk about it -- 

now if we want to store this data in ssd

we store one after one line in SSD

if it is Unsorted -- 
and it have N elements

then it takes
O(n) time -- we do linear search over full data 

if we do it sorted based on id -- then how much time it will take 
O(logn) -- most say this answer  