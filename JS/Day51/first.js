// Generate a basic insight based on DOB

//  Based on Month: size 22
const zodiacSigns = [
    "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
    "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
];


// Based on Date, size 31
const compliments = [
    "You have a great sense of humor.",
    "Your smile lights up the room.",
    "You bring out the best in people.",
    "You're an incredibly thoughtful person.",
    "You have a heart of gold.",
    "Your creativity is inspiring.",
    "You're a fantastic problem-solver.",
    "Your kindness is contagious.",
    "You have an amazing ability to connect with others.",
    "You're so knowledgeable about so many things.",
    "Your determination is admirable.",
    "You're a great listener.",
    "You make the world a better place.",
    "Your positivity is infectious.",
    "You have an eye for detail.",
    "You're always so helpful and considerate.",
    "You have a natural talent for leadership.",
    "Your courage is inspiring.",
    "You're an amazing friend.",
    "You have a unique perspective that is refreshing.",
    "Your energy brightens everyone’s day.",
    "You're incredibly resourceful.",
    "You have a wonderful way with words.",
    "You're a ray of sunshine on a cloudy day.",
    "Your hard work is paying off.",
    "You're so reliable and trustworthy.",
    "You have a fantastic sense of style.",
    "Your confidence is inspiring.",
    "You're a great mentor and teacher.",
    "Your dedication is remarkable.",
    "You make everyone feel valued and respected."
];


// size 20 victim card compliments  
const victimCardCompliments = [
    "You always do good for others, but they don't appreciate it.",
    "You give so much, but rarely get anything in return.",
    "Your kindness often goes unnoticed, but it’s truly remarkable.",
    "You always put others first, even when they don’t deserve it.",
    "You sacrifice so much, yet people rarely acknowledge it.",
    "You have a heart of gold, but others take it for granted.",
    "You’re always there for everyone, but they’re not always there for you.",
    "You work so hard, yet your efforts often go unrecognized.",
    "You care deeply, even when others don’t reciprocate.",
    "You forgive so easily, even when people don’t deserve it.",
    "You give people the benefit of the doubt, but they rarely do the same for you.",
    "You stand by people in their tough times, but they forget you in yours.",
    "You always try to make peace, even when others blame you.",
    "You handle so much pressure, yet no one sees your struggles.",
    "You give so much love, but people don’t value it enough.",
    "You’re always honest, yet people misunderstand your intentions.",
    "You go out of your way for others, but they don’t return the favor.",
    "You share everything you have, but people still ask for more.",
    "You’re a true friend, even when others don’t treat you the same.",
    "You keep helping others, even when they don’t say thank you."
];



// size is 30
const recommendations = [
    "Feed a street dog and spread kindness.",
    "Plant a tree and nurture it.",
    "Volunteer at a local shelter or community center.",
    "Start your day with meditation for a peaceful mind.",
    "Write down three things you’re grateful for daily.",
    "Spend time with your family and cherish those moments.",
    "Help someone in need, even in small ways.",
    "Read a book that inspires you to grow.",
    "Exercise regularly to keep your body healthy.",
    "Donate clothes you don’t wear to charity.",
    "Cook a meal for someone and share the joy of food.",
    "Smile at strangers and brighten their day.",
    "Learn a new skill or hobby that excites you.",
    "Reduce your plastic use to help the environment.",
    "Disconnect from social media for a day and enjoy the moment.",
    "Start a journal to document your thoughts and dreams.",
    "Spend time in nature and appreciate its beauty.",
    "Compliment someone genuinely and make their day.",
    "Clean your room or workspace to feel more organized.",
    "Drink more water and prioritize your health.",
    "Write a letter to your future self.",
    "Support a local business or artisan.",
    "Listen to someone without interrupting.",
    "Practice random acts of kindness every day.",
    "Save a small amount of money weekly for future goals.",
    "Make a vision board to stay motivated.",
    "Adopt an eco-friendly habit like cycling or walking more.",
    "Spend time with children and learn from their innocence.",
    "Call an old friend and reconnect.",
    "Learn to say no to things that don’t serve your happiness."
];

