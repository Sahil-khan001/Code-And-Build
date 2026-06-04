import { useEffect, useState } from "react";

function Body(){

const [Profile , setProfile] = useState([]);
// const [numberOfProfiles , setnumberOfProfiles] = useState("");
const [ProfileName , setProfileName] = useState("");

async function SearchWithName(name) {
    try{
    const data = await fetch(`https://api.github.com/users/${name}`);
    const finalData = await data.json();

if(finalData.message === "Not Found"){
   alert("Profile Not Found");
   return;
}
    setProfile([finalData]) ;
    }catch(err){
        console.log("YOUR GITHUB API IS COMPLETE");
    }
}

async function RandomProfiles(count) {
    try{
    let randomm = Math.floor(Math.random()*10000 + 1);
    const data = await fetch(`https://api.github.com/users?since=${randomm}&per_page=${count}`);
    const finalData = await data.json();

    setProfile(finalData) ; //because of this function again re render and move to Profile.map line to update it successfully  to show DATA on UI
    }catch(err){
        console.log("YOUR GITHUB API IS COMPLETE");
    }
}

useEffect(()=>{
    SearchWithName("sahil");  //we have to use useEffect here because so it can't give re render issue to us and it run only 1 time acc to dependencies and generally when we fetching data we only fetch it for 1 time
    RandomProfiles(5);

}, []);

//now data is there -- how we have to take data acc to our need 

return (
    <div className="searchOuter">
   <input type="text" placeholder="Search For Profiles : Random or Name" className="Inp" value={ProfileName} onChange={(e)=> setProfileName(e.target.value)}/>
   <button className="butt" onClick={()=>RandomProfiles(Number(ProfileName))} >Random</button>
   <button className="butt" onClick={()=>SearchWithName(ProfileName)}>Search with Name</button>


<div className="Card-outer">
{
    Profile.map((value)=>{
        return (
            <div className="Card" key = {value.id}>
                <img src= {value.avatar_url}/>
                <h2>{value.login}</h2>
                <a href={value.html_url} target="_blank">Profile</a>
            </div>
        )
    })
}
    </div>
    </div>
)




}

export default Body;