import React , {useState , useEffect , useCallback , useMemo , useRef} from "react";
import ReactDOM  from "react-dom/client";


function StopWatch(){

    const [time , setTime] = useState(0);
    const reference = useRef(null);


    function start(){
    reference.current =  setInterval(() => {
        setTime((prevTime)=> prevTime + 1);
     }, 1000);
    }

    function Stop(){
    clearInterval(reference.current);
    reference.current = null;
    }

    function Reset(){

    }

    return (
        <>
    <h1>Time is : {time}</h1>
    <button className="butt" onClick={start}>Start</button>
    <button className="butt" onClick={Stop}>Stop</button>
    <button className="butt" onClick={Reset}>Reset</button>
  </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StopWatch/>)