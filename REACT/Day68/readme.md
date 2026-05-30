Lets talk about HOOKS IN DETAIL AND THEIR WORKING 

-- whenever any programme execute first it get memory allocation then it execute as we saw this as previous 

-- we see how this usestate hooks work 

--for this theory refer to index.html code 
first main function execute then color set 

color = "black"
re-render -- call the main function again 
setColor = "orange"

this orange color put it into useState then new memory execute and variable take new color then render it to dom

re-render means calling the function again 

means whenever u click on button it render/call function we see this in console.log u can check it too

basically it render same button 2 times only 
//when u click on red button -- it render 
//when u click 2nd time -- it again re-render but third 3 it not 
//it can allow u one time not again 
//because if u run function again and again then ur memory is allocated , memory usage , cpu processing and waste we know react is for optimization so it allow one time dont next time
//this term is called bail out -- one time allowed then bailout 

//whenever ur state is change it gonna render through , function that is setColor this one 

--also it dont allow on -- array  , object b/c of same reference

   document.body.style.backgroundColor = color;
   now this line also run 2 times when render again and again on same button 

so for this we have useEffect() - 

we do this -- useEffect(()=>{
   document.body.style.backgroundColor = color;
} , [color])

it take a call back function , with depedencies 

//it executed in the LAST u can check it also 
//after all the code it gonna execute at last



//this useDependencies array is Empty then it never gonna be executed 
//Dependencies means when we change then run the call back function of useEffect
//like this this the depedencies is color so when this color change then it run 

//if u not give depedencies then it run everytime 
//if u give empty array -- then it run one time

//IF ANY CHANGE IN DEPENDIES THEN IT GONNA RUN 


lets make another count increament code align with background color changer lets see 
//if u change anything in Parent function then child function also gonna execute

import { useEffect } from "react";
import React, { useState , useEffect}  from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./Component/Colorful";

function Main(){

    let [count , setcount] = useState(0);
 
    return(
    <>
    <div className="colorbar">
        <h2>Count is ${count}</h2>
        <button onClick={()=>setcount(count + 1)}>Incre</button>
    <Colorful/>
    </div>
    </>

    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
<!-- root.render(<Main/>) -->

from this code we see when we click on set count button then whathappened it gonna do re rendering means whole function call new memory , code execution it execute whole code in whole code we have colorful call is there so it gonna also exextue

so that's it appears its result also on the console log also
itshow  when we change in Parent then changes also appear on child and it code 

//but if u want to not to change on the full code like u dont want any change on function then 

//so for this we have a hook that is -- 
React.memo();

where to use this -- 

so u have to use this while importing like or in exporting 
like u want not to change anything in the colorful function then in colorful component into its file at last with export u have to write like --

export default React.memo(Colorful);

because of this there is no changes in the child function when u use the parent one 
u can check it out 


--for the first time it gonna be execute to display the things but after it it stop 

also u can't use everwhere this react.memo because it is as a overhead
//it also takes space memory so use it efficiently 


also if u are using props in child and if the value is changes then it can render whole child function too
React.memo allow this function to be render if there is props value is changing

--use react memo when parent do a lot of changes and u dont know that much changes in the child then react.memo


