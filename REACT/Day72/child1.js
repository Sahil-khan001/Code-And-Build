import React, {useState} from "react";

function Child({counts , setcounts}){
    return (
<>
<h2>Child count is :{counts} </h2>
<button onClick={()=>{setcounts(counts + 1)}}>Increment</button>
</>
    )
}

export default Child;
