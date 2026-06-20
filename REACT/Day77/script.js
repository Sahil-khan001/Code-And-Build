import React from "react";
import ReactDOM from "react-dom/client";
import Store from "./store";
import { Provider } from "react-redux";
import CoinCreate from "./coinCreate";

function Show(){
    return (
      <Provider store ={Store}>
      <CoinCreate/>
      </Provider>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Show/>)