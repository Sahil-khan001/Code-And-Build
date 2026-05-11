let data = [

  {
    ques: "Which HTML tag is used to create a hyperlink?",
    options: ["<img>", "<a>", "<p>", "<div>"],
    ans: "<a>"
  },

  {
    ques: "Which method converts JSON string into JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()"
    ],
    ans: "JSON.parse()"
  },

  {
    ques: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Digital Ordinance Model",
      "Desktop Object Method"
    ],
    ans: "Document Object Model"
  }

];



const question = document.querySelector('#question');
const answer = document.querySelector('#answerButtons');
const nextbutton = document.querySelector('#nextBtn');
const scoreText = document.querySelector('#scoreText');



let currentQuestion = 0;

let score = 0;



function showQuestion(){

    // clear old buttons
    answer.innerHTML = "";

    // current object
    const obj = data[currentQuestion];

    // show question
    question.textContent = obj.ques;



    // create buttons
    obj.options.forEach((option)=>{

        const btn = document.createElement('button');

        btn.textContent = option;

        btn.classList.add('answerBtn');

        answer.appendChild(btn);



        // answer checking
        btn.addEventListener('click', ()=>{

            if(option === obj.ans){

                score++;

            }

        });

    });

}



// next button
nextbutton.addEventListener('click', ()=>{

  currentQuestion++;

  if(currentQuestion < data.length){
    showQuestion();
  }
  else{
    question.innerHTML = "Quiz Finished";
    answer.innerHTML = "";
     scoreText.textContent = `Your Score is ${score}`;
  }


});



// first question
showQuestion();