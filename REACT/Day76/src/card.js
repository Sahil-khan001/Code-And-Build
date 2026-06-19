//lets make some manually dummy data

import { useState } from "react";
import AddRemove from "./addRemove";

let data = [
    {id : 1 , Food : "Pasta" , Price : 200},
    {id : 2 , Food : "Momos" , Price : 300},
    {id : 3 , Food : "coke" , Price : 200},
    {id : 4 , Food : "chicken" , Price : 1200},
    {id : 5 , Food : "frenf" , Price : 700},
    {id : 6 , Food : "kebab" , Price : 1600},
    {id : 7 , Food : "Sweets" , Price : 800},
    {id : 8 , Food : "ShahiPan" , Price : 200},
    {id : 9 , Food : "Momos" , Price : 300},
    {id : 10 , Food : "coke" , Price : 200},
    {id : 11, Food : "chicken" , Price : 1200},
    {id : 12, Food : "frenf" , Price : 700},
    {id : 13, Food : "kebab" , Price : 1600},
    {id : 14, Food : "Sweets" , Price : 800},
    {id : 15, Food : "ShahiPan" , Price : 200},
];


export default function Card(){
return (
             <div style={{display : "flex" , justifyContent : "center" , alignItems : "center" , gap : "20px" , marginTop :"20px" , flexWrap : "wrap"}}>
                {
                    data.map((value)=>{
                        return (
                            <div style={{border :"2px solid black" , textAlign : "center" , width : "200px" , padding : "10px"}} key={value.id}>
                              <AddRemove value = {value}/>
                                </div>
                        )
                    })
                }

             </div>
    )
}



