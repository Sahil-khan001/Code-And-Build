-- REMEMBER THIS REDUX LIBRARY USE WITH DIFF TECHSTACK 
LETS TALK ABOUT -- REDUX -- 

first we studied -- props drilling
then we studied like 1 component access another component state using props drilling Basically we do StateLifting means we find a common ancestors and put state management into it  then we upgrade it to Contextapi and we put our state into a global context whatever component needs it can access it using import means now component a can pass props component directly without b,c also 

that what Redux solve -- there is no props concept and there is no stateLifting also -- 

so redux make statemanagement easy -- 

instead of putting statement management in component we put all this in React Store/GeneralisedDatabaseCentre/GlobalObject and because of it any component can access it 

now u now these statevariables change also -- suppose component a want to increase count + 1 , b wants decrease count -1 
the problem is everycomponent have access of it 

//SO we make sure that this count variable can't be change 
because if a variable is access by many component then it is sure that there is happening of a mistake/accident changes so nobody can't change that variable 
so for this what he do is --
he make common component of function Increment , function Decrement 
if any component want increment then he use this Increment function

so the Redux store -- have this function + statevariable initialization

Now Redux store have -- count = 0 ;
function reset(){
    count = 0;
}
function Increment(){
    count++;
}
function Decrement(){
    count --;
}

and these functions are called REDUCERS 

it means if u want to change this statevariable in store then i have some functions in store u can use it to change that is called REDUCERS

Dispatch -- like in store u have statevariable , also u have functions that lies in reducers suppose a component want to call an Function then Dispatch take that function call and go into store and in reducers then store check okk u want to call this function okk means make count value to 0  then he finds and execute it 
Dispatch(Increment());

--suppose a component want to create a state variable so we know we have to make it in the  React store but suppose the old function that already in store as same name as this component made like both have same statename and same function name so at the time of exection which function need to be execute then what we do it can be possible so to resolve this problem we use SLICE 

what is SLICE -- 
so we divide our Redux store into slices 
like Slice1 -- we have    count  = 0 ; reducers -- incre , decre , reset
Slice2 -- we have count = 0 ; reducers -- incre , decre  -- this is made by a component 

when we passing any function call with Dispatch then we have to write Slice with it 
so slice is attach with the dispatch 


for this we need to download -- 
react redux and redux toolkit

redux toolkit make store , slice 
redux -- it is used to attach this toolkit

npm install react-redux
 npm install @reduxjs/toolkit

 -- NOW WE HAVE TO CREATE A STORE AND SLICE -- 
 //FIRST SLICE --
let slice1 have -- Slice1 -- we have    count  = 0 ; reducers -- incre , decre , reset ====== now how to convert this slice into code slice 

 so first we have to create a Slice -- 
 the code be like -- 
 import { createSlice } from "@reduxjs/toolkit";


const reactslicer = createSlice({

    name : "slice1",
    initialState : {count: 0},                     //we treat this count as object that's why we use callback in reducers function 
    reducers : {

        Increment : (state)=>{state.count = state.count + 1}, 
        Decrement : (state)=>{state.count = state.count - 1},
        Reset : (state)=>{state.count = 0},
    }
})


NOW WE CREATE A STORE AND PUT THIS SLICE INTO IT === 

create Store.js
then import {configStore} from "reduxjs/toolkit"



