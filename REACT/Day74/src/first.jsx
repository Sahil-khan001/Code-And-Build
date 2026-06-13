import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route , Link } from "react-router-dom";


import Home from "./home";
import Github from "./Github";

function First() {
  return (
    <BrowserRouter>

    <nav>
    <Link to = "/">home</Link>
    <Link to = "/Github">Github</Link>

    </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Github/:name" element={<Github/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<First />);