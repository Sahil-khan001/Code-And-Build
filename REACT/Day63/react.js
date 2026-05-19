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
root.render(ele1);
root.render(ele2);
root.render(div);

//whenever we render any element it first clear the previous data then render this element 
//it means even if u write element directly in html still it not show that elment if we already render a elment through REACT 
//that's how REACT works 

//but if u want to print 2 elem at same time then put those elements and put it into div then create that single div element and render it now it take 2 elements inside it already so now on screen it show 2 ele at same time 

//IT MEANS WHEN U WANT TO PUT 2 CHILDREN AT SAME TIMES THEN U USE ARRAY PUT 2 AT SAME TIME 


//we have a JSX 
//because of JSX u can write html in react js and JSX will convert it in react 

