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
this store is an GlobalObject

redux toolkit -- it is used to create slice and store
react-redux -- if u want to use hooks like useSelector() , useDispatch()  
it connect redux and react 

this useSelector also known as -- Subscribe to an event -- means listen to an event


-- NOW WE SEE THIS THING WORK UNDER THE HOOD/INTERNALS -- 

 

 in this file
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


this actions contain -- {type : "slice/increment" , payload : }; 
when any functions goes to it store the store know its type like which slice he belong too

now we see what is this Slice1 like it is also an object also it contains lot of functions like actions , reducers , intitalState 

what is Slice1.actions -- so whenever we dispatch a function it move to store ans we have to determine that this function belong to which slice 
so normal function will not work so we ac use actions and it tells us that this functions belong to this slice and converted into this form
this actions contain -- {type : "slice/increment" , payload : }; 
that's why we export reactslicer.actions so that it tell us this functions belong to this slice 

as we know we have to write slice as well  with the functions in the dispatch so actions do this for us he created by itself and 


Store contains -- dispatch , subscribe -- when u get any data from the store it means u are subscribing to an event 

how this dispatch(Increment()) -- how store know that this increment() belong to which slice 
this increment() contain two thing 1st is type : slice 2nd is payload 
that's why when we extracted this functions from Slice1.actions it gives this functions two things that is type and payload 

this Slice1 which is creating the slice it itself is an Object contains -- m functions like -- actions , getInitial State , reducer , 


we use Slice1.actions -- we know when we pass an functions in dispatch we have to determine the store that this function belong to which slice this actions done this work for us it gives store converted action line that is 
{type : Slice1 / increment() , payload : undefined }


some people write this initial State like this -- 

const initialState = {
    count : 0 ,
}


const Slice1 = createSlice({
    name : "Slice01",
    initialState,
    reducers : {
       Increment : ((state)=>{state.count = state.count + 1}),
       Decrement : ((state)=>{state.count = state.count - 1}),
       Reset : ((state)=>{state.count = 0}),
    }
})


this initalState is also an Object 
we know that Object stored as an reference --

like if we modify and existing Object it can't update on ui
because it stored as a reference the reference is same it can't update the latest values it take previous value 
so for this we have to return a new array 

like  
const initialState = {
    count : 0 ,
}

it wants u to return like this new object  {
    count : 1 , 
}


but u see this code is working but it dont it because object is upating and it have to create a new Object
so it is because of 


const initialState = {
    count : 0 ,
}


const Slice1 = createSlice({
    name : "Slice01",
    initialState,
    reducers : {
       Increment : ((state)=>{state.count = state.count + 1}),
       Decrement : ((state)=>{state.count = state.count - 1}),
       Reset : ((state)=>{state.count = 0}),
    }
})

it is done by Immer 
IMMER said i am gonna muted/change ur Object without creating a new Object here without giving an problems 
but behind the scenes it is also created a new Object 

initially what we aare doing is --- 

const Slice1 = createSlice({
    name : "Slice01",
    initialState,
    reducers : {
       Increment : ((state)=>{
        return {...state, count : state.count+1}
       }),
       Decrement : ((state)=>{state.count = state.count - 1}),
       Reset : ((state)=>{state.count = 0}),
    }
})

in this way we are doing it basically we are returning the new Object
more internally what happened ...state 
it open the state {
    count : 0 ,   then u update 
    count : 1 ,     both are same so first one is remove and second is remain in this way and ur new object is created 
}
new returned object is -- state {
    count 1 ,
}


NOW BECAUSE OF IMMER we used to write like this --


const Slice1 = createSlice({
    name : "Slice01",
    initialState : {count : 0},
    reducers : {
       Increment : ((state)=>{state.count = state.count + 1}),
       Decrement : ((state)=>{state.count = state.count - 1}),
       Reset : ((state)=>{state.count = 0}),
    }
})


Immer -- it crate a DRAFT OF original object 
then whatever the change we want to do it changes in this Duplicate Object using the old method like ...state
then at last update all the changes from duplicate one to Original one and return it 

some people also write 
return state.count = state.count + 1  
state.count++;

these are wrong it give u error so either write this or this 
return {...state , count : state.count + 1};
or
(state) =>{state.count = state.count + 1};

immer tell us either muted in DRAFT 
or return me an object in old way like -- {...state , count : ..}


now lets make an input searchbar and click button 
when u click on button - the count value is increases utne sai 

import { useState } from "react"


export default function CustomerCustom(){
    const [Number , setNumber] = useState("");
    <!-- return (
        <>
        <input type="number" placeholder = "Enter the value"  value={Number} onChange={(e)=>{setNumber(e.target.value)}}/>
        <button>Submit</button>
        </>
    )
} -->


now u will be wondering why we use normal state hooks here why not create in Redux store in slice because we make statevariable in Redux Store when we need to use it multiple place 
but when we have to use  it only at one place then we create using hooks normal state variable 

now we want when we put value into this the count gonna be increases so for this we have to use useDispatch() -- 
and we have to pass the function into it so for this first we have to add a function into the slice functions 

CustomIncreaser : (state , actions) =>{state.count += }

we know that this action provide two thing type : slice/funciton , 2nd is payload -- it is nothing but arguments that u pass in the functions
like -- dispatch(CustomIncreaser(number))
this number represent the payload 

and in slice u have to write in function --
CustomIncreaser : (state , actions) =>{state.count += actions.payload}
like in call back it have two property that is state or actions 
and action have two type or payload 

code be like till now 

import { useState } from "react"
import { useDispatch } from "react-redux";
import { CustomIncreaser } from "./Slicer1";


export default function CustomerCustom(){
    const [Number , setNumber] = useState("");
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(CustomIncreaser(Number));
    }
    return (
        <>
        <input type="number" placeholder = "Enter the value"  value={Number} onChange={(e)=>{setNumber(e.target.value)}}/>
        <button onClick={()=>{handleClick()}}>Submit</button>
        </>
    )
}

import { createSlice } from "@reduxjs/toolkit";


const Slice1 = createSlice({
    name : "Slice01",
    initialState : {count : 0},
    reducers : {
       Increment : ((state)=>{state.count = state.count + 1}),
       Decrement : ((state)=>{state.count = state.count - 1}),
       Reset : ((state)=>{state.count = 0}),
       CustomIncreaser : ((state , actions)=>{state.count+=actions.payload})
    }
})
export const{Increment , Decrement , Reset , CustomIncreaser} = Slice1.actions;
export default Slice1.reducer;

now if we increment by 2 
then write 10 in input it show -- 210 instead of 12 why 
    dispatch(CustomIncreaser(Number));
    this is because of this type of this is string 
    it add as a string 2 + "10" -- 210 we have to convert it into number like this 
        dispatch(CustomIncreaser(Number(number)));
        
now it will work 


--NOW U SEE FROM DIFFERENT COMPONENT U CAN USE SAME COUNT STATE VARIABLE from the store acc to requirements 
BOTH ARE MANUPULATING  THE COUNT PERFECTLY 

useselector -- whatever changes happend in state count variable it gonna reflect in the count too 






