// created an element   
// const element   = document.createElement('li'); //u can write any tag here li , p , h1 any
// element .innerHTML = "TS"; //element  name 

// const parent = document.getElementById("root"); 
// parent.appendChild(element);

//in this way u can create an element and attach it to the parent of it and if u want to make more element then use these 4 lines of syntax
//if  u want to again new element then make a function of it like 

// function attach(content){
//     const element   = document.createElement('li'); //u can write any tag here li , p , h1 any
// element .innerHTML = content; //here u have to write the element name u want to add  

// const element2   = document.createElement('li'); //u can write any tag here li , p , h1 any
// element2 .innerHTML = content + "V2.0"; //here u have to write the element name u want to add

// const parent = document.getElementById("root"); 
// // parent.appendChild(element);
// // parent.append(element , "add more elements");  //here u can write multiple statements together 
// parent.append(element , element2);
// }

//so we learn how to create element and add nodes --
/// attach("Typescript");
// attach("React");
// attach("Node");
// attach("Express");

//*************************************************************** */

//now see how to add text node -- 
// text node is text without any tag 
//text node have no tag to write so u just have to write tag 

// const text = document.createTextNode("Hello Coder Army");

// const par = document.getElementById('root');
// par.append(text);

//**************//*************************************************************** */

//create a attribute tag

// const element = document.createAttribute('id');  //so this is id and the value is first eg like    <ul id="root">   
// element.value = "first"; 

// //now i want to attach this into li tag like <li id = "first"> 
// //so for the first list tag we use 

// const curr_list = document.querySelector('li');
// curr_list.setAttributeNode(element);

// // for the first element we use this but for the second one ??
// //we use either use direct class id in list or we can use parent then children like

// const par = document.getElementById('root');
// console.log(par.children[1]);

// par.children[1].setAttributeNode(element);

//if u want to update in all tag ek saath then use 

//we learn js to that we can manipulate the web page with logic and more -- 


// **************************************************//*************************************************************** */


//Access attribute of a class 

//to get attribute do this -- 
// const element = document.getElementById('root'); //u have to right id or class here to get access 
// console.log(element.getAttribute('class'));  //if u write here id then it give root , if u write class here then it give mohan
//in this way u can access of attribute

//to set attributes do this -- 
// const element = document.getElementById('root');
// element.setAttribute("custom" , "op");  //custom represent key , op represent value

//you can create it , if it exist u can update it , u can create it then give value or direct make attributes using id or class

//to remove the attributes we do this -- 
// const element = document.getElementById('root');
// element.setAttribute("custom" , "op");  //custom represent key , op represent value
// element.removeAttribute("custom"); //it will removed 

//NOW ADD NODES TO THE DOM -- 

//appendChild(node) - add a node as the last child of a parent
//append -- add multiple nodes as the last child of a parent
//insertBefore -- (newNode , referenceNode)
//prepend 
//replaceChild()
//using innerHTML -- directly sets the HTML content of an element 
//using insertAdjacentHTML() or insertAdjacentElement() : //this is h.w
//in ajacent u have to put these values
// beforebegin: Before the element itself.
// afterbegin: Inside the element, before its first child.
// beforeend: Inside the element, after its last child.
// afterend: After the element itself.

// 8: removeChild(node) Homework
// 9: The .remove() method in JavaScript is used to remove an element from the 
//    DOM (Document Object Model).



// const parent = document.getElementById('root');

// const ele = document.createElement('li');
// ele.innerHTML = "TS";
 
// // parent.append(ele); //it will add element at the last
// // parent.prepend(ele); //it will add element at the first

// //If u want to add in the middle of it then u have to access that list also like
// const child2 = parent.children[1];
// // parent.insertBefore(ele , child2); //the element set upper of this element 

// //if u want to replace child then --

// parent.replaceChild(ele , child2 ); //ele is the new value that u want to set and child2 is the old value 


//using innerHTML -- 

// const parent = document.getElementById('root');
// parent.innerHTML = "TS";
//then only ts will show TS  instead of this code
// <li>CN</li>
// <li>HTML</li>
// <li>CSS</li>
// <li>JS</li>

// but if we use += then it add TS at the end -- 
// parent.innerHTML += "TS"; //code like parent.innerHTML + "TS";
//in proper format be like -- 
// parent.innerHTML += "<li>TS</li>"

//insertAdjacentElement --
// const parent = document.getElementById('root');

// const element = document.createElement('div');
// element.innerHTML = "Hello Coder Army";

// parent.insertAdjacentElement("beforbegin" , element);  
// parent.insertAdjacentElement("beforeend" , element);  
// parent.insertAdjacentElement("afterbegin" , element);  
//it appear upper this parent element that is top anyelement upper or below u want to set it then use element and then these values 

//MODIFICATION IN ELEMENT 
// const parent = document.getElementById('root');
// parent.children[1].innerHTML = "golang";  //


//HOW TO DELETE A NODE / ELEMENT  -- 


//normal remove -- 
// const list = document.querySelector('li');
// // list.remove();  



// removeChild(Node); //if u want to use this then first u have to access ur parent then the child u want to remove then parent remove the specific child -- 

// const parent = document.querySelector('ul');
// const child = document.querySelector('li');

// parent.removeChild(child); // removes <li> from <ul>




//ques is set attributes to all li of ul parent 

// let ele = document.createAttribute('id');
// ele.value = "babbar";  //there is no need to make a separate attribute for all the li items  just use direct set Attributes into it 

// let list = document.querySelectorAll('li');
// console.log(list);


// list.forEach((val) => {
//     val.setAttribute("custom", "op"); //like this
// });


//use getAttribute , setAttribute , removeAttribute

// TIPS == 

// queryselector all -- use for each 
// getelementbyclassName -- use for loop let i = 0  like this 
// getelementbytagName -- use for loop let i = 0  like this  for this also 


//use of convert from obj to array -- Array.from(obj name);  then use for each in all 


//html collection -- only element 
//nodes -- text nodes , element , comments


 
