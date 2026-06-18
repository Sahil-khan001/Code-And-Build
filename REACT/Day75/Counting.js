// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Increment, Decrement , Reset } from "./Slicer1";

export default function Counting(){
    // const[Count , setCount] = useState(0); after using useSelector 
    const Count = useSelector((state)=>state.slice1.count);
    const dispatch = useDispatch();

    return (
<>
   <h1>Count is {Count}</h1>
   <button onClick={()=>{dispatch(Increment())}}>Increment</button>
   <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>
   <button onClick={()=>{dispatch(Reset())}}>Reset</button>
</>


    )
}

