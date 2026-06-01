import React , {useCallback , useState , useEffect} from "react";
import ReactDom from "react-dom/client";
import Header from "./Component/header";
import Body  from "./Component/Body";

function GithubProfile(){
return (

    <>
    <Header/>
    <Body/>
    
    </>
)
}


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<GithubProfile/>)