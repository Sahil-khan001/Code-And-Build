import React from "react";
import ReactDOM from "react-dom/client";
import Counting from "./Counting";
import { Provider } from "react-redux";
import store from "./Store";
import CustomerCustom from "./CustomCounter";

function Final(){
    return (
<Provider store={store}>
    <Counting/>
    <br></br>
    <br></br>
    <CustomerCustom/>
</Provider>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Final/>)