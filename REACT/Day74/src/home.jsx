import React , { useState } from "react";
import { Link } from "react-router-dom";

export default function Home(){

    const [name , setname] = useState("");

    return(
        <>
        <input 
        type="text"
        value={name}
        onChange={(e)=> setname(e.target.value)}
        />

        <Link to={`/Github/${name}`}>
            <button>Go To Profile</button>
        </Link>
        </>
    )
}