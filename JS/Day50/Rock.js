const choose = ['Rock' , 'Paper' , 'Scissor'];
//we use array here because we can iterate over it easily 

 const genz1 = document.querySelector('#generate1');
 const genz2 = document.querySelector('#generate2');
 const resultt = document.querySelector('#result');

const button = document.querySelector('button');
button.addEventListener('click' , (event)=>{

    genz1.innerHTML = choose[Math.floor(Math.random()*choose.length)];  
    genz2.innerHTML = choose[Math.floor(Math.random()*choose.length)];

  const p1 = genz1.textContent;
  const p2 = genz2.textContent;

  if(p1 === p2){
   resultt.textContent = " Winner is  : Draw";
  }
 else if (
    (p1 === "Rock" && p2 === "Scissor") ||
    (p1 === "Paper" && p2 === "Rock") ||
    (p1 === "Scissor" && p2 === "Paper")
  ) {
    resultt.textContent = "Winner is : Player1";
  } 
  else {
    resultt.textContent = "Winner is : Player2";
  }


  
})