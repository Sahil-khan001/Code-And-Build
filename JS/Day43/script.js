// const { StrictMode } = require("react");

// console.log("hello javascript and with the help of js i can manipulate my page ");

// document.getElementById('first').innerHTML = "change";

//we have window object  -- in which we have document in which web page exist

// html page convert into dom -- document object model -- so that we can attach js into page

//dom saying i am converting the web page into an Object 

//browser automatically convert the html page into dom

// DOCUMENTED OBJECT MODEL -- 

// HTML PAGE --  convert into dom means as a Object
//now we can put js into object 
 
//everything in an html treated as a Object 
//list , parag , function treat as a object


// dom tree -- windows -- document -- HTML -- Head and body 
// head -- meta and metaname 
// head -- title , coderarmy , text StrictMod

// html -- body -- div -- h1 ,  h2 , attributes , classes
// div -- ul -- li -- text 
// h1 -- hello coder army 
// attribute -- id = first 

{/* <h1 id="first" class="header1">Hello Coder Army</h1> */}
//lets convert this into object object be like -- 

// const obj = {
//     id : first ,
//     class : header1,
//     innerHTML : "Hello Coder Army",
//     tag : "h1"
// }

//it is done by browser by itself u just have to write the changing part 

document.getElementById("first").innerHTML = "Respect Army";

console.dir(document);