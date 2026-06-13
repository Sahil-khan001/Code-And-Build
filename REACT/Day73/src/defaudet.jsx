import React from "react";
import { Link, Outlet } from "react-router-dom";


export default function Details(){
    return (
      <>
      {/* <nav>
              <Link to = "/">HOME</Link>
              <Link to = "Dashboard">Dashboard</Link>
              <Link to = "/Contact">Contact</Link>
              <Link to= "/Details">Details</Link>
            </nav> */}
      <nav>
        <Link to= "/Details">Details</Link>
        <Link to= "Hi">HI</Link>
      </nav>
     <h1>THIS IS DETAILS PAGE</h1>
      <Outlet></Outlet>
      </>
    )
}