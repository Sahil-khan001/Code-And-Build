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
basically on any db what request can do -- insert , delete , update , search , range queries 

range query is -- similar to filter the data with specific data 
take out all details of those whose lastname is "yash"

these databases like mongo db , sql(rdbms) db follow the b+ tree structure 
let talk about it -- 

now if we want to store this data in ssd

we store one after one line in SSD

Now if we want to search a particular element -- 
like in ssd there is document one after another -- 
if it is Unsorted -- 
and it have N elements

then it takes
O(n) time -- we do linear search over full data 

if we do it sorted based on id -- then how much time it will take 
O(logn) -- most say this answer 
people say this based in binary search logic that data is sorted so binary apply -- O(logn);

but O(logn) is wrong -- because the document that have many fields suppose those are not sorted properly some document have even not data then 
the size of diff document are different 
the size of data vary 
so for sorted -- the t.c is O(n) too

how much time will take for this operaton --
insert , delete , update , search 

if sorted -- 
for insert -- it take O(n) -- put elements ahead one by one then insert it 
for update -- it take O(n)
for delete -- it take O(n)
for Search -- it take O(n)

so if we do sorted it wont help in T.C

we are doing this because -- suppose u have database of mongo db 
if u search on that big db then it take O(n) time even for search so we have to optimise it 

for optimise we make an array with 
id and address of fixed size now we put use binary here --  format -- it takes O(log n) time

when we want anything from memory there have to be address there 
like we make memory byte addressable -- 
each byte take address 
1 byte -- 8 bits




