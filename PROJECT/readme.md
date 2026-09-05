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
u can do it using like user hbave to click on link to verify 
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
Basically it a 2step process in which 
first it give us token 
then we take this token to there and it give us final output -- accept , queue , tle , with status 

we have to send all tokens at once separate by comma -- fjkfjodskfjdjsgjdffjbgfldkjfsdkfj , ghsofjdmjghofdkljcasadlkfjsadsf , sgjsosfkjsofslkjdsfoklsjfsd

Now we are going to implement Judge0 --
we see when we create problem at that time we submit the problem and we got the result -- 

code be like -- 
const waiting = async(timer)=>{
    setTimeout(() => {
        return 1;
    }, timer);
}

const submitToken = async (resultToken)=>{
    
    const options = {
      method: 'GET',
      url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
      params: {
        tokens: resultToken.join(","),
        base64_encoded: 'false',
        fields: '*'
      },
      headers: {
        'x-rapidapi-key': process.env.JUDGE0_KEY,
        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
      }
    };
    
    async function fetchData() {
        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
    
    
     while(true){
    
     const result =  await fetchData();
    
      const IsResultObtained =  result.submissions.every((r)=>r.status_id>2);
    
      if(IsResultObtained)
        return result.submissions;
    
      
      await waiting(1000);
    }
}


here we use waiting function so that after 1 second the fetchData() function call it again if we didn't get the result Obtained 

although this function return one an array with the status id > 2



            const testResult = await submitToken(resulttoken);
            //this testResult get an array with the objects having status_id > 2

            for(const test of testResult){
                if(test.status_id != 3){
                    return res.status(400).send("Error Occured");
                }
            }


this gives response if status id is not 3
-- we use return here so that this loop not running in behind again and we get out of this function 


Now this loop take one by one another language --
if it is completeted 
it means we can store this reference solution in the db now 

also make sure that u store this in the db outside the loop
many made the same mistake dont do it 

also we have to send one more thing that iss Problem Creator 
await Problems.create({
    ...req.body,
    problemCreator : req.result._id
})

this ressult._id refer to the auth result in which we have info about user

now we have to run the code 
to saved a problem --

but it give u error 
when status_id is not 3

to check the error and to solve the error
console the submit ressult and token 
it give u error because of staatus id is s6 
compilation error 
to solve this s

replace -
base64_encoded : false;

why -- base64 is when u encode data like in jwt token
it be like -- kjfskjfjfssssfkljasfklfjsdaslskfjgfkljgaskf,jdasfklj , gkjkfj
sso it is base64 encode 

so here we can set it true

but in submit submission 
the data in submission is not in encoded form 
they why u set base64_encoded : true
we have to change it to false
judge0 think that is in encoded form but in reality it not when judge0 decoded it its meaning is change 
so we have to change it 

now it is working fine we can create problem and can store in db

<!-- ---------------------------------------------------------------------------- -->

Now move to the other api 
like update , delete , get problem by id and all

for update when we click on update a new window will open with prev data already loaded --
then we can update our data ..'
when we got updated data first we check the whole data is working then we put our data

so in code we take old code too 
to make sure it is working 
like in update we pass whole code not specific otherwise we have to check specific pass -- 

also we pass {runValidators : true , new : true} --
we know when we update something in db by default we have Validator dont run sso we need to run them write this while updating something --  
new : true -- it means the document u receive after update return it 
so that we can validate data in db as well as api level 

now move to the Delete api -- 
firt we check the id present or not 
then we can delete directly by -- .findByIdAndDelete(id);

NOte -- make sure u are using the status code like for missing u use 404 and for internal server use 500 

in delete we gonna implement the confirmation like 
we have to type the delete in the blank then it gonna confirm and delete it 
we implement this functionaaality in frontend later 


now move to the getallProblems -- for this 
we gonna use .find({});

in leetcode there is lazy loading happening -- 
data is coming one by one -- 
like think suppose u are fetching data from db -- suppose it loads instantly 
it crash ur system -- 
like we use sfu algo socketandrtc only selective video is there in same way here we usse == 
here we use two buttons like right and left arrow -- 
when we click on right it take next 10 problems this is called PAGINATION
we are creating the pages -- 
now how do we implement this functionality -- 

like we have an end point -- 
host:3000/problem/getAllProblem?page=1&limit=10

we send these parameter in end point 
now the ques is -- 
if we are on page1 how we move to page 2 -- for this 
we use skip()

await Problem.find().skip(10).limit(10);
then next we do 
await Problem.find().skip(20).limit(10);

there is just some logics --
const page = 2;
const limit = 10 ;
const skip = (page-1)*limit;

this is called pagination functionality -- 
we can implement filter also -- 
await Problem.find({difficulty : 'easy'});
or 
await Problem.find({
    difficulty : "easy",
    tags : "array"
})
await Problem.find({
    votes : { $gte : 100},
    tags : {$in : ["array" , "hashmap"]}
})

Make sure u are using mongodb Operator to filter out data correctly using these tags
like $eq , $neq , $lte , $in

now move to the next api
that show problemsolvedbyUser -- 

for this how we do like we have to show it on ui -- 
like same like pagination -- 

-- with the help of some logic -- 
same as previously -- page , skip , limit 

when we click on submit -- 
we have to submit our code -- for this we have to stored our code in db
becausse if u want solvedproblem means it is somewhere in db 
u fetch it then u can show it on ui -- 

it means we have to make a schema first to submit ur code 
schema be like -- 

problem_id
user_id
code 
language
Time 
Memory 
Status : pending|accepted|
testCases : how much u pass

we have to store all these thingss

letss make a schema because while submitting the code we need all these details -- 
submission.js -- 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submissionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  problemId: {
    type: Schema.Types.ObjectId,
    ref: 'problem',
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
    enum: ['javascript', 'c++', 'java'],
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'wrong', 'error'],
    default: 'pending'
  },
  runtime: {
    type: Number,  // milliseconds
    default: 0
  },
  memory: {
    type: Number,  // kB
    default: 0
  },
  errorMessage: {
    type: String,
    default: ''
  },
  testCasesPassed: {
    type: Number,
    default: 0
  },
  testCasesTotal: {  
    type: Number,
    default: 0
  }
}, { 
  timestamps: true
});


