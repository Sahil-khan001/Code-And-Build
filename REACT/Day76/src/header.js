import { useSelector } from "react-redux"

export default function Header(){

    const count = useSelector((state) =>state.slice1.count)
    return (
    <div style={{border : "2px solid black" , display : "flex" , justifyContent : "center" , alignItems : "center"}}>
        <h1>Swiggy</h1>
        <h2>Cart :{count}</h2>
    </div>

    )
}