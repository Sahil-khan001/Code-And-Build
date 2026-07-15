Internals of MONGO DB -- 

we see in banks -- sql db is best for transaction type structure 
it used acid property too 

we know -- Instagram 
we know when we post a photo we have options like -- 
 SUPPOSE we are storing all details in sql db means in structured format -- 

 username  photo  like   share   comment   
 rahul     url    34      5         23


 in this way we organise the data now we update our database like we created a dislike button and now we have to add in db too 
 so we just add it 
 now we have to set value too 
 for old user we have to set value that is 0 
 and for new we can set acc to it 

 now doing this task is difficult and IT IS A PAIN POINT 
 we have to go through every data 
 because of this thing we dont SQL DATABASES prefer it 

 now we see how this data be stored in ssd --

 --like array by array -- and we know it have fixed size -- suppose some username has big name , little likes , long comments -- so we dont know size so it create problem 
 -- although we have to create a new memory space but it still not easy for other 1000cr entries 
 -- side by side

 if we do in heap -- we dont know this memory block takes exact this space ornot 
 so for memory too it create problems 
ANd u have to do this with 1000 cr entries so it is too difficult 
-- that's why MONGO DB -- no sql Db

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

| Name   | Amaz_id/Primary key | Last Name | Address |
| ------ | ------------------  | --------- | ------- |     -----------------table 1
| Shivam |     112             | Kumar     | Kolkata |

| Item Order | Cost | OrderId |foriegn key
| ---------- | ---: | ------: |-------:
| Protein    | 4000 |       1 |112
| Creatine   | 2000 |       2 |112             -----------------table2
| Butter     |  100 |       3 |112
| Namkeen    | 2000 |       4 |112


now there is no redundancy at all -- 

now how we know that shivam belong this table 2 
we have to connect this table using primary key and foreign key concept

like in table 1 amaz id is primary key
so we put this in table 2 and it treated as a Foreign key
here we have redundant data only

how if i want to see the order of shivam then i take id/primary key of shivam and search it on 2nd table 

so this is NORMALISATION 

we have to make multiple tables in sql db
because we have to save the space 


<!-- -------------------------------------------------------------------
 -->
but in Mongo DB -- 

there is no need to make multiple tables
- No Need for joins
- No Need for data Normalization 

--it is similar to json but have little difference

{
    "id" : 1,
    "userName" : "sahil",
    "city" : "delhi",
}

we call this COLLECTIONS 



but in sql we call tables 
also Mongo Db dont use ACID PROPERTY 

VERTICAL SCALING , HORIZONTAL SCALING --

MYSQL -- it can do vertial scaling 
         can do horizontal too but its difficult 


MONGO DB -- it can do both vertical and horizontal Scaling 

-- scalibility -- suppose u have a server which have 20tb storage when this storage fill 

then we have to options to upgrade it to use -- 
vertical scaling -- system performance increase -- storage increase 50 tb , inc in ram 
horizontal scaling -- relica of that server -- new data is goes into this server 

IN vertical scaling -- there is a limitation -- how much u increase its performance u can't put 1cr tb 
there is an limit there 

in horizontal scaling in sql db --

suppose we have 2 server both may be at diff locations --
and we have two tables after normalisation 
we want id 1 all details that present in table 1 and table 2 and both table at diff server so what we do is -- 
we have to collect data from both the table which is time consuming so that's its difficult to do horizontal scaling there --possible but difficult

but in Mongo DB -- 
we can easily do it 

Sharding -- 
It means -- distribute data onto different server not copy 
At every server there is new data from id 1 to 100 , from id 101 to 200 

Replica --
Replica -- means 2 or 3 copies of that a particular server/database with the data 

suppose sharding is there of servers also we have to make replica of it too
so it takes time + cost too  -- but it is worth it of 

suppose data is lost -- then it create too much problems 
because everyday there is so many request are coming so we have to make sure it can't go on a single 
server otherwise it can fulfill all request so we create replica of server now we have total 3 servers 
now we have to add LOAD BALANCERS

load balancer -- maintain the load on all servers -- which have less request it sends requests to them 
in this way it work 

now the issue is SYNC -- suppose we make a request load balancer take our request to a server then we upload a video there 
in future someone came load put it to another server -- so video should be there
so SYNC is imp. there between all 3 server 

when ever we do write , update operation we have to update all the server 
that is an imp. thing here


in SQL Db - for transaction for bank -- that follow acid property
there should be STRONG SYNC there we can't take risk

so whenever we do WRITE -- we have to do in original server

when we doing any written operation on original server
this server told all another server lock ur read operation until i complete this write one 
then after this original Server update all other servers with update value 

in this way SYNC between all three maintained














