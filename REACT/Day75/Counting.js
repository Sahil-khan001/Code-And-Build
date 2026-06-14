import { useState } from "react"

export default function Counting(){


const[Count , setCount] = useState(0);
    return (
<>
   <h1>Count is {Count}</h1>
   <button onClick={()=>{setCount(Count + 1)}} >Increment</button>
   <button onClick={()=>{setCount(Count - 1)}} >Decrement</button>
</>


    )
}

