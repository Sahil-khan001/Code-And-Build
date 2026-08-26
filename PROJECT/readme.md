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





