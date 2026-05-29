function Card(props){
    return(
        <div style={{border : "2px solid black" , borderRadius : "5px" , height : "360px" , width : "250px", color : "white" , backgroundColor : "darkgreen"  }}>
        <img style={{width : "100%" , height : "42%" , borderRadius : "5px" }}   src = {props.img} />

        <div style={{textAlign :"center" , borderRadius : "5px"}}>
            <h2>{props.LogoName}</h2>
            <h1>{props.Offer}</h1>
            <h2>SHOP NOW</h2>
            <h2>{props.Price}</h2>
        </div>

        </div>
    )
}

export default Card;