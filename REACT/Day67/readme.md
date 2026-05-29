lets talk about EVENT LISTENER in REACT

instead of .addEvven.. U use onClick(it requires a callback function) --

now u have to make this callback function 

u can write direcly call back function into it too but it became messy

React  says u do only ui part DOM part i will do it by myself 
because we dont know how to manipulate the dom in best OPTIMISE WAY 

so that 's why HOOKS comes into the picture -- 
it is just a function 

--hooks are of lot of types 
//we use the most used one that is use state hook 

what is state -- when the data is change then state is change
to use useState -- we have to import it within react first line like
import React , {useState} from "react";

whatever u initialize useState says i am gonna initialize it 

IT RETURN U an ARRAY , or an function for which u set any name 

and whereEver u pass this function with the count variable inside it it gonna update everywhere

