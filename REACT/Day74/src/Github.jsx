import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

export default function Attach(){

    const {name} = useParams();

    const[profile , setprofile] = useState(null);

    async function FetchData(){
        const response = await fetch(`https://api.github.com/users/${name}`);
        const data = await response.json();
        setprofile(data);
    }


    useEffect(()=>{
     FetchData();
    },[])











    return (
        <>
        <h1>THIS IS GITHUB PROFILE</h1>
        <div>
            <img src= {profile?.avatar_url} />
            <h2>{profile?.html_url}</h2>
        </div>
        </>
    )
}
