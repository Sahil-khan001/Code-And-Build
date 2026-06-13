import React , {useState , useEffect , useCallback , useMemo , useRef} from "react";
import ReactDOM  from "react-dom/client";


function StopWatch(){

    const [time , settime] = useState(0);
    const interrefer = useRef(null);

    const [isRunning , setisRunning] = useState(false);

function start(){
    if(!isRunning){
 interrefer.current =  setInterval(() => {
        settime((prevtime) => prevtime + 1);
    }, 1000);
}
setisRunning(true);
}

function stop(){
    if(isRunning){
clearInterval(interrefer.current);
interrefer.current = null;
    }
    setisRunning(false);
}

function reset(){
clearInterval(interrefer.current);
interrefer.current = null;
settime(0);
}

    return (
        <>
        <div className="outer">
        <h2>Time is : {time}</h2>
        <button className="but" onClick={()=>start()}>Start</button> 
        <button className="but" onClick={()=>{stop()}}>Stop</button>
        <button className="but" onClick={()=>{reset()}}>Reset</button>
        </div>
        </>
    )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StopWatch/>)
