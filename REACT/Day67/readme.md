lets talk about EVENT LISTENER in REACT

instead of .addEvven.. U use onClick(it requires a callback function) --

//this callbackfunction call when when we click on it then it work 

now u have to make this callback function 

u can write direcly call back function into it too but it became messy

React  says u do only ui part DOM part i will do it by myself 
because we dont know how to manipulate the dom in best OPTIMISE WAY 


//the problem is we have to render into the dom to show the Onclick things 
so that 's why HOOKS comes into the picture -- 
it is just a function 

--hooks are of lot of types 
//we use the most used one that is use state hook 

what is state -- when the data is change then state is change
to use useState -- we have to import it within react first line like
import React , {useState} from "react";

whatever u initialize useState says i am gonna initialize it 

IT RETURN U an ARRAY , or an function for which u set any name 

it says when ever this value is changing or updating u have to call my function with this value 

//and where the this value is showing in the code i am gonna update it by myself 

//basically hooks gives us a function means whereever u want to change in the Ui u have to call this function 
//and make sure the function name should be same like the variable name 

//BEHIND THE SCENES OF USE STATE -- 

the setfunction  call the main function again and again with the updated value inside it 
-- and whereever he see count variable he gonna update this value 

