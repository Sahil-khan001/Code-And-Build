// const header1 = document.createElement('h1');
// header1.innerHTML = "Hello Coder Army";
// header1.style.backgroundColor = "blue";
// header1.style.color = "white";

// const header2 = document.createElement('h1');
// header2.innerHTML = "Hello Coder Army";
// header2.style.backgroundColor = "green";
// header2.style.color = "white";

// const root = document.querySelector('#root');
// root.append(header1);
// root.append(header2);
//in this we are doing dom manipulation like we are adding the node header 1 , header 2 in the dom so we do DOM manipulation
//now we want not to manipulate the dom by ourself what we do is --
//we create a function for dom manipulation
//To solve this problem of repeatitive write make a function of it

// style ={fontSize : "30px" , backgroundColor : "blue" ,  color : "white"};

const react = {
  createElement: function (tag, style, children) {
    const Element = document.createElement(tag);

    if (typeof children == "object") {    //this is both array or object means both array and object are same
      for (let val of children) {
        Element.append(val);
      }
    } else {
      Element.innerHTML = children;
    }
    for (let key in style) {
      Element.style[key] = style[key];
    }

    return Element;
  },
};

const header1 = react.createElement(
  "h1",
  { fontSize: "30px", backgroundColor: "red", color: "white" },
  "Hello CoderArmy",
);
const header2 = react.createElement(
  "h1",
  { fontSize: "30px", backgroundColor: "blue", color: "white" },
  "LFG...",
);
const li1 = react.createElement("li", {}, "HTML");
const li2 = react.createElement("li", {}, "CSS");
const li3 = react.createElement("li", {}, "JS");
const Ul = react.createElement(
  "ul",
  { fontSize: "30px", backgroundColor: "red", color: "white" },
  [li1 , li2 , li3], 
);

const ReactDOM = {
  render: function (element, root) {
    root.append(element);
  },
};

ReactDOM.render(header1, document.querySelector("#root"));
ReactDOM.render(header2, document.querySelector("#root"));
ReactDOM.render(Ul, document.querySelector("#root"));

//IN react object we make a createElement function to make a new element or node
//In reactDom object we make a function to appened that node into DOM


// SO THIS IS REACT LIBRARY IN THIS WAY WE GET ALL FUNCTIONS ON FORM OF OBJECT AND THAT IS REACT LIBRARY 

//AT THE END REACT IS also an OBJECT 

//basically react dom is manipulating ur HTML FILE 
//in mobile we dont have index.html file it work on runtime so we don't need react dom there 

//NOW WE KNOW react is a library or JS Objects 


//WHAT IS CDN == content Delivery Network 

//basically we have lot of small servers near us so that we can reduce the request time and give data ASAP 

//whenever u make a request u go to near by Server and collect data from it if that server don't have data then it asks to main server then main server give him data then that server give us data as well as stored in their own server too so that when someone request for same data he can easily show data
//Also there is one thing suppose if a nearby server is too full then it transfer ur request to another nearby server 

//SO THIS IS DONE BY CONTENT DELIVERY NETWORK 
//it give u data from nearby server 

//eg  -- when u click on zomato the content loads fast then images take time because the images are comming from cdn 
//but the content is coming from main server that is keep changing acc to location  

//basically the data that is keep changing is stored in main server means the dynamic data that is changing again and again it is coming from main server 
//but like photos , video that is static we kept it in CDN 
//means the MAIN SERVER give the STATIC DATA to the CDN 


