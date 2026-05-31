import React , {useState , useEffect} from "react";
import ReactDOM from "react-dom/client";

//Password : hfsdjjfd , setPassword
//length : 10 , setLength
//numbertick : false , setnumbertick
//Charactertick : false , setcharactertick 


function PasswordGenerator(){

    const [Password , setPassword] = useState('hfsdjjfb');
    const[length , setlength] = useState(10);
    const[numbertick , setnumbertick] = useState(false);
    const[Charactertick , setcharactertick] = useState(false);


    function generatePassword(){
        let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if(numbertick){
            str+= '0123456789'
        }
        if(Charactertick){
            str+= '!@#$%^&*()'
        }

        let pass = "";

        for(let i = 0 ; i<length ; i++){
          pass +=  str[Math.floor(Math.random()*str.length)]
        }
        setPassword(pass);
    }

    useEffect(()=>{
        generatePassword();
    }, [length , numbertick , Charactertick])

    return (
        <>
        <h1 style={{marginBottom : "10px"}}> {Password}</h1> 
         <div >
          <input type="range" min={5} max={50}  onChange={(e)=> setlength(e.target.value)}></input>
          <label>Length is : {length} </label>
    
          <input type="checkbox" defaultChecked = {numbertick} onChange={()=> setnumbertick(!numbertick)} ></input>
          <label>Number </label>

          <input type="checkbox" defaultChecked = {Charactertick} onChange={()=>setcharactertick(!Charactertick)} ></input> 
          <label>Characters </label>
          </div>
        </>
    )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PasswordGenerator/>);

