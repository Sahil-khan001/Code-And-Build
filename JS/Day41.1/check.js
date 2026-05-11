// let obj1 = {

//     a:1,
//     b:2,
//     c : 3,
//     d : 4
// }

// let obj2 = {
//     c : 3,
//     d : 4
// }

// Object.seal(obj1);
// obj1.a = 5;

// const {a , b , ...c} = obj1;


// console.log(c);


let user1  = {
    name : "sahil",
    age : 33,
}

let user2 = Object.create(user1);
// user2.__proto__ = user1;

user2.name = "hitesh";
user2.dep = "finance";



// console.log(Object.getOwnPropertyDescriptor(user2 , 'name'));

// Object.defineProperty(user2 , 'name' , {
    // writable : true,
    // })
    
    
    
    // user2.name = "sharique";
    
    
    // console.log(user2);
    
    // console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));
    
    // Object.defineProperty(Object.prototype , 'toString' , {
    //     enumerable : true,
    // })
    
    // for(let key in user2){
    //     console.log(key);
    // }
    


    let arr = [32,35,6];


    let obj = {
        user : "sahil",
    }


    // arr.filter((val , index) => {
        
    //     console.log(val * index);
    
    // });


    // console.log(prime);
    

// let sum =  arr.reduce((acc , curr) =>  acc + curr, 0);

// console.log(sum);

// if(obj.hasOwnProperty("user")){
//     console.log("True");
// }else{
//     console.log("false");
// }


// let matt = new Map();

// matt.set("name" , "khan");

// console.log(matt.get("name"));


// const ele = document.createElement('list');
// ele.innerHTML = "name";
// ele.setAttribute("class" , "alen");


// document.body.append(ele);

// ele.remove();


// const button = document.querySelector('button');

// button.addEventListener('click' , ()=> {

//     const input1 = document.querySelector('#first');
//     const val = Number(input1.value);
//     const input2 = document.querySelector('#second');
//     const val2 = Number(input2.value);

//     const RESULT = document.querySelector('#result');
//     RESULT.innerHTML = `the sum of input1 and input2 is ${val + val2}`;


// })


const data = [
"the best view comes after the hardest climb",

"never never give up",

"the pain u feel today is the strength u feel tomorrow"
]



// const button = document.querySelector('button');
// button.addEventListener('click', ()=>{
//     const result = document.querySelector('#quote').innerHTML =data[Math.floor(Math.random()*data.length)]; 
// })

// // console.log(data[Math.floor(Math.random()*data.length)])


document.body.addEventListener('click' , (event)=>{
    
    const ele = document.createElement('div');
    ele.setAttribute("class" , "circle");
    
    
    
    let color = ['red' , 'blue' , 'yellow' , 'green'];
    ele.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
    

    const x = event.clientX;
const y = event.clientY;

ele.style.left = `${x-50}px`;
ele.style.top = `${y-50}px`;
    
    setTimeout(() => {
        ele.remove();
    }, 5000);
    document.body.appendChild(ele);
})

