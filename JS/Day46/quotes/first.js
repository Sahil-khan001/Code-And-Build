const quotes = [
    "The best way to predict the future is to create it. — Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "It does not matter how slowly you go, as long as you do not stop. — Confucius",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "The harder you work for something, the greater you'll feel when you achieve it. — Anonymous",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Dream big and dare to fail. — Norman Vaughan",
    "Don’t let yesterday take up too much of today. — Will Rogers",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "It always seems impossible until it's done. — Nelson Mandela",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair"
  ];
  
  
  //RANDOM QUOTES GENERATES USING RANDOM CONCEPTS -- 
  
  // function generatQuote(){  
  //   const text = document.getElementById("quote");
    
    
  //   const index = Math.floor(Math.random()*quotes.length);
  //   text.textContent = quotes[index];
  //   }

    // setInterval(generatQuote,5000);

    // ***********************************************


    //now adding a button to generate quotes like 

    // const butt = document.querySelector('button');

    // butt.addEventListener('click' , ()=> {                             //in 1st place u have to write operation like click , dblclick  , mousemove , mouseover , 2nd is callback function 
    //    //now put the work u want to do    
    //     const text = document.getElementById("quote");
    
    
    // const index = Math.floor(Math.random()*quotes.length);
    // text.textContent = quotes[index];

    // });

    
    //if u click any key on keyboard then quote change the syntax is  --
//when ever u press any key it work 

    // document.addEventListener('keydown', (event)=>{       //we write document here because we can't write body we have to write on a object so this whole page is into document that's why we use document  -- document is whole page
      
    //   // console.log(event.key == "enter");

    //  if(event.key == "Enter"){  //event have allinfo about which button u are clicking it act as a object

       
    //    const text = document.getElementById("quote");
       
       
    //    const index = Math.floor(Math.random()*quotes.length);
    //    text.textContent = quotes[index];
    //   }

    //   console.log(event.target); //basically who is target the body 
    // })

    //keyup -- until u release the button it con't change 
    //keydown -- when u click any button it change

    //   document.addEventListener('click', (event)=>{       //we write document here because we can't write body we have to write on a object so this whole page is into document that's why we use document  -- document is whole page
      
    //   console.log(event.target);  //in this case the target is button / means on which it on working 
    //   console.log(event.type); //in this case the the type is click as mentioned
    //   console.log(event.clientX);  //how much u have click on the left side that is horizontally on the x axis
    //   console.log(event.clientY); //how much u have click vertically that is y axis 
    //   console.log(event.key);
       
    //    const text = document.getElementById("quote");
       
       
    //    const index = Math.floor(Math.random()*quotes.length);
    //    text.textContent = quotes[index];
      
    // })



    ////////////////////////////////////////////////OR
     
      //  const butt = document.querySelector('button');

      // butt.addEventListener('click', (event)=>{

      //   if(event.type = "Enter"){

      //    const quo = document.querySelector('#quote');
      //    quo.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
      //   }
      // })




























    
   //RANDOM COLOR GENERATE USING RANDOM CONCEPTS -- 

  //  function changeColor(){
  //    //rgb using random -- 
  //    let color1 = Math.floor(Math.random()*256);
  //    let color2 = Math.floor(Math.random()*256);
  //    let color3 = Math.floor(Math.random()*256);

  //  let back = document.getElementById('backcolor');
  // //  back.style.backgroundColor = `blue`;                      we can use also ` ` instead of this 
  //  back.style.backgroundColor = `rgb(${color1} , ${color2} , ${color3})`;
  //  }


  //  changeColor();

  //  setInterval(changeColor , 1000);




  // NOTE -- ONE MORE THING THAT I LEARN IS WE CAN USE ` ` this instead of " "
























    
    
    // //  Chnage the background color in every 5 second
    //   function changeColor() {
      //     const r = Math.floor(Math.random() * 256);
      //     const g = Math.floor(Math.random() * 256);
      //     const b = Math.floor(Math.random() * 256);
      
//     const color = `rgb(${r}, ${g}, ${b})`;

//     document.body.style.backgroundColor = color;
//     // document.getElementById("colorText").innerText = color;
//   }

//   // run every 5 seconds
//   // setInterval(changeColor, 5000);































// DOUBTS RELATED TO RANDOM 
// console.log(quotes.length);

// let min= 0;
// let max = 20;

// const random = Math.floor(Math.random()*(max-min +1)+min);
// console.log(random);

