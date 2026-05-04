// const color1 = document.querySelector('#red');
// const color2 = document.querySelector('#blue');
// const color3 = document.querySelector('#orange');
// const color4 = document.querySelector('#green');
// const color5 = document.querySelector('#purple');


// color1.addEventListener('click' , ()=>{
//     document.body.style.backgroundColor = "red";
// })

// color2.addEventListener('click' , ()=>{
//     document.body.style.backgroundColor = "blue";
// })

// color3.addEventListener('click' , ()=>{
//     document.body.style.backgroundColor = "orange";
// })

// color4.addEventListener('click' , ()=>{
//     document.body.style.backgroundColor = "green";
// })
// color5.addEventListener('click' , ()=>{
//     document.body.style.backgroundColor = "purple";
// })

//THE PROBLEM IS IF THERE IS 100 BUTTONS WE HAVE TO ADD IT MY MANUALLY SO TO SOLVE THIS WE USE -- 
//We use querySelector all -- optimised 


// const button = document.querySelectorAll('button');
// console.log(button);

// button.forEach((butt) =>{
//     // console.log(butt)

//     butt.addEventListener('click' , ()=>{
//         // document.body.style.backgroundColor = butt.id;
//     })
// });

//if we have 100 button then it takes 100 event listener and because of it it create problem in memory 
//everytime we click on a button it create event listener it create problems
//because of memory full the process of task is slow so to overcome these problems we use -- 

//now OPTIMISED THIS USING EVENT BUBBLING OR CAPTURING -- we set eventlistener to Parent and whenever any child trigger the parent knows and set its color acc to it 



// const par = document.querySelector('#root');

// par.addEventListener('click' , (event)=>{
    
//     // const body = document.body; or use this 
//     const body = document.querySelector('body');

// //  console.log(event.target);  ---- it give child info 
// //  console.log(event.target.id);  -- it show button id 
// const button = event.target;
// body.style.backgroundColor = button.id;

// },false);

// *******************************************************
//in short it look be like 

// const par = document.querySelector('#root');

// par.addEventListener('click' , (event)=>{
// document.body.style.backgroundColor = event.target.id;
// },false);


//THIS IS EVENT DELEGATION -- 
//means i am not putting eventlistener on every child 
//we delegate event to parent now parent know which child is trigger to the event 

//what happened here is whenever we click on any button its event appear in parent  now parent know which child is triggering the event listener we know by default it event bubbling whenever we click on any child it expand outside and after some time it reacch parent then parent know the target in this way event bubbling works also opposite of its is event capture


//suppose we have a case we have a h1 tag with some heading when we click on heding the color changes it create problem to solve this we ue 
// event.target.tagName -- basically it print the tagName of ur element either it is button , h1 , paragraph

// so in code we use this like --

const par = document.querySelector('#root');

par.addEventListener('click' , (event)=>{

    // console.log(event.target.tagName);     ///it print the element tagname which is triggering 

    if(event.target.tagName == "BUTTON"){
document.body.style.backgroundColor = event.target.id;
    }
},false);

//TO STOP THE EVENT BUBBLING AND THE EVENT CAPTURING we use -- 

// basically if u click on child in event bubbling -- it show child , parent , grandparent basically it expanding but if u use 
//event.stopPropagation();
//after using this parent or anchestor dont know which even is triggering eg like 


//   child --

//   child.addEventListener('click' , ()=>{
//     console.log("child clicked");
    //    event.stopPropagation();
//   })









// *********************************************************************************
//EVENT BUBBLING DEFINING -- 
//lets take an example -- 

//lets we have 3 box one inside another child , parent , grandparent and all have click event listenere if we clicked in child element the parent and grandparent also clicked somehow 


 //if we clicked on child element then it also reflect in parent and grandparents all were executed 

//   child --

//   child.addEventListener('click' , ()=>{
//     console.log("child clicked");
//   })

//   parent --

//   parent.addEventListener('click' , ()=>{
//     console.log("parent clicked");
//   })

//   grandparents --

//   parents.addEventListener('click' , ()=>{
//     console.log("parents clicked");
//   })

//if we clicked on child ones then first 
//child execute  then it propogate and go outside then parent execute then grandparents

//THIS IS CALLED THE EVENT BUBBLING -- 
//like a bubble that propogate from inside that is child and expand it towards outside till grandparents
// ALso if we click on parent element then parent execute then grandparent like bubble outside not the child one 


// and
//opposite of its is 
//EVENT CAPTURING -- like if we click on child element  then first grandparents execute then parent then child one
//eg suppost a child capture then first cry grandparent then parent then child

// const grandparent = document.querySelector('#grandparent');
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');

// //for the event bubbling -- 
// // addEventListener(first_event , call_back_function , caputure);

// grandparent.addEventListener('click' , (event)=>{
//     console.log(event.target);
//     // console.log("granparent clicked");
// } , false)
//                                   //u have to write true  for the EVENT CAPTURING
// parent.addEventListener('click' , ()=>{
//     // console.log(event.target);
//     // console.log("parents clicked");
// } , false)

// child.addEventListener('click' , ()=>{
//     // console.log(event.target);
//     // console.log("child clicked");
// }, false)


// --by default/false -- it is EVENT BUBBLING -- inside to outside
// --  true -- it is EVENT CAPTURING  -- outside to inside 


//how parent know that which child is 
// u know we do addeventListener with parent so the parent how know it which child is trigger so we use event.target like this 


// if we click on child then in parent -- child target appear -- it dont print parent target 
//it means whom trigger to the EVENT 

//you can write its won target using event.currentTarget

//basically expand bubbling is going on so parent/anchestor have to known which which child is triggering using event.target also if they want to know its self target then event.currentTarget 




// grandparent.addEventListener('click' , (event)=>{
//     console.log(event.target);

// } , false)
                            
// parent.addEventListener('click' , ()=>{
// } , false)

// child.addEventListener('click' , ()=>{
// }, false)
//in this example grandparent have eventlistener with event.target he listen who is going to trigger the event it is child or parent or me whenever someone click any of three then it print in console
//basically grandparent is listening which child or pota did event trigger then he knows 
//event.currentTarget -- know about ownself which element , event i am 

//what is the benefit of all this means event  bubbling -- we optmised our background color generator program move to the upper code for this -----

