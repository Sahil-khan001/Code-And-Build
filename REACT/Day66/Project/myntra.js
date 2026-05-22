 import React from "react";
import ReactDOM from "react-dom/client";


// function Card(props){
//    return (

//     <div style = {{border : "2px solid black" , width : "250px" , height : "350px", padding : "5px" , borderRadius : "5px"}}>
//         <img style={{width : "100%" , height: "55%", borderRadius : "5px"}} src= {props.imgSrc}/>
//         <div style={{textAlign : "center"}} >
//             <h2>{props.LogoName} </h2>
//             <h1>{props.Offer}</h1>
//             <h2>Shop Now</h2>
            
//         </div>
//     </div>
//    )
// }

// const cardsData = [
//   {
//     imgSrc: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     logoName: "Eagle Brand",
//     offer: "30-40% Off"
//   },

//   {
//     imgSrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
//     logoName: "Lion Force",
//     offer: "60-70% Off"
//   },

//   {
//     imgSrc: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
//     logoName: "Style Hub",
//     offer: "20-50% Off"
//   },

//   {
//     imgSrc: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
//     logoName: "Urban Wear",
//     offer: "40-80% Off"
//   },

//   {
//     imgSrc: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
//     logoName: "Fashion Point",
//     offer: "10-30% Off"
//   },

//   {
//     imgSrc: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
//     logoName: "Royal Trends",
//     offer: "50-70% Off"
//   },

//   {
//     imgSrc: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
//     logoName: "Modern Fit",
//     offer: "25-45% Off"
//   },

//   {
//     imgSrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
//     logoName: "Classic Wear",
//     offer: "35-55% Off"
//   },

//   {
//     imgSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
//     logoName: "Street Zone",
//     offer: "70-90% Off"
//   },

//   {
//     imgSrc: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
//     logoName: "Elite Fashion",
//     offer: "45-65% Off"
//   },

//   {
//     imgSrc: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
//     logoName: "Glow Style",
//     offer: "15-35% Off"
//   },

//   {
//     imgSrc: "https://images.unsplash.com/photo-1495121605193-b116b5b09a7e",
//     logoName: "Trendy Hub",
//     offer: "55-75% Off"
//   }
// ];

// function App(){
//     return (
//         <div style={{height : "100vh" , width : "100vw" , display : "flex" , flexWrap : "wrap" , gap : "10px" , justifyContent  : "center"}}>
//         {/* //Project contains
//         //headerwh
//         //body */}
// {/*           
//          <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvbTcdU77miU3b9OMBIF5GrsWt2eevhGtew&s" LogoName =  "Logo1"  Offer = "30-40% off"/>
//          <Card imgSrc = "https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg" LogoName =  "Logo2"  Offer = "60-70% off" />
//          <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvbTcdU77miU3b9OMBIF5GrsWt2eevhGtew&s" LogoName =  "Logo3"  Offer = "30-60% off" />
//          <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvbTcdU77miU3b9OMBIF5GrsWt2eevhGtew&s" LogoName =  "Logo4"  Offer = "80-40% off" />
//          <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvbTcdU77miU3b9OMBIF5GrsWt2eevhGtew&s" LogoName =  "Logo5"  Offer = "20-40% off" />
//          <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDA6doaUdV9YJu6r0UdfdIIHy4NGb8rxMTA&s" LogoName =  "Logo6"  Offer = "10-40% off"   />
//          <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvbTcdU77miU3b9OMBIF5GrsWt2eevhGtew&s"  LogoName =  "Logo7"  Offer = "70-40% off"  />
//          <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDA6doaUdV9YJu6r0UdfdIIHy4NGb8rxMTA&s" LogoName =  "Logo6"  Offer = "10-40% off"   />
//          <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvbTcdU77miU3b9OMBIF5GrsWt2eevhGtew&s"  LogoName =  "Logo7"  Offer = "70-40% off"  />
//          <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDA6doaUdV9YJu6r0UdfdIIHy4NGb8rxMTA&s" LogoName =  "Logo6"  Offer = "10-40% off"   /> */}

// {/* 
//         //  Instead of this making card manually and passing the arguments we do something different we use for loop type somthing so that for loop made card acc to it based on the data 
//          //for the data we have to make an array with the data in the form of object in the object so array because we can iterate over it 
//          //But if  we want to use JS in the JSX then make sure use {} also make sure it return something then it will work in this case it returning array we are using map here if we use for loop normally it doesn't return anything 
//          */}


//          {
//             cardsData.map((value , index)=>{
//                 return(
//                 <Card key = {index} imgSrc = {value.imgSrc} LogoName = {value.logoName} Offer = {value.offer}/>
//                 )
//             })
//          }
//         {/* [<Card/> , <Card/> , <Card/> , <Card/>]
//         it returning like this in an array because it is returning that's why we use array */}




