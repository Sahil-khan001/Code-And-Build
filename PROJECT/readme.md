Mega Project -- 
MicroServices 

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
so we optimise it later we wraap up aall tesst cases in an array with output 
it check all testcases at once but problem is user caan't ssee which test casse pass or not
it give u answer only when all test cases are pass

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


Now how our Schema looks like -- 




