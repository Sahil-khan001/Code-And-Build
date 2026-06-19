import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store";
import {Provider} from "@reduxjs/toolkit"
import CoinCreate from "./coinCreate";

function Show(){
    return (
      <Provider store ={store}>
      <CoinCreate/>
      </Provider>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Show/>)