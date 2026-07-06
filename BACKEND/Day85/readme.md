Lets talk INTERNAL THINGS TODAY -- 

Suppose take a Company UBER -- 
APP is already created everything working fine they why new hiring 
everyday Booking is around 50-60 lakh 

so company needs teams to manage everything -- 

there are diff teams 
fintech -- data handle in a optimized way
data -- data teams analyze previous data 
Discount team -- based on previous stats
fraud handler teams -- driver or customer 
lots more...


NOW WHEN COMPANY TAKE A NEW PROJECT WHAT it goes into SDLC CYCLE LIKE --

Requirement Gathering -- Project Manager/Product Engineer -- ui , page , paid user or not , payment , market research , ai include everything they check 
Design -- senior engineer -- lld + Hld 
Development -- frontend + backened + db
Testing -- tester 
Deployments -- devops part teams , ci cd pipeline 
Maintainence -- maintainence 

Oncall -- pager duty -- 24hr/on per week  2-4people change 
alert during this phase 

<!-- ========================================================================================== -->

Now talk about MONOLITH VS MICROSERVICES -- 

Monolith --  we have a server in which all data is present  , include also RAM , PROCESSOR , STORAGE
                   frontend 
                   backened
                   db 
                   img 
                   auth 
                   payment 
this is monolith all things present on a single server 


Suppose u have a server 

                           IN SERVER 
                           frotend 
                           backened
                           db 

also in server we have     ram 
                           Processor 
                           Storage

now we buy services of server which provide ram -- 12 gb
                                            storage -- 10tb
                                            

frontend needs -- ssd + ram + storage -- it take 6gb ram
backened needs -- ssd + ram + storage  -- it take 6gb ram
Db -- Database + ssd 


now what we have to change the Server and take Services from another Server 
we can't upgrade in this server because its a hardware/Physical Server we can't upgrade it we have to change the server 

now we took other server it have            ram -- 24gb
                                            storage -- 24tb

but we need only ram not storage but when u upgrade the server then it is not possible both have increment 
so That's why here we have a loss of storage and we have to pay the bill for it -- 

There is no cpu which have ram --24gb and storage is 10tb 
like there is no company that change storage for u physically it is not possible too

Server -- hardware/Physical Server --  it is physical CPU where we deploy our whole code in ram , storage , processor wise 
Software -- this is the main services that we make to take out the data acc to user need AUTOMATICALLY

basically here in monolith we put our whole data at once place 

so that's why we use Microservies --

Here we put diff Data/Services in Diff Server --
Basically we created small small services -- microservices 
so that u can scale ur Services easily 

like for image -- we have CDN content Delivery Network -- small multiple servers so that we get image in the least amount 
for frontend -- we have diff server 
for Backened -- we have diff server 

-- like Some people use more frontend part only -- so lets scale it -- we can increase its RAM 
we can purchase high ram PLAN
-- like some people use more backened part only -- so we can scale it 
 --like some people use more database then we can scale it -- 
 now we purchase 50tb plan we can scale it 


MONOLITH --   
It have Single CodeBase -- 
it consist of all code that is -- 
1. Frontend 
2. Backened
3. Auth
4. Payment 
5. DB



MICROSERVICES -- 
Diff Codebase for Diff Services 
1. frontend -- it have diff codebase 
2. backend -- it have diff Codebase
3. Auth -- it have diff codebase
4. Payment -- it have diff codebase
5. DB -- it have diff codebase

all are connected via API -- application programming Interface 



Disadvantage of MICROSERVICES -- 
1. we need to pay diff costs of different Server 
2. 


Disadvantage of MONOLITH -- 
1. if u decide that ur backend/frontend in a language then u have to write ur whole code in that specific language
like in backend if u choose javascipt then u have to write whole code in Javascript in backend
in Payment 
in Auth too 




MICROSERVICES --
1. we can write any codebase in any language it is done by teams onto which techstack we would use
u can write admin dashboard in react , user dashboard in angular in frontend 
it depends on which techstack u are best at
2. we can write payment code in diff stack , we can write auth code in diff stack
 payment use MYSQL DB  while Auth use MONGO DB

 eg 
 Auth -- it gives us that this user is Authenticated or not 
 if yes then and gives use username then Payment services take this username and check  
 Payment -- tell us that this user done his/her payment no  

 API's -- it is nothing but how two codebase talk to each other using Functions or others
                        or 
                        It is a way to talk between two codebases within the system 


here auth call the payment function to get details

libuv is also use some api in order to talk with OS 



//NOW WHEN U HAVE SMALL APPS LESS USERS --
Then use MONOLITH 
because we have all the code at one place and we can deploy whole code at one Server 



MONOLITH -- 
1. single CodeBase
2. scalability is low here -- suppose we need only 2gb ram but we have to purchase other plan with 12gb ram extra , here we have loss
3. we have to write all code at ones place the codebase is too lenghty Development is too Messy later , long Codebase
4. Deployment is cheap here 
5. tech stack -- only one techstack required for whole codebase
6. Bug Issue -- we can solve bug easily we have single codebase also , no blaming to others
7. Server Failure -- if server fail here then all services/codebase is shut down 
8. Maintainence -- Maintainence is easy here all codebase at ones place same deployment
9. Debugging -- here it is easier one codebase one server 
10. Cost -- cost is low compare to microservice , cost also depends on others factors too

MICROSERVICE --
1. Multiple Codebase 
2. scalability is high here -- diff services need diff specs,we can give him easily
3. No bhasad we have to take care of our service only -- Development is good
4. Deployment is Costly here
5. tech stack -- we can switch to diff languages too
6. Bug Issue -- one service blame to others for a bug 
7. Server Failure -- if server fail then others services are still going
8. Maintainence  -- hard to maintainence , diff codebase , diff problems
9. Debugging -- multiple codebase , multiple server , hard to debug , communiction problems too
10. Cost -- cost is high due to different server










