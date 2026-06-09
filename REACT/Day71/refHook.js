import React , {useState , useEffect , useCallback , useMemo , useRef} from "react";
import ReactDOM from "react-dom/client";

function App(){

   const [count , setcount] = useState(0);
   let money = useRef(0);

   return (
    <>
    <h2>Count is : {count}</h2>
    <button onClick={()=>{setcount(count+1)}}>Incre</button>

    <h2>Money is : {money.current}</h2>
    <button onClick={()=>{money.current = money.current + 1 }}>moneyINcre</button>
    </>
   )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);