// {/* 
    
//         //it runs normally but in console it gives u erro -- it is REACT ERROR it said whenever u use array in JSX then u have to put key with unique value to remove this error
//         //like if a div have 50 card then we have to give unique value to the key also the in this we use key = {index} but it is not a right approach we have to give another
//         //it helps in rendering in react for optimization 
//  */}



//         {/* //footer */}
//         </div>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)

function Card(props){
   return (

    <div style = {{border : "2px solid black" , width : "250px" , height : "350px", padding : "5px" , borderRadius : "5px"}}>
        <img style={{width : "100%" , height: "55%", borderRadius : "5px"}} src= {props.imgSrc}/>
        <div style={{textAlign : "center"}} >
            <h2>{props.LogoName} </h2>
            <h1>{props.Offer}</h1>
            <h2>Shop Now</h2>
            
        </div>
    </div>
   )
}

const cardsData = [
  {
    imgSrc: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    logoName: "Eagle Brand",
    offer: "30-40% Off"
  },

  {
    imgSrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    logoName: "Lion Force",
    offer: "60-70% Off"
  },

  {
    imgSrc: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    logoName: "Style Hub",
    offer: "20-50% Off"
  },

  {
    imgSrc: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    logoName: "Urban Wear",
    offer: "40-80% Off"
  },

  {
    imgSrc: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    logoName: "Fashion Point",
    offer: "10-30% Off"
  },

  {
    imgSrc: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    logoName: "Royal Trends",
    offer: "50-70% Off"
  },

  {
    imgSrc: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    logoName: "Modern Fit",
    offer: "25-45% Off"
  },

  {
    imgSrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    logoName: "Classic Wear",
    offer: "35-55% Off"
  },

  {
    imgSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    logoName: "Street Zone",
    offer: "70-90% Off"
  },

  {
    imgSrc: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    logoName: "Elite Fashion",
    offer: "45-65% Off"
  },
];

function App(){
    return (
        <div style={{height : "100vh" , width : "100vw" , display : "flex" , flexWrap : "wrap" , gap : "10px" , justifyContent  : "center"}}>
        {/* //Project contains
        //headerwh
        //body */}
{/*           
         <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvbTcdU77miU3b9OMBIF5GrsWt2eevhGtew&s" LogoName =  "Logo1"  Offer = "30-40% off"/>
         <Card imgSrc = "https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg" LogoName =  "Logo2"  Offer = "60-70% off" />
         <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvbTcdU77miU3b9OMBIF5GrsWt2eevhGtew&s" LogoName =  "Logo3"  Offer = "30-60% off" />
         <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvbTcdU77miU3b9OMBIF5GrsWt2eevhGtew&s" LogoName =  "Logo4"  Offer = "80-40% off" />
         <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvbTcdU77miU3b9OMBIF5GrsWt2eevhGtew&s" LogoName =  "Logo5"  Offer = "20-40% off" />
         <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDA6doaUdV9YJu6r0UdfdIIHy4NGb8rxMTA&s" LogoName =  "Logo6"  Offer = "10-40% off"   />
         <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvbTcdU77miU3b9OMBIF5GrsWt2eevhGtew&s"  LogoName =  "Logo7"  Offer = "70-40% off"  />
         <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDA6doaUdV9YJu6r0UdfdIIHy4NGb8rxMTA&s" LogoName =  "Logo6"  Offer = "10-40% off"   />
         <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvbTcdU77miU3b9OMBIF5GrsWt2eevhGtew&s"  LogoName =  "Logo7"  Offer = "70-40% off"  />
         <Card imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDA6doaUdV9YJu6r0UdfdIIHy4NGb8rxMTA&s" LogoName =  "Logo6"  Offer = "10-40% off"   /> */}

{/* 
        //  Instead of this making card manually and passing the arguments we do something different we use for loop type somthing so that for loop made card acc to it based on the data 
         //for the data we have to make an array with the data in the form of object in the object so array because we can iterate over it 
         //But if  we want to use JS in the JSX then make sure use {} also make sure it return something then it will work in this case it returning array we are using map here if we use for loop normally it doesn't return anything 
         */}


         {
            cardsData.map((value , index)=>{
                return(
                <Card key = {index} imgSrc = {value.imgSrc} LogoName = {value.logoName} Offer = {value.offer}/>
                )
            })
         }
        {/* [<Card/> , <Card/> , <Card/> , <Card/>]
        it returning like this in an array because it is returning that's why we use array */}




{/* 
    
        //it runs normally but in console it gives u erro -- it is REACT ERROR it said whenever u use array in JSX then u have to put key with unique value to remove this error
        //like if a div have 50 card then we have to give unique value to the key also the in this we use key = {index} but it is not a right approach we have to give another
        //it helps in rendering in react for optimization 
 */}



        {/* //footer */}
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)