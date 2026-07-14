Internals of MONGO DB -- 

we see in banks -- sql db is best for transaction type structure 
it used acid property too 

we know -- Instagram 
we know when we post a photo we have options like -- 
basically we are storing all details in sql db meand in structured format -- 

 username  photo  like   share   comment   
 rahul     url    34      5         23


 in this way we organise the data now we update our database like we created a dislike button and now we have to add in db too 
 so we just add it 
 now we have to set value too 
 for old user we have to set value that is 0 
 and for new we can set acc to it 

 now doing this task is difficult and IT IS A PAIN POINT 
 we have to go through every data 
 because of this thing we dont prefer it 

 now we see how this data be stored in ssd --

 --like one by one 
 -- side by side

 if we do in heap -- we dont know this memory block takes exact this space ornot 
 so for memory too it create problems 
ANd u have to do this with 1000 cr entries so it is too difficult 

another example sql vs nosql --

sql is RDBMS -- relational Database 


lets take a database --
| Name   | Amaz_id | Last Name | Address | Item Order | Cost | Order_id |
| ------ | ------: | --------- | ------- | ---------- | ---: | -------: |
| Shivam |     112 | Kumar     | Kolkata | Protein    | 4000 |        1 |
| Shivam |     112 | Kumar     | Kolkata | Creatine   | 2000 |        2 |
| Shivam |     112 | Kumar     | Kolkata | Butter     |  100 |        3 |
| Shivam |     112 | Kumar     | Kolkata | Namkeen    | 2000 |        4 |


so here too much redundancy is there so we need to figure it out 
so we do NORMALISATION after it it became --

| Name   | Amaz_id | Last Name | Address |
| ------ | ------: | --------- | ------- |       --------------table 1
| Shivam |     112 | Kumar     | Kolkata |

| Item Order | Cost | OrderId |
| ---------- | ---: | ------: |
| Protein    | 4000 |       1 |
| Creatine   | 2000 |       2 |                 -----------------table2
| Butter     |  100 |       3 |
| Namkeen    | 2000 |       4 |


now there is no redundancy at all -- 

now how we know that shivam belong this table 2 
we have to connect this table using primary key and foreign key concept

like in table 1 amaz id is primary key
so we put this in table 2 and it treated as a Foreign key

how if i want to see the order of shivam then i take id of shivam and search it on 2nd table 

