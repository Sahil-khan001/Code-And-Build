import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes,Route, Link} from "react-router-dom";
import Home from "./src/home";
import Contact from "./src/Contact";
import Dashboard from "./src/Dashboard";
import Details from "./src/defaudet";
import Zero from "./src/firstdet";
import Another from "./src/secdet";



function Show(){
    return (
      <BrowserRouter>
                   <nav>
                    <Link to = "/">HOME</Link>
                    <Link to = "Dashboard">Dashboard</Link>
                    <Link to = "/Contact">Contact</Link>
                    <Link to= "/Details">Details</Link>
                  </nav>

      <Routes>
        <Route path="/"  element = {<Home/>} ></Route>
        <Route path="/Dashboard"  element = {<Dashboard/>} ></Route>
        <Route path="/Contact"  element = {<Contact/>} ></Route>
        <Route path="/Details" element = {<Details/>} >
        <Route index element = {<Zero></Zero>}></Route>
        <Route path = "Hi" element = {<Another/>}></Route>
        </Route>
      </Routes>
      
      </BrowserRouter>
        
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Show/>);