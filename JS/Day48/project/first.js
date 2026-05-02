const form = document.querySelector('form');

form.addEventListener('submit' , (event)=>{
 
   event.preventDefault(); 

  const paisa = document.querySelector('#income');
  const income = Number(paisa.value);
//   console.log(income);

  // Step 1: Standard Deduction
//   income -= 50000;

//   if (income <= 0) return 0;

  let tax = 0;

  // Step 2: Slab Calculation
  if (income > 300000) {
    tax += Math.min(income - 300000, 300000) * 0.05;
  }

  if (income > 600000) {
    tax += Math.min(income - 600000, 300000) * 0.10;
  }

  if (income > 900000) {
    tax += Math.min(income - 900000, 300000) * 0.15;
  }

  if (income > 1200000) {
    tax += Math.min(income - 1200000, 300000) * 0.20;
  }

  if (income > 1500000) {
    tax += (income - 1500000) * 0.30;
  }

//   // Step 3: Rebate (MOST IMPORTANT)
//   if (income <= 700000) return 0;

//   // Step 4: Cess
 tax * 1.04;


const RE = document.querySelector('#result');
RE.innerHTML = `Result is : ${tax}`;

})









//SHORT NOTE 

// use of event.target
//        event.target.id 
    //    event.target.value 


    //we use all this when we have event bubbling 
//if u have a single input then access  it using id then get value to do operation into it 
//if u have more that 1 input and u have work for key value then use form data + values all thsi 