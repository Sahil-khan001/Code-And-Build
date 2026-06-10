// import GlobalContext from "./Global";
// import { useContext } from "react";



// function Second({counts , setcounts}){
//     const data = useContext(GlobalContext);
//     return (
// <>
// <h2>second Child count is :{data} </h2>
// <button onClick={()=>{setcounts(counts + 1)}}>Increment</button>

// </>
//     )
// }

// export default Second;
import GlobalContext from "./Global";
import { useContext } from "react";



function Second(){
    const {count , setcount} = useContext(GlobalContext);
    return (
<>
<h2>second Child count is :{count} </h2>
<button onClick={()=>{setcount(count + 1)}}>Increment</button>

</>
    )
}

export default Second;