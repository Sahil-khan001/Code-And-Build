//basically we applied event on the form and the label and input is the child of it 
//if we click on any child it appears in the parent 
//BASICALLY EVENT BUBBLING work on Parent and child concept 
//whenever child did something parent knows easily 
//now we don't want to set addEventListener to every child element

// const form = document.querySelector('form');

// form.addEventListener('click' , (event)=>{
//     console.log(event);                        //it print the pointer event when we click anywhere on the form page 

// form.addEventListener('click' , (event)=>{
//     console.log(event.target);            //which event is triggering it show it

// form.addEventListener('click' , (event)=>{ //it show id of event which is triggering 
//     console.log(event.target.id);

// form.addEventListener('click' , (event)=>{ //it trigger the event when we click after input in input
//     console.log(event.target.value);

// form.addEventListener('input' , (event)=>{  //it trigger the event when we do any input in input
//     console.log(event.target.value);

// form.addEventListener('change' , (event)=>{
//     console.log(event.target.value);        //it trigger when we input into input then click outside
// })

// form.addEventListener('focus' , (event)=>{
//     console.log(event.target.value);       //it dont follow event bubbling when we click in input it dont print anything if u want to use in then use directly in child it dont appear on parent 
// })

// form.addEventListener('focusin' , (event)=>{
//     console.log(event.target.value);  //it follow event bubbling when we click in input it trigger if value is there then it show that otherwise nothing 
// })

// form.addEventListener('focusout' , (event)=>{
//     console.log(event.target.value);  //it follow event bubbling when we click in  input and get out then it trigger  
// })

// form.addEventListener('click' , (event)=>{
//     console.log(event.target.value);    //when click it trigger event
// })

// form.addEventListener('dblclick' , (event)=>{
//     console.log(event.target.value);   //dbl click dont work on parent it work directly on child
// })

// form.addEventListener('submit' , (event)=>{
//     console.log(event.target.value); 
//     console.log("Forms submitted ");  //it appear and then disappear because when we submit form the page refresh everytime 
// })

// form.addEventListener('reset' , (event)=>{
//     console.log("Reset the forms");  //it reset the form but u have to set reset in the html apart from this like --  
// })                                    //<button type="reset">Reset</button>

//or
//u can directly use this button in htmlit work same like reset //<button type="reset">Reset</button>


 // ************************************************************************

// const form = document.querySelector('form');


// form.addEventListener('submit' ,(event)=>{

//     event.preventDefault(); 
//     //we use this not to refresh the page because when we submit the form it refresh again and again due to this we can't see our input data
//     //it means plz appear original page dont try to refresh the page

//    const first = document.querySelector('#first');
//    console.log(first.value);

//    const second = document.querySelector('#second');
//    console.log(second.value);

//    const third = document.querySelector('#third');
//    console.log(third.value);

//    const Result = document.querySelector('#result');
//    Result.innerHTML = `FirstName is : ${first.value} , LastName is : ${second.value} , Age is : ${third.value}`;


// })

//suppose u have 100+ input value then how can u input these 100 values everytime to solve this we have -- 

// FormData

const form = document.querySelector('form');


form.addEventListener('submit' ,(event)=>{

    event.preventDefault(); 
    
    const data = new FormData(form) ;  //any data u submit in form in present in data
    // console.log(data);
    //this is an API or function or Object
    //whatever the data corresponding to the form it comes to u 
    //whatever the data u submitted it comes to u 

    //all the data present in this data is in key : value pairs
    //u can print its keys and values also like -- 

    // console.log(data.keys()); //it give iterator but u know how to iterate over the iterator or we can convert it into the arrays and then we get keys and values or we can use for of loop to get the keys and values
    // console.log(Array.from(data.keys())); //it give iterator but u know how to iterate over the iterator or we can convert it into the array then i give keys
    // console.log(Array.from(data.values())); //it give iterator but u know how to iterate over the iterator or we can convert it into the array then i give keys
    // console.log(Array.from(data.entries())); //it give iterator but u know how to iterate over the iterator or we can convert it into the array then i give keys
    
    //if u have iterator then u can use for of loop like to iterate 
    // for(let key of data.entries()){
    //     console.log(key);
    // }  //it print value in key value pairs
    for(let [key , value] of data.entries()){
        console.log(key,value);
    }  // Individual key value only using destructure

    

})

//short note for DATAFORM  : what is form data it is an API  -- u know that our form data submit in form of key value pairs 
//suppose we have 100 + lines of key value pairs of data how can we access it ones so for this we use form data
//whenever u submit the data then the formdata access the data that present in form so that we can access key values at together so make sure in forms always use name attribute also because of this we can acess 
//Object.keys(); , Object.values ,  console.log(Array.from(data.keys())) it give iterator so we have to iterate over it using convert into array or using for of loop 
//Now u dont have to do write individual values because now u can access it as once using FormData