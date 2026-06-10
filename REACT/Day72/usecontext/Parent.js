// import React,{useState , useEffect , useCallback} from "react";
// import ReactDOM from "react-dom/client";
// import First from "./first";



// function Parent(){
  

//    const[count, setcount] = useState(0); 

//     return (
// <>
// <h1>THIS IS PARENT</h1>
// <First counts = {count} setcounts = {setcount}/>
// </>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Parent/>)

//AFTER USING GLOBAL CONTEXT
import React,{useState , useEffect , useCallback} from "react";
import ReactDOM from "react-dom/client";
import First from "./first";
import GlobalContext from "./Global";



function Parent(){
  

   const[count, setcount] = useState(0); 

    return (
<>
<GlobalContext.Provider value= {{count , setcount}} >
<h1>THIS IS PARENT</h1>
<First/>
</GlobalContext.Provider>
</>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent/>)