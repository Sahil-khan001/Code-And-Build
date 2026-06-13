//LETS TALK ABOUT HOOKS--

USEMEMO -- It lets u cache the result of a calculation between re renders


//lets make 
//counter button : increases
//Input field : Fibonacci Series
// 0 1 1 2 3 5 8 13 21 34



so what happened we make these two counter button , input field

In fibonacci function  when we input big values into it then it represent value with more time and the page become irresponsive 
it create problems the web page dont even fully update

because of this when we click on Increment and Decrement Button it is even take 3-4 seconds to update value on ui just because of fibonacci func

what happened when we click on inc button then it re render whole function then while rerender it have to calculate the fibonacci and it takes time then it update the count value 
so to resolve this -- we can use useEffect also -- how it helps we put fibnacci fun in useeffect it only render when number is changed ohterwise no need to render


now -- useMemo -- It lets u cache the result of a calculation between re renders
SO how we ue this in code is -- 


    const result = useMemo(callBackFunction, [number]);
    //it means when there is a change in number then call this callback function 
   eg .  
    const result = useMemo(()=>fibo(number), [number]);

    now after using this fibonacci gets old value and there is no overload on count now fibo only run when there is a change in its value 


    //but if we want to useEffect then --
    
    we know that it execute at last 
    also we have to make state variable for this 

    const [Result , setResult] = useState("");

    useEffect(()=>{
     setResult(fibo(number));
    }, [number])

it take 1 more time of re-rendering just to update the result value so that's why we use useMemo();

plz dont do this otherwise how u gonna update the value so we have to use setResult 
 useEffect(()=>{
     result = fibo(number);
    }, [number])


--at the end we use useMemo when we have to save the calculations 

  //function for fibonacci
    function fibo(n){
       if(n <= 1){
        return n;
       }
       return fibo(n-1) +fibo(n-2);       
    }
even everytime this function also rerender again and again u can use callback()  to prove that u know callback and stop creation this function again and again 

or 2n option is 
put this function outside the main function that is in the GLOBAL SCOPE now it will create only once


ALSO REMEMBER ONE THING -- u can use both useMemo and usecallback() -- because use memo says function only run when there is change in number means its values 
but in usecallback() -- we use this to stop the creation of function again and again to stop new allocation again and again 

Your main issue is here:

const result = useMemo(()=>{fibo(number)}, [number])

When you use {} inside an arrow function, you must explicitly return something.

Right now your function returns undefined.

Correct version:

const result = useMemo(() => {
    return fibo(number);
}, [number]);

OR shorter:

const result = useMemo(() => fibo(number), [number]);

<!-- -- ---------------------------------------------------------------------------------------------------------------- -->


LETS TALK ABOUT useRef hooks -- 


function App(){

    const [count , setcount] = useState(0);
    let money = 0 ;
    return(
        <>
        <h2>Count is : {count}</h2>
        <button onClick={()=>{setcount(count + 1)}}>Increment</button>

        <h2>Money is : {money}</h2>
        <button onClick={()=>{money = money + 1,
         console.log(money)
            
        }}>Decrement</button>
        </>
    )
   
}

what happened in this on ui money is not presenting 
but in console it printing it start from 1,2,3,4,5

when click on increment of state variable it start from where it left off
but for money it start again from 1 

because we not use state variable for money because state variable maintain previously state/data so that it can continue it 

now we want old value 
we want money should sustain the old value after re render it not lost that last value 
so that it can hold the last value 
how we do it 
if money get reference of old value 
same like other hooks use usecallback , useMemo that uses old reference

we use -- 

const money = useRef(0);

this ref gives u a object and in this object the value is in the current key 
so u have to write money.current to access this value

the useRef -- dont make ur function to re render 
it dont re render -- it hold the value 

when setcount re render the function then it hold old value and and show on UI

-- it hold the value across the re render 

<!-- --------------------------------------------------------------------------------------------------------------------------------------------- -->

LETS MAKE STOPWATCH ---

tips --

you can do any one of them  
  <!-- <button onClick={start}>Start</button>
                 or 
    <button onClick={()=>{start()}}>Start</button> -->

