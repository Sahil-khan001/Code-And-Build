if we dont use cdn links then 
we know that our react and reactdom code available in nodu modules now we take that code from it using installation 
import React  from "react";
import ReactDOM from "react-dom";

//but the latest reactdom is present in
import ReactDOM from "react-dom/client";

//still it wont work 
//because in old js we dont have have any import type things like it importing things from modules
//now we have to tell the browser that type of this JS is module then it will work 
//for this we have to edit  in the HTML CODE like in script link line we have to write type = "module"

//npm -- the code present in npm we take that code and put it into our local machine 
//npx -- to run this npm code

like 
npx parcel index.html
//it means give index file to parcel 

//after this it give local host link 
//also we have two more files addes 
//parcel cache and dist 

//ifwe delete parcel cache then again we run server it built it time is increase
//it means whenever it create any server -- all the cache data regarding this server it stored in it 

//if u delete that cache file then the server made it again and it takes time
/and if it there then it execute the code fast 

//still we dont have production code also the production code goes into dist folder 
//command for it is -- npx parcel build index.html
//then it give us two file -- index.html , index.js now u put these files into production code 
//if u want to see this code then go into dist folder and check it out 

//total we have three files -- index.html , index.js , .map file
//this .map file is used to get our JS code from this .js production ready code but we dont use it because someone can read our code because of this 

if someone have these 2 files then we can get get easily ur JS CODE which is danger

//if we put code in normal way without bundler then it contain -- index.html , app.js , react , reactDOM  , other dependency  
//but with bundler -- we get only 2 files that is index.html , app.js


//for the DEPLOYMENT U CAN USE netlify.com
//JUST PUT UR dist folder into it 
//ALWAYS USE PRODUCTION READY CODE 


//sometime it while running code it take code from parcel cacche , dist so delete them

//now we see how to use JSX -- javascript xml -- means we write direct html in our js file like


//NOW WE DONT USE REACT.CreateElement anymore we tatabye it 
//just because of JSX we use direct HTML 

//also remeber in react its className not class

 //what happened prev
 //               REACT                           render
 //React.createElement => react element(JSOBJECT) -- IT Convert it into HTML ELEMENT 



//also this code is not react code IT IS JSX 
also JSX is not like HTML , IT is different from HTML , LITTLE BIT IN SYNTAX

<!-- eg -- const Element = <h1>this is jsx</h1>; -->
//now we have to convert this jsx code into html 
//for this we use babel 

//babel is already present in parcel 

//JSX   TO   React.createElement  it is done through BABEL 
//React.createElement to React element or Js object  -- it is done by react 
//React.createElement  TO HTML -- it is done by render 


//babel is also known as Transpiler 
//it is convert the html code into react 

 //          babel/Transpiler             REACT                           render
 //<h1>this is jsx</h1> => React.createElement => react element(JSOBJECT) -- IT Convert it into HTML ELEMENT 

//now we gonna use jsx instead of these react creat element  


const newElement = (
    <>
       <h1>This is heading 1 using JSX ...</h1>
       <h1>This is heading 2 using JSX</h1>
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(newElement);

//WE know our element takes only 1 element at at time so we use div as a one element or we can remove div text also to more accurate 

//make sure it only run using 
//npx parcel index.html               --- at this the server is running and give u a local host link 

//it wont run normal like u open html file with live server it  wont work 

//u can also give class and id like html but make sure everything is not like html 

//use className instead of class

//you can also put JS EXPRESSION INTO JSX

JSX : JS EXPRESSION
//it means javascript expression using {}

//also it give u error with how to solve 

const  nickName = "sahil";
const obj = {
    age : 22 ,
    dept : "finance",
}
const newElement = (
    <>
       <h1>This is heading 1 using JSX ...   {nickName}</h1>
       <h1>This is heading 2 using JSX {obj.dept}</h1>
    </>
)


//we can't do these thing in normal HTML 

//whenever u see curly brackets it means u are gonna put some JS into it 
//like in style tag it takes two curly brackets 

//if u want to put js into JSX then u have to use curly brackets


//LETS TALK ABOUT REACT COMPONENTS -- 

//class based component  --Now it Depreciated
//function based component  -- it means how u write function in react

//if u want to write JS in JSX then u have to use {} brackets

//at the end react is JS

