
Difference between CJS AND MJS

            CJS(common js module)                                       ES MODULES(MJS)             
    1. OLD WAY -- still used                                             1. NEW WAY
    2. require() , module.exports= sum                                   2. import and export
    3. Synchronous                                                       3. asynchronous 
    4. Non-Strict                                                        4. Strict

    synchronous --
    we have more require
    require()
    require()
    require()

    so it execute one by one when one full solved then move to other 

    asynchronous -- 
   we have more import -- 
  import
  import
  import

  if one import takes time to get data then we move to second import until then 
  so it works in asynchronously 

  after the Es6 the JS follow Strict Mode 
  strict mode means we have to declare variable before giving value to it
  in node js -- c= 10;       without declare c it work in nodejs
  in js -- let c = 10 ;       we have to declare the c first that is strict mode 
s 
  '

 Suppose we have a folder that is calculator it have diff functionality sum.js , sub.js , mul.js
we have a separate file first.js -- it want that  functionality in first.js
either it have to import one by one means we have to use more than 1 require , second option is make a index.js file which consist all these functinalities so we can direclty import this file 

  In Node js what happened -- when u try to import a folder and its functionalities then it check for index.js file 
  by default it find index.js and import  it that is best approach and optmised way too

  we make a file index.js -- in which we import all functionality 
  then we export this so first.js can import this 

  instead of 3 require we done our work in 1 require by just creating a index.js file 

Lets discuss about -- 
Process : threaded , multithread , asynchronous  , single core , octo core , parallelism , concurrent 


single processor -- at one time u can run only 1 process -- either yt/music/pubg
but u see all tasks works together fine just because of context Swithching 

for sometime it run task1 , then task2 , then task3 and repeat this  
all these tasks runs in fast way we can't even realise

and in this way the single processor can handle these 3 tasks simultaneiously 
also we can say this CONCURRENTLY -- means the tasks not run parallely but concurrently execute stop switch to another 

Dual core -- means we have 2 processor -- p1 - yt ,
                                          p2 - music , 
means 2 processor execute parallely 
THIS IS CALLED PARALLELISM

--suppose we have a game of 20gb and we have 8 gb ram so how this 20gb of game run in 8gb so basically we use virtual memory that is fragementation we just take the important part from it means we get only memory to run the recent tasks and remove the unecessary part only the requirement code 

like we open a website we see some component so we just need limited code to show that on ui not the full code we want remaining code when we click on that component not unnessary the full code

when PROCESS execute -- it need cpu , memory 
in process -- we have threads - that is smallest unit of tasks
one thread only become a part of one process


suppose we have a process it have some tasks --
1. edit a video 
2. transfer a file
3. install app

so we know in a process we have multiple threads -- t1 , t2 , t3 
so process gives these tasks to them one by one to execute 

if u have single processor then -- in threads context switching happening 
octacore processor then -- threads work in parallel means every thread have one p1 all thread work parallely

ALSO WE DONT HAVE ACCESS TO THIS LIKE PROCESS AND ASSIGNED TASKS TO IT ACC TO U --
IT IS BASED ON SYTEM , SYSTEM WILL DO OTHERWISE PROBLEMS HAPPENED

TAKE AN EXAMPLE -- 

suppose u have pizza hut -- it this as a SERVER
in this u have -- pizza(10 min) , coke(2 min) , pasta(5min)

IF WE HAVE A SYNCHRONOUS BEHAVIOUR 

then u have frontend he request  -- 1: pizza  -- it takes 10 min
                                    2: coke  -- it takes 12 min
                                    3: pasta -- it takes 17 min

if someone make request and we respond LIKE THIS THEN NO ONE COME ON OUR SITE

as we know we can write servers in js means it is synchronous then we face this problem 
BUT we know it have aynchronous behaviour too and web api handle it bascially the browser can do the multitasking 

if we do the ASYNCHRONOUS BEHAVIOUR -- 
-- 1: pizza  --                     1: pizza --  it takes 10 min
                                    2: coke  -- it takes 2 min
                                    3: pasta -- it takes 5 min 

pizza-- say okk after 10 min come
coke -- say okk after 2 min come

the highest time we are taking is 10 minutes too
but there must be multiple chef in kitchen means multicore 

remember node js is single threaded 
but from where he get multithread 

--MAKE PROJECTS AS MUCH U CAN 
EXCALLIDRAW.COM for REACT PROJECTS

HOW M MAKE DIFF THAT DIFF SHAPES
we know we have properties in event 
first click , final clck 
intial cordinate and last cordinate then u cn amke a shapes 









                                  




