// import { useState } from "react";

// function Child(){
//     const [count , setcount] = useState(0);
//     return (
//        <>
//         <h1>count is  : {count}</h1>
//         <button onClick={()=>setcount(count + 1)}>Increment</button>
//         <button onClick={()=>{setcount(count - 1)}}>Decrement</button>
//           </>
//     )
// }

// export default Child;

import { useState } from "react";

function Child({value}){
    const [count , setcount] = useState(0);
    return (
       <>
        <h1>{value}: {count}</h1>
        <button onClick={()=>setcount(count + 1)}>Increment</button>
        <button onClick={()=>{setcount(count - 1)}}>Decrement</button>
          </>
    )
}

export default Child;