submissionSchema.index({userId:1 , problemId:1});


const Submission = mongoose.model('submission',submissionSchema);

module.exports = Submission;

also we can't believe on this things -- 
run time complexity , other  complexity -- we know behind the scene it give us complexity based on judge0 submission , sometime it give different sometime it give diff complexity

now we have to check that other api is working or not -- 
for update , for delete it working by putting it id --
and in update we are sending full data

for api like getProblemById we we put our id and get that problem but the data we are getting in frontend it include 
hidden testcases , solution , reference solution which we want to make priceable how to ssolve this - 

code be like -- 

const problem = await Problem.findById(Id).select('_id , title , description , difficulty ,tags , visbibleTestCases , startCode , referenceSolution);

with the help of .select we can get field acc to us -- 
 
for api --
get all problems we use .select too -- 
because we want all problems like in leetcode happen so for that we use .select so that onlyspecific thing appear on screen

now next api is problem solved by user -- 
but first we need to submit problem in db either it is wrong or right

now move to the submission code -- 
whenever we submit code no matter what it is wrong or right we see it later in our history
we can see it later too what testcases are failed , code , all info
so we havve to stored it too -- 
either it is right or wrong

some people ssotre run time thingss too but it doesn't make sense
when we click on run -- then we run only visible test cases
when we click on submission -- then we run hidden test caases too 

now move to sumbit routes -- 
const express = require
const submitRouter = express.Router[];

submitRouter.post
here we have to fetch the problem from problem id so that we can get hidden test cases -- 
becausse while submit the code user only send code but how we check it on judge0
we want testcases for that we need problem that is in db


now where we submit code -- 
so for submission of code  , we first first direclty store in db with pending state then we give it too judge then when judge give us answer then we gonna update it in db 

becausse sometime judge dont give us answer --
suppose it crash then wht hppened we can't get answer so we directly store in db

-- no system is perfect -- we hve to compromise with it 
now we have to store the code of user in db that's it



CODE BE LIKE -- 

HERE we what we did -- 
-- WE SUBMIT THE CODE IN DB AND MAKE STATUS PENDING
THEN WE SEND THI  CODE IN JUDGE0 BY USING INTERNAL HIDDEN TEST CASES THEN WE GET RESULT  
THEN WE GONNA UPDATE THE SUBMIT RESULT STATUS AND MORE--

CODE BE LIKE -- 


now in the user.js we have one more field that is -- 
problemSolved : {
  type : [string];
} 

like in leetcode we see the problem we solved 
same in that way we have to write problem solved here -- 
 
 problemSolved : {
    type : [{
      type:Schema.Types.ObjectId,
      ref : 'problem'
    }],
    unique : true
 }

 it means how many problem u solved till now -- 
 we check it using by problemId

now what we do is --
when we submit our problem before submit we check whether this 
like we take out problemId from Submission and check whether this problem is present in user or not --
if it is present in user then we dont push otherwise push

note : this line means save this  in db 
await user.save()


    // ProblemId ko insert karenge userSchema ke problemSolved mein if it is not persent there.
    
    // req.result == user Information

    if(!req.result.problemSolved.includes(problemId)){
      req.result.problemSolved.push(problemId);
      await req.result.save();
    }
    
--now move to this API
problemRouter.get("/problemSolvedByUser", userMiddleware , solvedAllProblembyUser);


-- which problem solved by user -- 
for this we calculate total no of problem solved.length 
it tells total no of problem -- 

how he know which problem he solve for this -- 
code be like -- 

const solvedAllProblembyUser = async (req , res)=>{
  
    try{
      const count = req.result._id;
      res.status(200).send(count);
    }
    catch(err){
      res.status(500).send("Server Error");
    }
}

now how we get All solved problem  -- 


.populate -- it means whom it is refering too --

now we add one more functionality that is run code -- 
but in run code we dont store code in db
also in run code we run the code with visible test cases --
and just show the ans -- 

-- Now move to the DB OPTIMISATION -- 
suppose we have to delete a user leetcode profile -- 
first authenticate user -- 
then delete it from db 
we have to delete its submission code too 
code be like-- 

const deleteProfile =async (req , res)=>{
   try{
       const userId = req.result._id;
      
    // userSchema delete
    await User.findByIdAndDelete(userId);

    // Submission se bhi delete karo...
    
    // await Submission.deleteMany({userId});
    
    res.status(200).send("Deleted Successfully");

    }
    catch(err){
      
        res.status(500).send("Internal Server Error");
    }
}


now we have one more thing --
pre and post -- 

this code we put into schema after schema it run after normal one -- 

userSchema.post('findOneAndDelete', async function (userInfo) {
    if (userInfo) {
      await mongoose.model('submission').deleteMany({ userId: userInfo._id });
    }
});
this is mongodb code -- 
this code run for sure after this line -- await User.findByIdAndDelete(userId)
this line delete user from db; and give info regarding that user -- 
we put that info in this new code it goes into submission one and delete code
pre -- it run before normal schema

now move to the -- 
submit part 
for a particular problem how many code i have Submitted -- 
to find this -- 
we send user id and problem id -- 

but Suppose in real world -- 
we have 10cr submission there -- 
how much time it will take for find particulr user and their problem
althugh we know index apply on _id not on problem
like we only apply indexing on unique thing -- 

so here user_id or problem_id is not unique 
so we make compound index by mixing them too
user_idproblem_id -- which make him unique 
now how we apply -- 

u can make any field indexing -- 
index:true;
dont apply indexing on every field -- memory fill issue

only apply where u are accessing the data more -- 

now we do this -- 
submissionSchema.index({userId:1 , problemId:1});

now when we search data using userId, problemId we can get that data in log n time because of indexing 
because it sorted data we can apply indexing on user id too after compund index
just to get data faster we do this -- 
code be like --

const submittedProblem = async(req,res)=>{

  try{
     
    const userId = req.result._id;
    const problemId = req.params.pid;

   const ans = await Submission.find({userId,problemId});
  
  if(ans.length==0)
    res.status(200).send("No Submission is persent");

  res.status(200).send(ans);

  }
  catch(err){
     res.status(500).send("Internal Server Error");
  }
}
<!-- -------------------------------------------------------------------------------------------------------------------------- -->

Now we add cooldown for 10 seconds for after every submitted problem 
for this we use ratelimiter with redis 
code be like -- 

const redisClient = require('./redisClient');

const submitCodeRateLimiter = async (req, res, next) => {
    const userId = req.result._id;
    const redisKey = `submit_cooldown:${userId}`;

    try {
        // Check if user has a recent submission
        const exists = await redisClient.exists(redisKey);

        if (exists) {
            return res.status(429).json({
                error: 'Please wait 10 seconds before submitting again'
            });
        }

        // Set cooldown period
        await redisClient.set(redisKey, 'cooldown_active', {
            EX: 10, // Expire after 10 seconds
            NX: true // Only set if not exists
        });

        next();
    } catch (error) {
        console.error('Rate limiter error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = submitCodeRateLimiter;



<!-- ----------------------------------------------------------------------------------------------- -->

React -- 
in hooks --the usestate only re render the function in which we do a change 
not whole function 


useCallback -- it hold the old func value with the help of closure also the func dont re render until there is change in ui
useRef -- it do not re render the function and hold the old value it dont show this on ui otherwise he have to rerender whole ui
but behind he hold the value

useEffect -- it run at last , like fetch data , it depend on dependencies too

daisy ui explore 

<!-- -------------------------------------------------------------------------------------------------------------- -->

Now move to the FRONTEND -- 
for the frontend notes u can refer Frontend readme.md file 

