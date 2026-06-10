import React from "react";

function Decrement({counts , setcounts}){
    return (
        <>
        <h2>count is : {counts}</h2>
        <button onClick={()=>setcounts(counts -1)}>Decrement</button>
        </>
    )
}

export default Decrement;