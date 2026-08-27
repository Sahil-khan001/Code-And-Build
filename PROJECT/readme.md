Mega Project -- 
we gonna built it in MicroServices 

in leetcode we have -- 
ques and and we have to write code --
1. pre built function 
2. pre built input 
3. can code in multiple language 
also the code run in backend not in frontend it is simple 
we can run js on frontend because of v8 engine but not other language 

Design the system -- 

frontend -- html , css , js , react , tailwind , dazzy ui
backend -- node , express , mongodb , redis

when code file coming from frontend to backend we have to check it using prebuilt input output check
although should we have to execute thiss in backend or somewhere else 
suppose some hacker write wrong code that delete whole files of backend because u execute that code 

so for this we even other platform use Judge0  it iss open source and it have all the feature in order to execute aa code perfectly --
like all language compiler , input output feature everything 
it works as a online code executable 

U caan locally run on ur system as well but lot of problems server on which u hoisted , updaate
u can use free plan 50/day

like u are saying if there is 50/day req then supposse aa problem haave 50 test cases hten only 1 user can finish 1 day plaan aat once
so we optimise it later we

we can do one thing that is -- we can wrap up all the testcases in an array and check it at once but the issue is user only get answer when all test cases are pass

other alternative iss -- we create a server which contain Judge0 and Docker -- 
docker it contains a image in which we run the code means the code only take that memory if it is culprit code then damage that portion of memory and later we can remove it automatically also -- 

but it will make too code too complex because of Docker live we prefer using mongo db server instead of locally installed 

now move to Project -- 
First we built BACKEND -- 
first all complex part then at last React -- 

BACKEND SYSTEM -- 

user -- admin , normal

Backend System - 1. User Authentication 
                 2. Problems 
                 3. Submit
                 4. DSA Problem 


we have to create the problems too like diff ques 

DSA Problem  -- this API is for users to show all the problems
 Submit -- this API is for to execute the code and get ressponse like from Judge0
 Problems creation -- this api is for problemss creation 

 There are so many sections and APIs 
we create it section by section -- 

Now move to User Authentication -- 
it includes api like -- 
Register
login 
logout
email-verify
reset-password
forgot-password
Google-Signup

now how can we do email-verify -- u can do it using otp 
u can do it using like user have to click on link to verify 
when we click on link it contains token when it send on backened it verify the email
for reset -- first input original password then new pass then again new 

 wraap up aall tesst cases in an array with output 
it check all testcases at once but problem is user caan't ssee which test casse pass or not
it give u answer only when all test cases are pass
Now how our Schema looks like -- 
so we have multiple Schema during Project -- 

1. User Schema -- first Name , Last Name , email , Role , Password , SolvedProblem , Image

2. Problems -- Problem_ID , title , Run testcases , hidden test Cases , Initial Code with language , real_solution , Run OutputTestCases , hiddenOutputTestCases , Video Solution 

3. Submit -- UserSolution , Problem_id , Solution : Accept | Reject

in frotend we cant send all these to frontend some goes in backend /judge0 or acc to requirements


How we integrate AI into this -- 
we make a button in header
which helps in Debugging 
which helps in giving hint 

but we can't put our code into it 
it give us code of their own


<!-- --------------------------------------- -->
we see in Leetcode -- 
there is only 3 test cases are shown and others are hidden 
because it is imp. if hiddent testcases are show then anyone can make leetcode gfg like platform 

<!-- ------------------------------------------------------------------------------------------------------ -->
Now move to the Code part -- 
start with the server part -- 


Short notess/New learning -- 
-- while using Express Router likein 
authRouter we usse 
authRouter.post('/register' , async (req , res)=>{

})
now to make clean code we put aall thesse aaysn call back function in controllers 
then import from theirss

FOLDER BE LIKE --
src then config , controllers , model , Routes , utils 

IN register section -- how we create random key --
we use dev communicity code which generate random JWT key 
to put into jwt.sign{}
behind they use crypt library to generaate random number 

in cookie we put {maxAge : 3600}
we put thiss in milliseconds
we put so that the cookie will expire in thisss time
this token expire in 1 hour in frontend  

Now we implemented some APIs --
on user side like register , login , logout , getProfile

we know while regisstering we send send our role also suppose someone send "role" : "admin"
it get access admin feature now he can create problemss and lot more so for this what we haave to do is --

to make admin we have to do it from different route not from directly register route
in register route we can write -- 
req.body.role = 'user';

if anyone write their role as admin he will be registered as user from this registered route

for adminrole - we have to make a different api that is --
authRouter.post('/admin/register' , adminMiddleWare , adminRegister);

we have to go through this route 
normal user if come on this path too then he faailed at middleware
like we have to first be a admin like middleware check us then we can make a user admin 
like only admin can go through this path and he can make someone else register as admin 

now u will be wondering then how the first man admin can registered 
u can directly change in database manually for the first one because u have access of it
later we have to go through this path to make someone admin 

till now we created schema of user  -- 

Now we gonna create schema for the PROBLEM creation-
the schema be like -- 

const problemSchema  = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    difficulty : {
        type : String,
        enum : ['easy' , 'medium' , 'hard'],
        required : true,
    },
    tags : {
        type: String,
        enum : ['Array' , 'Linkedlist' , 'Dp' , 'Graph']
    },
    visibleTestCases: [
         {
            input:{
                type : String,
                required : true
            },
            output : {
                type : String,
                required : true
            },
            explanation : {
                type : String,
                required : true
            }
         }

    ],
    hiddenTestCases: [
         {
            input:{
                type : String,
                required : true
            },
            output : {
                type : String,
                required : true
            }
         }

    ],
    startCode : [ 
        {
            language : {
                type : String,
                required : true
            },
            initialCode : {
                type : String,
                require : true
            }
        }
    ],
    problemCreator : {
        type : Schema.Types.ObjectId,
        ref : 'user',
        required : true
    }

})

