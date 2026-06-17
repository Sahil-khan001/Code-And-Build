-- REMEMBER THIS REDUX LIBRARY USE WITH DIFF TECHSTACK ALSO
TODAY LETS TALK ABOUT --REACT REDUX -- 

first we studied -- props drilling
then we studied like 1 component access another component state using props drilling Basically we do StateLifting means we find a common ancestors and put state management into it  then we upgrade it to Contextapi and we put our state into a global context whatever component needs it can access it using import means now component a can pass props component directly without b,c also 

that what Redux solve -- there is no props concept and there is no stateLifting also -- 

so redux make statemanagement easy -- 

instead of putting statement management in component we put all this in Redux Store/GeneralisedDatabaseCentre/GlobalObject and because of it any component can access it 

now u now these statevariables change also -- suppose component a want to increase count + 1 , b wants decrease count -1 
the problem is everycomponent have access of it 

//SO we make sure that this count variable can't be change 
because if a variable is access by many component then it is sure that there is happening of a mistake/accident changes so nobody can't change that variable 
so for this what we do is --
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

if we want to muted/change to a statevariable then we have to call the reducer functions 
but the single component dont have right to muted to a stateVariable

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

export default reactslicer.reducer; 
here we have to export it so that we can use it in store using import in store we have to write the reducers in which we have some functions into it 
in slice1 : which reducer function this slice1 have


--MAKE SURE UR SLICE NAME MUST BE UNIQUE so that dispatch easily find it acc to u


NOW WE CREATE A STORE AND PUT THIS SLICE INTO IT === 

create Store.js
then import {configStore} from "reduxjs/toolkit"
import slice1reducer from "./slice1"; ----------------u can write any name u just have to import that slice 

in store we need to match the slicer and the reducer

const stores = configStore({
reducers : {
    slice 1 : slice1reducers, ---------this slice 1 include slice1reducers functions 
}

})

how we check this slice name is unique for this u have to see in the store and check now store2 turn now i have to use store3 

basically u send the function in dispatch we check this function belong to which slice then we check and execute function acc to us 

Now we create slices and we put it into the store as well
now move to the main file -- we see {count} now we gonna access this count from slice 1 so for this we use useSelector()

it import from react-redux 
impore {useSelector} from react-redux;

const count = useSelector((state)=>state.slice1.count);

now what is this state -- it represent GlobalState -- it contains all the state variable it looks like 
const state = {
    slice1 : {
        count : 0;
    } , 
    slice2  : {
        count : 2;
    },
}


so for this we have hook that is useSelector which is used to get the statevariable values from the redux slice 
this hooks gives us power to get values from redux slice 
it give u GlobalState -- now u have access of all the state u can access acc to urself 

also u have to write 
 const dispatch = useDispatch();
it also import from "react-redux";
it connect react - redux

also we have to use this in button too while clicking on it 
<>
   <!-- <h1>Count is {Count}</h1>
   <button onClick={()=>{dispatch(Increment())}} >Increment</button>
   <button onClick={()=>{dispatch(Decrement())}} >Decrement</button>
   <button onClick={()=>{dispatch(Reset())}} >Decrement</button> -->
</>

now u think from where it is comming dispatch now for this we have to export these functions in slice file by writing this 

import { createSlice } from "@reduxjs/toolkit";


const Slice1 = createSlice({
    name : "Slice01",
    initialState : {count : 0},
    reducers : {
       Increment : ((state)=>{state.count = state.count + 1}),
       Decrement : ((state)=>{state.count = state.count - 1}),
       Reset : ((state)=>{state.count = 0}),
    }
})
export const{Increment , Decrement , Reset} = Slice1.actions;
export default Slice1.reducer;

the Slice1.actions gives u all the function that u mentioned 
then u have to import it in main.js file and use it as i said previously

now at LAST in the final file where u are calling ur counting file u have to import something like 
import {Provider} from "react-redux";
import stores from "./stores";

this store is this redux store it looks like 
import { configureStore } from "@reduxjs/toolkit";
import Slice1 from "./Slicer1"

const store = configureStore({
 reducer :{
    slice1 : Slice1,
 }
})

import {Provider} from "react-redux";
import stores from "./stores";

after this we have to write <Provider></Provider> and wrap <counting></counting>
into it and remove the <></> from it 

 <Provider store = {stores}>
 <counting></counting>
 </Provider> 

and we have to pass the store into the Provider so that whatever u wrap into this provide can access to this store and its state variables with props drilling concept as we see in the GLOBALcontext or useContext hooks 

DOUBTS -- 

1. 
<>
   <!-- <h1>Count is {Count}</h1>
   <button onClick={()=>{dispatch(Increment())}} >Increment</button>
   <button onClick={()=>{dispatch(Decrement())}} >Decrement</button>
   <button onClick={()=>{dispatch(Reset())}} >Decrement</button> -->
</>


now in this we passing the function call with the dispatch but how dispatch know this increment() belong to which slice 
when u print this in console.log(increment()) then it show type slice1 it means he have info about in which slice i have to go to execute


2. in this file
import { createSlice } from "@reduxjs/toolkit";


const Slice1 = createSlice({
    name : "Slice01",
    initialState : {count : 0},
    reducers : {
       Increment : ((state)=>{state.count = state.count + 1}),
       Decrement : ((state)=>{state.count = state.count - 1}),
       Reset : ((state)=>{state.count = 0}),
    }
})
export const{Increment , Decrement , Reset} = Slice1.actions;
export default Slice1.reducer;

why we take this functions in this way from Slice1.actions 
we can also take this in diff way too like Slice1.reducers.Increment but we do in this way because this Slice1.actions contain something important 4


Everything is an Object 
this store is an Global Object

redux toolkit -- it is used to create slice and store
react-redux -- if u want to use hooks like useSelector() , useDispatch() 
it connect redux and react 














