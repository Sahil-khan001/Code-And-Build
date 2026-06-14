import { useState , useEffect} from "react";
export default function Fetch(){

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
    // SearchWithName("sahil");  //we have to use useEffect here because so it can't give re render issue to us and it run only 1 time acc to dependencies and generally when we fetching data we only fetch it for 1 time
    RandomProfiles(5);

}, []);

return{Profile , ProfileName , RandomProfiles , SearchWithName , setProfileName}
}

//now data is there -- now we have to take data acc to our need 
