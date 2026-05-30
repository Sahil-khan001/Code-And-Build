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
    <Colorful name = "sahil"/>  //if props not change then dont render it 
    {/* <Colorful name = {count}/> //because of this now it render the child function as well */}
    </div>
    </>

    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>)