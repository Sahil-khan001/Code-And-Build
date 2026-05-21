// const Element = React.createElement('h1' , {} , "Hello Coder Army");

// // ReactDOM.render(Element , document.getElementById('root'));
// //this method is depreciated in react 18 now we have diff method 
// //eg is like u open a netflix and we have 4 button when u click on 1 button data appeared like it appearing 1,2,3, and at that point u click on ohter button then what happened is the other button not working because we know like js is a single threded language so it first complete it one task then move to other but we have other method to solve this issue 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Element);
// //now we have more access on root now it can easily acccess the power show the user acc to their click 



const ele1= React.createElement('h3' , {id : "first" , class : "1st" , style : {backgroundColor : "blue" , color : "red"}} , "THIS IS BROWN MUNDE");
const ele2= React.createElement('h2' , {id : "second" , class : "2nd" , style : {backgroundColor : "pink" , color : "red"}} , "THIS IS spotify");
const div = React.createElement('div' , {} , [ele1 , ele2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(ele1);
// root.render(ele2);
root.render(div);

//whenever we render any element it first clear the previous data then render this element 
//it means even if u write element directly in html still it not show that elment if we already render a elment through REACT 
//that's how REACT works 

//but if u want to print 2 elem at same time then put those elements and put it into div then create that single div element and render it now it take 2 elements inside it already so now on screen it show 2 ele at same time 

//IT MEANS WHEN U WANT TO PUT 2 CHILDREN AT SAME TIMES THEN U USE ARRAY PUT 2 AT SAME TIME 


//we have a JSX 
//because of JSX u can write html in react js and JSX will convert it in react 
// eg 
// {/* <div>
//     <div>
//         <p></p>
//         <p></p>
//     </div>
// </div> */}

//we do it later 
//Now move to How we optimize our code 

// for optimization we can do -- 
// Remove the comment and Spaces 
// some code is also there that is not been using 
// React and ReactDom -- we are only using the some portion of it 

//we want Production Ready Code so that we can host on the Server 
//we want code that save our TIME
//goal should be to make our file size less as much 
//because less size  -- fast execution 

//to solve this all problems 
//  we have Bundlers -- it optimize our code fully and give us a file 

//Bundler like -- webpack , vite , parcel 
//in these bundler there will be some algorithm that is used to optimize code 
//we can use any Bundler but in this project we use PARCEL 
//now we have to install the parcel 

//first we have to make the package json 
//to make this we use --   npm init 

//package.json -- it is like a meta data
//it contain information of version of tools that u used in the project 


//package-lock.json --
//it contains all the exact version details of tools that u used in the project


//NOW WHAT IS NPM -- 
//npm is node packet manager but in reality it dont have any full form

//whatever the development tools we are using in javascript the database for that tools is present in the npm  
// eg parce : present here
//eg typescript : present here
// react 
//reactDOM

//whenever u need any dev tools then u can use npm and install it from there 

//it is opensource 
//u can contribute there also build something from js then put it into the npm so that other user can use it for free 
//u made a digital clock using js , then u give this code to npm for others users 










