import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Card from "./card";
import { Provider } from "react-redux";
import Store from "../store";



function Show(){
    return (
<Provider store = {Store}>
<Header/>
<Card/>
</Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Show/>);