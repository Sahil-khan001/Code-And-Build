import React, { useState } from "react";
import ReactDom from "react-dom/client"
import Card from "./Component/Card"
import Header from "./Component/Header"
import cardsData from "./Dummy/CardsData"

function App() {

  let [A , SetA] = useState(cardsData);

  function sortt(){
  A.sort((a,b)=> a.price - b.price);
  SetA([...A]);
  // console.log(A);
  }

  function increment(){
    A.filter((val) => val.price > 499);
    Set(A);
  }
    return (
        
        <div style={{minHeight: "100vh", width: "100vw", display: "flex", gap: "20px",flexWrap: "wrap" , justifyContent : "center" , paddingTop : "6rem" , paddingBottom : "1rem" , backgroundColor : "rgb(105, 110, 121)"}}>
      {/* Project Contains */}
      {/* header */}
        <Header/>
      {/* cards */}

      {A.map((val, index) => {
        return ( <Card key={index} LogoName={val.logoName} img={val.imgSrc} Offer={val.offer} Price = {val.price}/>
        );
      })
      }

      {/* footer */}
      <button className="butt" onClick={sortt}>Click ME!</button>
      <button className="butt" onClick={increment}>PriceAbove499rs</button>
    </div>
    
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>);

  