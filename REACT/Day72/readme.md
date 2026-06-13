Today we talk about state Lifting -- 

lets take an example -- 
suppose u make a function in which u have count useState which is used to update the count as a Parent 

then what u do is u can't make button in parent u make in the child 
as a parent u passed ur state variable as a props in child so that child can access count , setcount state variable then ur child access it 

now the child have that statevariable too now parent have nothing 
Also remember only parent can call their child and give him props not vice versa

now u have a condition suppose this parent have other child 2 and he wants child one statevariable access of counts how can he do it
there is no acccess between these 2 sibling 
even child 1 can't give anything to parent too 

if u import child 2 into child 1 
and in child 1 u call child 2 with props 
it will not work it creates 2 decrement button 

we know in child 1 we have state variable of count like const [count , setcount] = usestate(0);
what we do is we put this state variable into the parent now both child will access 

OR 
basically what we are doing we make state variable for child but we declare it in parent basically we are doing the state lifing 
so that other child2 also get same variable 


this u will face in real life problems like u want to access a variable of a specific child then u put that statevariable into the parent one so that other can access


basically if we want that both child access to one stateVariable then we have to give statevairable to unique ancestor like parent 
THIS IS CALLED STATE LIFTING 


lets take an example -- 
we make parent that is first.js in which we have state variable then we pass to 
second.js with props then it pass to 
third.js with props 

if we do change in first.js then it reflect in third.js 

the way we are sending props is called PROPS DRILLING 

but suppose if we want to change only in a particularly js file 
like suppose second.js , third.js dont want that props still he is getting it 
that is wrong everytime there is Props Drilling 
suppose there is a change in fifth.js then we have to render then second , third , also gonna be render that is wrong
so to control this we have a hook that is useContext();


now move to useContext() hooks -- 

it lets u read and subscribe to ur context from ur component

because of it we can use state variable of parent directly into fifth.js there is no middle man 

if we make a Global file in which we have all state variable and if there is any change in parent state variable it reflect in this too also any js file can access this GLOBAL FILE directly without any props

syntax be like -- 

first make a global.js filr then write 
import {CreateContext} from "react";
const GlobalContext = createContext("Rohit");
export default GlobalContext ;


then onto which file u want this data then u have to write 

import GlobalContext from "./"
import {useContext} from "./"  -- this is react hook

const data = useContext(GlobalContext);  -- this line says useContext takeout data from GlobalContext basically this GlobalContext is a Object and to take out value from this we use useContext 

u can use this data now into {data}

now the question is how we put the statevariable that is the main thing in the global file so that any js file can access it 


for this we do  --
in parent.js first import globalcontext from react
import usecontext from react

then in 
const [count , setcount] = useState(0);
<>
<GlobalContext.Provider value = {{counts: count , setcounts : setcount}}> 
whatever i am providing u plz give access to child and its child too
<GlobalContext.Provider/>
</>

//we have to send in the form of object okk
//if key value is same then u can write this too {{count , setcount}}

and make sure the previous data that u put into it gonna be remove and fill with the statevariable one

and now i want to use this statevariable into other js file then u have to write 

const {data} = useContext(GlobalContext);

we put {} into data because we know it gonna return an object so we write directly 


const {count , setcount}  = useContext(GlobalContext);
we know GlobalContext give us Object that's why we use this 

remember whatever wrap into this gonna have access of statevariable 
<GlobalContext.Provider value = {{counts: count , setcounts : setcount}}> 
whatever u put here have access of this statevariable 
<Second></Second> -- it have access and their child too
<GlobalContext.Provider/>

we cannot put directly this statevariable into global.js because of value updatation we know when this set update it gonna rerender function for updation that's why we use here


FINAL LIKE -- 

if u want to update teh context then do in this
<GlobalContext.Provider value = {{counts: count , setcounts : setcount}}> 
whatever u put here have access of this statevariable 
<Second></Second> -- it have access and their child too
<GlobalContext.Provider/>


it is not necessary to put only object u can put anything value , number , strint
and remember only wrap up function can access it value not all

like if u have diff random.js file that is outside this Global.provider it can't access this statevariable they can access the old value that is sahil in this case

//first create a createContext
//Provide data using Destructor
//Consume the context

