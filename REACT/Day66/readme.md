Remember -- whenever u download anything from npm it goes into node modules 
//means all the dependencies are gone in the node modules 

//lets talk about veet
//npm install -- node modules 
//npm init -- package.json 

//we have 2 types of Dependencies 

//Normal Dependencies -- onto which node modules created 
//Dev Dependencies -- we use this while we are writing the code 

//we put only normal Dependencies code into Production not DevDependencies 

//for the Vite usecase -- 
//commands are -- 
1. npm create vite@latest  -- to make a vite project
2. npm run dev             -- to run prject


//go into vite-project 
//npm install -- to download node modules or all dependencies  //if there is no node modules 


//Note : suppose u go into a company 
//company says read the project 
//then u think first start the project to understand the physical flow 

//what u do in this case 
//go into package.json //everything is there 

//go to scripts then there are keys and values //now u want to run the project
//what u do is just write npm run 1st key //also that 1st key is either dev or start
//eg npm run start/dev

//now u want production ready code u write 
//npm run build //this build is 2nd key 
//now ur production ready code is in the dist folder as u know

//basically these are scripts u can edit these keys also 
//because the imp. part is values we dont remember these values so we just add alternative name of it into the keys 
//and we can edit it also so we remember it 

 //also in package.json we have dependencies 
 //so u can see that ur company project depends on which dependencies and DevDependencies

if u download somthing from npm like parcel and u want this parcel as a Dev Dependencies not a normal Dependencies then u have to use this command 

npm install -D parcel

use -D for dev dependencies
<!-- ==================================================================================== -->

NOW MOVE TO PROJECT --

First initialize the project
npm init  -- for package.json set name , others things acc to u 

then what framework tool u want to use 
npm install react
npm install react-dom 

tool as a Dev Dependencies
npm install -D parcel 

//if u want to see this then in package.json there is parcel is in dev dependencies not in normal dependencies

--make sure u write type = "module" in html 
//because while using the import react , import react-dom we need this 

//also we are doing everything manually 
//but in vite -- vite do it by self


//if u want to install node modules then first make package.json with all tools then at last make node modules 
//npm init
//npm install react
//npm install react-dom
//npm install -D parcel
//npm install node modules

//SOMETIME this  -- npx parcel index.html -- it not work or not create localhost
//so for this we have to remove this main file
//sometimes its because of this main file 

  "license": "ISC",
  "author": "Sahil khan",
  "type": "commonjs",
  "main": "script.js",   to 

  
  "license": "ISC",
  "author": "Sahil khan",
  "type": "commonjs",

  //some people say that the react function should be in Capital Letter 

  //in JSX -- only expression can write -- which produce Output
  //u cannot write statement in JSX 

  //expression like number , string , array with obj contains 
  //u cannot put obj 

  //in JSX there is a different way to call function using first letter be capital
  //it is because so that JSX understand difference between HTML TAG and USER DEFINED TAG 

  //html tag is -- we have html tag -- <div> , <h2> , <p>
  //userdefined tag is -- that we defined <Greet/>

  //SO it is rule of JSX not of react 

  //how to pass arguments in this then we do in this way we have to write inside this 
<Greet name = "sahil" />


//so what is props -- we pass arguments the props catch that arguments in an object 
//so basically props are Object 
//u can check it on console -- console.log(props);

//React do this so that we can learn like 

//in normal HTML -- <h1 id = "first"  className = "popt"><h1/>
//in JSX function call arguments be like -- <Greet name = "sahil"  age = "23"/>

// eg2 

// function Detail(props){
//     return <h1>Your details are : {props.name}  {props.age} {props.dept} </h1>

// }


// const callfunc = <Detail name = "sahil"  age = "23" dept = "cse"/>;

// root.render(callfunc);












   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvbTcdU77miU3b9OMBIF5GrsWt2eevhGtew&s




   https://t3.ftcdn.net/jpg/03/65/42/00/360_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg