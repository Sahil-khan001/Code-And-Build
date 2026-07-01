
import { useSelector } from "react-redux";

export default function Checkout(){
 
     const data = useSelector((state)=> state.Slice1.items);

    return (
        <>

        {
            data.map((value)=>{
                return (
                    <div key={value.id}>
                    <h1>{value.name}</h1>
                    <h1>{value.quantity}</h1>
                   </div>
                )
            })
        }
        
        
        </>


    )
}