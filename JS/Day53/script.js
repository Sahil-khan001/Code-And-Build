// function fetch(){
//     console.log("data is fetching from backend");
//     setTimeout(()=>{
//         console.log("data feteched succesfully");
//         const name = "sahil";
//         greet(name);
//         meet(name);

//     }, 2000);

    
// }

// function greet(name){
//     console.log(`Hello this is ${name}`)
// }

// function meet(name){
//     console.log(`I hope u verify my name ${name}. I will meet u in Delhi`)
// }
// fetch();


function fetch(call_back){
    console.log("data is fetching from backend");
    setTimeout(()=>{
        console.log("data feteched succesfully");
        const obj = {
            name : "sahil",
            age : 23
        }
        //Data feteched from backend
       call_back(obj);

    }, 2000);

    
}

function greet(name){
    console.log(`Hello this is ${name}`)
}

function meet(obj){
    console.log(`I hope u verify my name ${obj.name}. I will meet u in Delhi`)
}

function age(objj){
    console.log(objj.age);
}


fetch(meet);

//In this eg we write callback function only once for all these three separate function that is greet , meet and age 
//either we have to write diff for both like


// function fetch1(call_back){
//     console.log("data is fetching from backend");
//     setTimeout(()=>{
//         console.log("data feteched succesfully");
//         const obj = {
//             name : "sahil",
//             age : 23
//         }
//         //Data feteched from backend
//        greet(name);

//     }, 2000);    
// }

// function fetch2(call_back){
//     console.log("data is fetching from backend");
//     setTimeout(()=>{
//         console.log("data feteched succesfully");
//         const obj = {
//             name : "sahil",
//             age : 23
//         }
//         //Data feteched from backend
//        meet(name);

//     }, 2000);    
// }

// function greet(name){
//     console.log(`Hello this is ${name}`)
// }

// function meet(obj){
//     console.log(`I hope u verify my name ${obj.name}. I will meet u in Delhi`)
// }

// function age(objj){
//     console.log(objj.age);
// }

//basically specific user want specific detail that's why we use same callback function for all users function 
//u write a function and now u can reuse it multiple times





















//note :-
//whenever u fetch data from backend maximum times u got the data in object forms 
//SetTimeout -- Run only one time
//SetInterval -- Run again and again 