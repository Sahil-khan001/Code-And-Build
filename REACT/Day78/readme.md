//Today we discuss about 
-- why REACT is Fast
-- why keys are attached 


myths -- 
1. there is NO use of VIRTUAL DOM use in react now
2. in Js full code is re render again if any change in statevariable , in react it only re render specific component

in js 
suppose u click on button 
this statements execute -- document.body.bg-color = "red"
document.body.font-size = "30px"
document.body.padding  = "10px"

after clicking button these statements execute one by one we want all execute at same time 
but why we need to execute this at same time -- 

we have two things -- 
Reflow -- which element at which position we have to set it also its size 
Repaint -- in screen we have pixels so when we click on button all pixel become colorful or it means to fill every pixed with color is REPAINT 


like when we make element in HTML someone have to calculate where it position is and which color of this element look like and it is done by REFLOW AND REPAINT 


-- 
both these two operation is expensive everytime when there is a new instruction the  reflow , repaint have to calculate it 

but if we take these all instruction at once and give it to reflow and repaint then it super optimize 

the REACT Do this -- 

but how can we execute 4 at once we know Js is a Single threaded lanugage 
it only execute one at a time
react will do this but at the end js have to do it but how -- 


suppose we have 60fps screen
in which each frame have 1/60 second time
in we put code into 1 frame then another then another code changes and appeared 
but suppose when we click on button then the next code have 1/60 seconds time to execute all 4 instruction one by one and execute it fully 
and it visible on screen that's how behind work 

 like we have 60fps 
 we  have to show 60 frame in 1 second so 
 everyframe takes  1/60s time 
 suppose u execute these 4 instructions between it someone click on button to change something so ur next frame have 1/60 s to show changing code on UI
it execute easily these 4 instruction one by one in this time frame

but REACT execute all these at once it it make bundle of it and give it to the JS to execute at once 

it is called the BATCH UPDATE -- in this time reflow and repaint run only at one time 
 

 if we do this using js -- every instruction exectute at diff frame 

 but in react we make batch/fragment and give it to the JS
 it execute full batch in 1 frame
that's why REACT is fast
react handling itself these bundling work 


in js it takes every  4 frame but in react execute only in one frame because of batch 

in js it also possible using the fragment concept to make batch and execute in 1 frame 

in react it make batch of instruction and execute at once as compare to js that's why it is fast 
the reason behind it 


at last 

in js -- we have to use fragment concept to make batch and lots of problems 
in react -- just write the code it execute in batch automatically 

Now we have Virtual DOM-- 

if we do any change in REAL DOM then it show on ui


it is not possible for react as well like instead of execute 4 instruction at once he execute one then manipulate the real dom it is not possible for react as well

so he make the VIRTUAL DOM 
creates a copy of original DOM 

it is lightweight too -means it not contains too much information 


so whenever any changes happen then it create an virtual DOM everytime 
and again create a more virtual DOM

and do changes in this 2nd virtual dom 
suppose there is a change in 2 nodes of this dom

and compared it with the first one --
this is called DIFFING ALGORITHM AKA Reconciliation Algorithm 


compare both the dom and find the changes dom 
then he find it 
and CREATE a BATCH of it and update it to the REAL DOM 


ALL the changes it send to the REAL DOM 
then REAL DOM execute this batch at ONCE 

we can't do BATCH update direct on REAL DOM 

why there is need of virtual dom 
if there is no virtual dom then we have to execute instruction one by one in REAL DOM which create problem and become react same like js also we can't execute all changes at once 

after virtual dom we can make a batch of it and send it to realDOM to execute all changes at once
in this way  batch updates are gone 


body bg = "black" as normal 

like we have instructions like 
document.body.backgroundColor = "Red"
document.body.margin = "19px"
document.body.backgroundColor = "black"

react dont make him red it have an advantage of it 

suppose we have an eg 
count = 2;
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

it means setCount(3) --it re render only ones 
all 3 goes in virtual dom it says one changes 3 times neglect two and execute one 
to run all three we have to write like this take new value then add + 1 into it 

setCount((count)=>count + 1);
setCount((count)=>count + 1);
setCount((count)=>count + 1);
to execute all three

whenever there is new change react make new virtual dom and compare it with the previous one 

 Diffing Algorithm also known as Reconciliation Algorithm 

<!-- ============================================================================== -->

NOW WE SEE WHY WE NEED OF KEY IN REACT --

Suppose a Parent have 4 child -- child1 , child2 , child 3 , child4

code be like -- 
import React ,{useState} from "react";
import ReactDOM from "react-dom/client";
import Child from "./child";



function Parent(){

    const arr = [0,1,2,3];

    return (
       <>
       {arr.map((value)=><Child/>)}
          </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent/>)

child execute 4 times -- 
it give us error -- every child should have a unique key 


suppose child 2 button click -- 1 count increase means it re render the function or call the function  which is add

but other 3 child have same function that is add  means we have total 4 add function 
so the ques is how do we know which add function we have to re render 
the right add is child2 obviously but how we know this 

THAT'S WHY WE NEED KEYS SO THAT WE UNIQUELY IDENTIFIES THESE COMPONENT --- 

so that we know which add function we have to run 

now child 1 -- key 0
    child 2 -- key 1
    child 3 -- key 2
    child 4 -- key 3

now we know we have to run the key 1 function THAT'S WHY WE NEED KEYS 

  {arr.map((value)=><Child key={value} />)}

  in this way we have identify the key uniquely

so we need to add key so that Every State know which key add function i have to re render/execute 

Eg . 2 

suppose we have a Parent which have nodes of list
<li>Milk</li>
<li>Sugar</li>
<li>Chai</li>

then we update this by adding one node that is samose

<li>Samosa</li>
<li>Milk</li>
<li>Sugar</li>
<li>Chai</li>


Without key what happen 

it create a virtual dom  of it 

then compare that what Deffine Algo do --

it says -- Destroy the milk node and create new Samosa Node
it says -- Destroy the Sugar node and create new MIlk Node
it says -- Destroy the Chai node and create new Sugar Node
it says -- just create new Chai Node


but in reality we just add a new node at first position and shift other nodes 1 step ahead its because of not identify its keys
That is a very Wrong Update that what Deffine algo do check everynode where it feel wrong destroy and create new node and send update to real DOM
fiver is also same as Deffin 

Ideal update is this - Add a new node at first position and shift other nodes 1 step ahead 

the update u said -- is wrong because first u have to destroy node and create node 
means memory relaease then allocate new memory same as ahead too
what u do is create 4 node with new memeory allocation and 3 destroy/memory release 
SO it is EXPENSIVE 

ideal update -- create a single node with new allocation and remaining node 1 step postition change  -- HERE ONLY 1 MEMORY ALLOCATION BUT THERE 4 MEMROY ALLOCATION 

what is Expensive Operation -- new memory allocation , memory release so we have to optimize it efficiently

so that's why we need keys to stay away from Expensive Operation 
so that we can uniqely identify each node with the help of keys 

if we make key for milk -- key milk 
              for sugar -- key sugar

now Deffin algo compare on the behalf of keys 
he check first milk not equal to samosa -- so we have to create this samosa node 
then milk == milk  no need
then sugar == milk  no need 
then chai === chai  no need 

so keys help us to uniquely identify 















