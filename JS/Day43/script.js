
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

// behind the scene it look like this in dom

// const obj = {
//     id : first ,
//     class : header1,
//     innerHTML : "Hello Coder Army",
//     tag : "h1"
// }

//it is done by browser by itself u just have to write the changing part example like -- 

// document.getElementById("first").innerHTML = "Respect Army";

// console.dir(document);

//whenever u create any object its prototype attach to it automatically

//in js the normal class is called className 
//the id is called normal id 

{/* <h1 id="first" class="header1">Hello Coder Army</h1> */}
//in js if i want to access this class then we write className
//because in class we already defined it to make a class in oops  so in js we use it in diff way 

{/* <h1 id="first" class="header1">Hello Coder Army</h1> */}
//in js class refer this line  na ki clases like oops 

// ctrl + shift + r -- to refresh web page 

// when we access element using className it return html collection in which we have multiple arrays classes because we know 
// there can be multiple class with the same name it like an array to acess this we write 

// how to check property for diff prespective -- 
// const objj = document.getElementById("first");

// undefined
// objj
// <h1 id=​"first" class=​"header1">​Hello Coder Army​</h1>​
// objj.textContent
// 'Hello Coder Army'
// obj.id
// 'first'
// obj.__proto__
// HTMLHeadingElement
// obj.tagName
// 'H1'

//WE HAVE CSS SELECTOR -- 
//query selector -- 

//query selector can access element with anything class , id , tag
//query selector can select anything class , id , tag
// const id = document.querySelector('#first');
// id.innerHTML = "Consistency";


// const id2 = document.querySelector("#second");
// console.log(id2);
// id2.style.backgroundColor = "red";

//    i: Single Element:
//       Method: document.querySelector(selector)
//       Description: Returns the first element matching the specified CSS 
//       selector.

//if u have multiple class and object then it only access the first one and return it 

//but if u want to select all classes then use querySelectorAll



//HOW TO ITERATE OVER NODES -- 

// 1. for (let value of object) {
//     console.log(value);
// }

// 2. for(let i = 0 ; i<Object.length ; i++){
//     console.log(obj[i]);
// }

// 3. obj.forEach((num) => {
//     console.log(num);
// });

//CONVERT NODELIST INTO ARRAY  then u can use for each for html collections as well 
// Array.from(obj);

//You can access with list also li
// let obj = document.querySelectorAll('li');
//after executing this u get node list 

// let obj = document.querySelector('li');
//after this u get only first li

// let obj = document.querySelector('ul li');
//u can do this too -- it means go into unordered list and immediate child check

//these all are come under css selector 

//now move to accessing by tag name //return all specified tags like muliple like html collections

// HTML collection is also like array not exactly
// let team = document.getElementsByTagName('Li');
//it considered all tags and apply on all

//for specific tag use
// team[0] -- for first li tag
// team[1] -- for second li tag

//it have length property so we can use for loop
// for(let i = 0 ; i< team.length ; i++){
//     console.log(team[i]); 
    // team[i].style.color = "black"; -- it apply on all the list tag 
// }

//you can use for of loop
// for(let value of team){
//     console.log(value);
// }


//you can use for each also but for each apply on array so we have to convert this into array for this we do 
// Array.from(team); -- now it convert into array 
//now u can use for each function 

// team.forEach((value)=> console.log(value));

//how to access relationships

// const list = document.querySelector('li');
// console.log(list);
// //it select first list only 

// 1. Parent node
// //if we want to know about its parent then use 

// list.parentElement;
// list.parentNode;
//u can use these 2 syntaxes
//so the ans is ul

// 2. child nodes

// const par = document.querySelector('ul');

//how to find child nodes of it like we know it have 4 li

// console.log(par.childNodes);
//it print a node list of 9 elements 
//it print li text li text    it print this because of empty space after each list that why it is showing 9 elements

// if u use this 
// console.log(par.children) 
//it give u html collection of 4 li

//first child 
// it show text   --- it return either html element or text node 

//first element child 
//it show li -- it return html element child 

//nextSibling -- it give u text node also 
//nextElementSibling  -- but it give u html collection element 

//PrevSibling -- it give u text node also 
//PrevElementSibling  -- but it give u html collection element 

//if u want to access the main text to see or modify then u can use any 3 of them -- 
// <p>Hello Coder <strong>Army<strong></p>
// innerHTML -- it print all things even if there are more tags , element 
// innerText -- it remove all tag then print 
// innerContent -- it remove all tag then print 


//  document.getElementById('first').innerHTML 
//  //Hello Coder <strong>Army<strong>
//  document.getElementById('first').innerText
//  //Hello Coder Army
//  document.getElementById('first').textContent
//  //Hello Coder Army

// another example -- if u use display : None ; in h1 tag

//  document.getElementById('first').innerHTML 
//  //Hello Coder <strong>Army<strong> display : none ; -- it print full things


//  document.getElementById('first').innerText
//  //'Hello Coder Army' -- it not hide text -- it doesn't hide display none text

//  document.getElementById('first').textContent
//  //Hello Coder -- only show content remove display none content also 


// 1. const items = document.querySelectorAll(".text");
//   items.forEach((value) =>{
//     value.style.color = "red";
// })

// 2. const op = document.getElementsByClassName("box");
// for(let i = 0 ; i<op.length ; i++){
//     op[i].style.backgroundColor = "blue";
// }

// 3. const change = document.querySelectorAll("li");
//    change.forEach( (value) => {
//     value = "Hello";
//    });


// 🔥 FINAL GOLDEN RULE (REMEMBER THIS)

// 👉 Ignore anything with:

// Node
// Sibling
// Child

// 👉 Prefer Element versions only

// ✔ children
// ✔ parentElement
// ✔ firstElementChild
// ✔ nextElementSibling

// ⚡ SUPER SHORT SUMMARY
// HTMLCollection → getElements... → for loop
// NodeList → querySelectorAll → forEach
// Avoid text nodes → always use Element versions


// className  , tagName , -- use normal for i loop -- convert into array using Array.from ()  then use forEach with this also 

// querySelectorAll use -- forEach only