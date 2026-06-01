import { useEffect, useState } from "react";

function Body(){

const [Profile , setProfile] = useState([]);
console.log('data is fetching');

async function generateProfile() {
    const count = 20;
    const data = await fetch(`https://api.github.com/users?per_page=${count}`);
    const finalData = await data.json();
    setProfile(finalData) ;
}

useEffect(()=>{
    generateProfile();  //we have to use useEffect here because so it can't give re render issue to us and it run only 1 time acc to dependencies 
}, []);

//now data is there -- how we have to take data acc to our need 

return (
<div className="Card-outer">
{
    Profile.map((value)=>{
        return (
            <div className="Card" key = {value.id}>
                <img src= {value.avatar_url}  />
                <h2>{value.login}</h2>
                <a href={value.html_url} target="_blank">Profile</a>
            </div>
        )
    })
}
    </div>
)




}

export default Body;