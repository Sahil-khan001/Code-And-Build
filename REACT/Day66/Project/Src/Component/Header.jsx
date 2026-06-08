function Header(){
    return(
    <div style={{ borderBottom : "2px solid rgb(252, 252, 252)" , padding : "5px" , backgroundColor : "rgb(255, 255, 255)" , position : "fixed" , top : "0px" , right : "0px" , left : "0px" }}>
        <div style={{display : "flex" , alignItems : "center"}}>
    <img style={{width : "9%" , }}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTipBemMZg9YQHJq1WIfOoxWXVb-7ow7s65Cg&s" />

    <div style={{display : "flex" , gap : "12px" , margin : "0px 10px"}}>
      <button style={{border : "none" , backgroundColor : "white" , fontSize : "0.9rem" , fontWeight : "bold"}} >MEN</button>
      <button style={{border : "none" , backgroundColor : "white" , fontSize : "0.9rem" , fontWeight : "bold"}} >WOMEN</button>
      <button style={{border : "none" , backgroundColor : "white" , fontSize : "0.9rem" , fontWeight : "bold"}} >KIDS</button>
      <button style={{border : "none" , backgroundColor : "white" , fontSize : "0.9rem" , fontWeight : "bold"}} >HOME</button>
      <button style={{border : "none" , backgroundColor : "white" , fontSize : "0.9rem" , fontWeight : "bold"}} >BEAUTY</button>
      <button style={{border : "none" , backgroundColor : "white" , fontSize : "0.9rem" , fontWeight : "bold"}} >GENZ</button>
      <button style={{border : "none" , backgroundColor : "white" , fontSize : "0.9rem" , fontWeight : "bold"}} >STUDIO</button>
    </div>

    <input  type = "text"  placeholder="Search for Brand , Products"     style={{width : "40%" , height : "35px" , padding : "3px" , paddingLeft : "20px" , outline : "none" , border : "1px solid rgb(245, 245, 246)" , borderRadius : "5px" , backgroundColor :"rgb(245, 245, 246)", margin : "0px 0px 0px 15px" , color : "rgb(170, 170, 170)"}}/>
    
    <div style={{display : "flex" , gap : "12px" , margin : "0px 0px 0px 3%" , fontSize : "1rem" , alignItems : "center", fontWeight : "bold"}}>
        <i  className="fa-solid fa-user-pen"></i>
        <p>Profile</p>
        <i className="fa-regular fa-heart"></i>
        <p>Wishlist</p>
        <i className="fa-solid fa-arrow-right-to-bracket"></i>
        <p>Bag</p>
    </div>
</div>

    </div>
    )
}

export default Header ;