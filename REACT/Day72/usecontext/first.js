// import Second from "./second";

// function First({counts , setcounts}){
//     return (
// <>
// <h2>first child count is :{counts} </h2>
// <button onClick={()=>{setcounts(counts + 1)}}>Increment</button>
// <Second  counts = {counts} setcounts = {setcounts}         />
// </>
//     )
// }
// export default First;

//AFTER USING GLOBALCONTEXT 

import Second from "./second";
import GlobalContext from "./Global";
import { useContext } from "react";

function First(){
    const {count , setcount} = useContext(GlobalContext);

    return (
<>
<h2>first child count is :{count} </h2>
<button onClick={()=>{setcount(count + 1)}}>Increment</button>
<Second/>
</>
    )
}

export default First;
