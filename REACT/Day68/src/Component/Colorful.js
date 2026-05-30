import React , {useState , useEffect} from "react";
function Colorful(props){

    let [color , setcolor] = useState("black");
    console.log("render");
    console.log(props.name);

    useEffect(()=>{
        console.log("after use effect rendering only one time");
        document.body.style.backgroundColor = color;
    }, [color])

    //when this color change then it execute

    
   
    return(
        <div className="final">
        <h1 className="h11" >BACKGROUND COLOR CHANGER</h1>
        <div>
       <button className="butt" style={{backgroundColor : "red"}} onClick={()=> setcolor("red")}>Red</button>
       <button className="butt" style={{backgroundColor : "green"}} onClick={()=> setcolor("green")}>Green</button>
       <button className="butt" style={{backgroundColor : "blue"}} onClick={()=> setcolor("blue")} >Blue</button>
       <button className="butt" style={{backgroundColor : "orange"}} onClick={()=> setcolor("orange")}>Orange</button>
        </div>
        </div>
    )
}

export default React.memo(Colorful);