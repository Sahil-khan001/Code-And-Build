import React from "react";
import ReactDom from "react-dom/client"
import Card from "./Component/Card"
import Header from "./Component/Header"
import cardsData from "./Dummy/CardsData"


function App() {
    return (
        
        <div style={{minHeight: "100vh", width: "100vw", display: "flex", gap: "20px",flexWrap: "wrap" , justifyContent : "center" , paddingTop : "6rem" , paddingBottom : "1rem" , backgroundColor : "rgb(105, 110, 121)"}}>
      {/* Project Contains */}
      {/* header */}
        <Header/>
      {/* cards */}

      {cardsData.map((val, index) => {
        return ( <Card key={index} LogoName={val.logoName} img={val.imgSrc} Offer={val.offer}/>
        );
      })
      }

      {/* footer */}
    </div>
    
    
    
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>);

  