Now we have to add on more thing that iss -- 
who is problemCreator -- like we have mutiple admin and user so to find that particular user or creator of this problem- 
we refer to user Schema or pointing towards different schema to find that particular User who created this problem
otherwise we have to store all the user info there which takess too much memory so we refer to previous Schema for the ObjectId and if we have Objectid then we find out other info too like who created it name and other stuff -

now move to routes part -- 
-- const express = require('express');

const problemRouter = express.Router();

problemRouter.post("/create", problemCreate);
problemRouter.patch("/:id" , problemUpdate);
problemRouter.delete("/:id" , problemDelete);

problemRouter.get("/:id" , problemFetch);
problemRouter.get("/" , getAllProblem);
problemRouter.get("/user" , solvedProblem);


now for these --

problemRouter.post("/create", problemCreate);
problemRouter.patch("/:id" , problemUpdate);
problemRouter.delete("/:id" , problemDelete);

these only done by admin only so we need admin here\

Note -- some people get schema problem like how to think about it 
        just think about what data u have to store 
        like in problem creation we have to store the problem title , description , tagss , difficulty , visibletestcases , hidden tesst cases just think about it 



now we have to add reference ssolution in the problem schema for the 
so if any paid user came we can provide real solution to him

now we created the route as well for now we move to function part that are in controllers also we have 
like we have to create a problem 
we can to create aa problem , updaate aand delete the user musst be admin so we aadd admin middlwareinto it to implement it 

how we check whether solution is right or wrong 
like user can input tesstcassess whatever the ansswer he receive he check with reference solution 

now to create problem -- only admin can create a problem
data fetch from req.body

is it right to store the all the data from user to store in db Directly
no , we have to make sure that we are validating the data at db level or api level also checks

also the user send the reference solution in all language like c++ , javaa , python etc
we have to check it also -- 
for that user also send the vissible and hiddent tesst cassess if this ref ssolu passs on this testcases like their output is right then we can store the ref ssolution

now where we run all these things --
we need JUDGE0 because it haave all languaage compiler 

first whatever we get into reference solution we have to iterate over it -- 

in refsol weg get = [
    {
        language : "C++",
        completeCode : "c++ code"
    },
    {
        language : "java",
        completeCode : "java code"
    },
]

how to iterate over it with the de -- 
for(const {language , completeCode} of refsol){

}

basically we know about Judge 0 
so we give 
lan : c++
code : c++ code
input : 33
output : 34

we give this to judge 0 in return it give us result 
then we sure to store the reference solu to sstore in db 

how things work in judge 0 
go to judge0 docs the docs are very simple and easy to read
start with free plan it generaate aapi key , url 

also we gonna use axios which is js lib
if we move to submission part -- 
while submitting the code we have to give the -- 
source_code : "ghjhdfjkdj"
LanguageId : every lan have a id 
stdin : we have to write this instead of input 
aand there are total 33 but we aare not going to use aall -- 

but we have to follow its format that is imp because we have to pass it --
like -- 
source_code
languageId
Setin 
expected_output

Now the thing is we give source code for lnaguade id we maake a function but for setin , output 
we have to send the testcases sso what we do is

we wrap up into a batch -- 
it contains all the testcases -- 
testcase1 + code
testcase2 + code
testcase3 + code
we wraap this into batch and we give it -- 
we can't hit api again and again for diff aapi
otherwise our daily limit will expired 

code for submission be like -- 

            const submissions = visibleTestCases.map((input , output)=>({
             source_code : completeCode,
             language_id : LanguageId,
             stdin : input,
             expected_output : output
            }))

            every time we are sending same code and id but diff input and output means diff testcases
behind it look like -- 
const submission = [
    {
             source_code : completeCode,
             language_id : LanguageId,
             stdin : input,
             expected_output : output
    },
    {
             source_code : completeCode,
             language_id : LanguageId,
             stdin : input,
             expected_output : output
    },
    {
             source_code : completeCode,
             language_id : LanguageId,
             stdin : input,
             expected_output : output
    }
]

this is batch submission 



const submitBatch = async (submisssions)=>{

}
now after submit this batch to Judge0 judge0 give us status and token as response
if we get status 3 then response is right 

the output look like -- 
{
  "submissions": [
    {
      "language_id": 46,
      "stdout": "hello from Bash\n",
      "status_id": 3,
      "stderr": null,
      "token": "db54881d-bcf5-4c7b-a2e3-d33fe7e25de7"
    },
    {
      "language_id": 71,
      "stdout": "hello from Python\n",
      "status_id": 3,
      "stderr": null,
      "token": "ecc52a9b-ea80-4a00-ad50-4ab6cc3bb2a1"
    },
    {
      "language_id": 72,
      "stdout": "hello from Ruby\n",
      "status_id": 3,
      "stderr": null,
      "token": "1b35ec3b-5776-48ef-b646-d5522bdeb2cc"
    }
  ]
}

so it give us status id and token -- 
this status have diff meaning correspon to their id --
id : 1 -- in queue
id : 2 -- Processing
id : 3 -- Accepted 

also if we have 3 testcases in batchsubmission then judge0 give uss 3 tokens
then in future if we take this token and give to judge0 then it give us answer we can check it using status id 
like the code is runing processsing queuign faailed accepted 
because it take time to run code so it give u token he said come later 




































Now we are going to implement Judge0 --
we see when we create problem at that time we submit the problem and we got the result -- 




