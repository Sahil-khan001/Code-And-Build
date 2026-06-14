import React from "react";
import ReactDOM from "react-dom/client";
import Counting from "./Counting";


function Final(){
    return (

        <>
        <Counting/>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Final/>)