import React , {useState , useEffect , useCallback , useMemo , useRef} from "react";
import ReactDOM  from "react-dom/client";


function StopWatch(){

    const [time , setTime] = useState(0);


    function start(){
     setInterval(() => {
        setTime(time + 1);
     }, 1000);
    }

    function Stop(){

    }

    function Reset(){

    }

    return (
        <>
    <h1>Time is : {time}</h1>
    <button onClick={start}>Start</button>
    <button onClick={stop}>Stop</button>
    <button onClick={Reset}>Reset</button>
  </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
<!-- root.render(<StopWatch/>) -->
    so what happened with this code when 

    when we click on button it goes into start function 
    this function have setInterval which call setTime = time + 1 
    after every 1 seconds then first time it call then it re render the whole function that is Stopwatch 

    now it allocates new memory and new function this function update values at everwhere but but the old stop function still calling that same settime = time + 1 again and again ur value is 0+1 is 1 everytime 

    it sends settime = 1 everytime
    because this function have old value set

    now we want this old function can take updated values so for this 
    like recent time value that is 1 ,2 

    so we have one more thing in state hook that is at the time of update state we have a call back function too

    //Call back function returns a value always remember 

    setTime((prevTime) => prevTime + 1);
    it give u the latest value it take latest value from new function and give it here means the callback return a final value it (prevTime) -- this one take latest value from new function and give us latest one

    some people write in this way too
    setTime(prevTime=> prevTime + 1);

 if u want the latest value then callback gives u the latest value 

 //now if we want to stop it 

 
    function start(){
     setInterval(() => {
        setTime(time + 1);
     }, 1000);
    }

    then we can use clearInterval() but for this we want reference of this function 
    so we make it like this 

     const reference = useRef(null);
    function start(){
    reference.current =  setInterval(() => {
        setTime((prevTime)=> prevTime + 1);
     }, 1000);
    }

    function Stop(){
    clearInterval(reference.current);
    reference.current = null;
    }

    basically now we have reference of old function if we do clearInterval of that function then stopwatch stop at last updated time 

    //now we check how to reset 

    for this we use old statements 

    function reset(){
    clearInterval(reference.current);
    reference.current = null;
    settime(0);
    }

    //we just have to write settime = 0

NOTE -- 
    //it means first delete that old function then 
    //make it reference null
    //and settime = 0;



    //query for reference 
    for stop -- how u stop time -- how we can stop setInterval -- using clearInterval-- it take reference of setInterval
    that's why we use useRef() 

    ///NOW TELL ME --
    //When we click on start button the the time increase by 1 sec 
    //suppose when we click 2nd time then in 1st first setInteval start then in 2nd 2nd setInterval start and 3rd the third one start and this series going again and again 

    //that's why everyinterval update the value and it moving fast 

    now how to manage these SetInterval -- 

    for this what we do is if we check if a setinterval is working then we can't give permission to others  
    we use 
    const [isRunning , setisRunning] = usestate(false);


    intially no one interval is running
    if(!isRunning){
      start interval 

    }

    setisRunning(true);

    when no interval is executing then we start this interval and condition is true so no other will come

 for stop button

if(isRunning){
    clearInterval.reference.current 
    reference.current = null

}
setisRunning(false);

when clock is running then we do this otherwise nothing happen

const [isRunning , setisRunning] = useState(false);
isRunning → stores value (true or false)
setisRunning() → changes that value

Initially:

isRunning = false

means:

❌ Stopwatch is NOT running.

When you click Start
if(!isRunning)

means:

“If stopwatch is NOT running, then start interval.”

So first time:

!false = true

therefore interval starts.

Then:

setisRunning(true);

means:

✅ “Now stopwatch is running.”

Why this is needed?

Without this check:

Every click on Start creates a NEW interval.

Example:

First click → +1 every second
Second click → another interval starts
Third click → another interval starts

Then timer becomes:

1
3
6
9

very fast 😅

So isRunning prevents multiple intervals.

Stop button
setisRunning(false);

means:

❌ Stopwatch stopped.

Now Start button can create interval again.