// size is 20 predictions -- 
const predictions = [
    "You will become a crorepati!",
    "Success is just around the corner for you.",
    "Your dream job is closer than you think.",
    "Expect the unexpected—great things are coming.",
    "You will travel the world in the next few years.",
    "A big opportunity will knock on your door soon.",
    "Your hard work will pay off in ways you can't imagine.",
    "You will make a difference in someone's life.",
    "A surprising adventure is coming your way.",
    "Great things come to those who wait—your time is coming.",
    "Your creativity will lead to great success.",
    "A life-changing moment is just ahead.",
    "Get ready for some exciting news soon.",
    "A financial breakthrough is in your future.",
    "You will find happiness in the smallest things.",
    "Your patience will lead to big rewards.",
    "A new friendship will change your life.",
    "Prepare for a future full of opportunities.",
    "A career breakthrough is on the horizon.",
    "You will leave a legacy of inspiration."
];


// const form = document.getElementById('astroForm');

// form.addEventListener('submit',(event)=>{
//     event.preventDefault();

//     const Name = document.getElementById('name').value;
//     const SurName = document.getElementById('surname').value;
//     const Day = Number(document.getElementById('day').value);
//     const Month = Number(document.getElementById('month').value);
//     const Year = Number(document.getElementById('year').value);

//     const result = document.getElementById("result");
    
//     const first_message = `Hello ${Name} ${SurName}.`;
//     const second_message = `Your Zodiac sign is ${zodiacSigns[Month-1]}.`
//     const third_message = compliments[Day-1];

//     let index = Math.floor(Math.random()*20);
//     const fourth_message =  victimCardCompliments[index];


//     index = (Name.length * SurName.length * Year)%30;
//     const fifth_message = recommendations[index];

//     index = (Day*Month*Year)%20;
//     const sixth_message = predictions[index];
    
//     result.innerText = `${first_message} ${second_message} ${third_message} ${fourth_message} Our Reccomendation for you: ${fifth_message} Your Future Prediction is: ${sixth_message}`;

// })

const form = document.querySelector('#astroForm');
form.addEventListener('submit' , (event)=>{


    event.preventDefault();
    

    const FName = document.querySelector('#name').value;
    const SName = document.querySelector('#surname').value;
    const Day = Number(document.querySelector('#day').value);
    const Month = Number(document.querySelector('#month').value);
    const Year = Number(document.querySelector('#year').value);
    //whenever we input in number it give answer in string so we have to convert it into string 
    
    // console.log(FName , SName , Day , Month , Year);
    
    const first_message = `Hello ${FName} ${SName}`;
    const second_message = `Your Zodiac Sign is ${zodiacSigns[Month -1]} `; //this is based on month ans we do -1 because array start with 0 index 
    const third_message = compliments[Day -1]; //because of indexing 
    const fourth_message = victimCardCompliments[Math.floor(Math.random()*victimCardCompliments.length)];
    
    const findex = (FName.length * SName.length * Year)%30;
    const fifth_message = recommendations[findex];

    const sindex = (Day*Month*Year)%30;
    const sixth_message = predictions[sindex];
    
    const Result = document.querySelector('#result');
    Result.innerHTML = `${first_message} ${second_message} ${third_message} ${fourth_message} Our Recommendation for you :  ${fifth_message} Your future Prediction is :  ${sixth_message}`;
    
})

//Learning from this project is -- 

//1. use chatgpt for simple task like data generation or html or css if u are on another techstack
//2. if u have data generated of size 20 then u have two option --
        // either use math.random to generate any data present in array it will be repititive also
        //second option if u want to use data in series wise then u can use % rule 
                 //means whatever the size of data any calculation then modulus by size of date 
                 //it will give value from 0 to size - 1 value eg like 20 -- so u have indexing from 0 to 19 now u have data in series 
  //for eg for the month , day -- [month -1][day -1] for indexing set  , (FName.length * SName.length * Year)%30; 
        //this is useful in case u want that username with the same name will get similar data okk

//3. 
//event.preventDefault() -- it is used to not to do refresh page like if we dont use this then form submitted into backend but if we use then we have control of data means now it appears on the SCREEN


