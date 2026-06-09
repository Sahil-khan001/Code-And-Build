import React , {useState , useEffect , useCallback , useMemo} from "react";
import ReactDOM from "react-dom/client";

function App(){
    
    const [count , setcount]  = useState(0);
    const [number , setnumber] = useState("");
    const [Result , setResult] = useState("");

    //function for fibonacci
    // function fibo(n){
    //    if(n <= 1){
    //     return n;
    //    }
    //    return fibo(n-1) +fibo(n-2);       
    // }

    //or
    const fibo = useCallback((n)=>{
       if(n <= 1){
        return n;
       }
       return fibo(n-1) +fibo(n-2);       
    },[])//u can write this to impress interviewer

    // const result = useMemo(()=>fibo(number),[number]); //it means this function only run when there is change in number otherwise it gives us old function value with the help of closure concept 

    const result = useMemo(()=>fibo(number), [number])
    //   useEffect(()=>{
    //  setResult(fibo(number));
    // }, [number])


    return (
        <>
        <h2>Count is : {count} </h2>
        <button onClick={()=>{setcount(count + 1)}}>Increment</button>
        <button onClick={()=>{setcount(count -1)}}>Decrement</button>


        <h2>Fibonacci no : {result}</h2>
        <input type="number" placeholder="Enter the value" value={number} onChange={(e)=>{setnumber(e.target.value)}}/>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

//fully optimize we use memo to save 1 re render 

// import React , {useState , useEffect , useCallback , useMemo} from "react";
// import ReactDOM from "react-dom/client";



// function App(){

//     const [count , setcount] = useState(0);
//     const [number  , setnumber] = useState("");
//     const [result , setresult] = useState("");

//     function fibo(n){
//         if(n<=1){
//             return n ;
//         }
//         return fibo(n-1) + fibo(n-2);
//     }

//     useEffect(()=>{
//         setresult(fibo(number));
// },[number])
    
//     return (
//         <>
//         <h2>Count is : ${count}</h2>
//         <button onClick={()=>setcount(count + 1)}>Incre</button>
//         <button onClick={()=>{setcount(count -1)}}>Decre</button>

//         <h2>fibo is : {result}</h2>
//         <input type="number" placeholder="enter the number" value={number} onChange={(e)=>{setnumber(e.target.value)}} />
//         </>
//     )
// }



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);