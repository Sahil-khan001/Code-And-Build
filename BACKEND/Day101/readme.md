Lets talk about LLMs --
from first thought principle 

Large Language Models

ChatGpt -- chat generative Pre-trained Transformed

--behind the scenes 
if start from the first bassic priniciple -- 

opt -1 stored in key value pair --
earlier chatgpt like in zomato use this -- but it will not give flexible answer
so this method is failed there is infinite key value pairs --

Now we have tokenization --
what basically we are doing is --

we convert each word into token 
like 
hi how are you 
it convert token for hi then space then how then ar then e then space then y then ou 
it depends upon company to company how they convert acc to them --

Basically we have Transfomers --

Transformers convert these word into token one by one 
like how are you   then tranfomers convert into token and predict token ONE BY ONE 
i am then go again how are you I am  then give next token I am fine  then go again  how are you I am fine then next i am fine what about you 
SO THAT IT CAN MAKE ACCURATE PREDICTION of next token perfectly -- 

this transformer have some code written of AI/ML

basically what we do is -- we first convert into token using tokenization 
then transfommer help in to find the next accurate token by seeing the prev one 

EveryTime we have to give full context so that it can be easy for him to find the next accurate token acc to prev context

first we --
convert input into token 
then transformer took this token to generate new token 
this loop is going until we get the desired data -- 

Just think how complex algo is used in Transformer it predict right token for next 
eg --
can u do this work -- 
nahi kr sakta hu
nahi , kr sakta hu
both sentence now have different meaning 

basically we have to generate the next token -- 
based on prev ones 
[10 , 30 , 53 , 22  , next ?]
may be it work like on some combination , some values , some patterns , some diff algorithm may be

suppose there is new word coming
eg : fjlfjfjsdfhjsf
so he convert it into token
then try to guess the next token 

suppose we have --
frontend - code 1 , code 2 , code 3
backend -- chatgpt , code1 , code2 , code3

we have to send the prev context in order to get new code --
now he understand ok he is talking about this context 
because prev context understand him better for next token or data
based on prev context it generate good context 

chatgpt is hosted on diff server 
in backend we do -- authentication  , other things , optimisation for the LLMs tokens so we can get less bills on token spending 

because gpt need more memory so we host it on another server 
as we see in particular window we have limited token 
and for INPUT and OUTPUT we have limited token for both 

Suppose we take an Real world example -- 
like an edtech build there coding platform in which they are using ai api like chatgpt 
and in ai window if one student have so many questions are there 
so now backend have to optimise it if it taake old prev questionss to gpt then token increaasse bill increase 
so baackend developer have to optimise it -- 
only send keywords related to now questions for optmisation and minimum use of tokenss
because it have plan after hitting 1m token
owner have to pay the bill

that's how gpt earn --

<!-- ==================================================================================================================== -->

Now we create an LLM application using free Api - gemini one
others are paid but can u them too -- 

lets do --
firsst go to ai studio 
then create free api 
for code refer documentaation
in code we have some dependencies
sso we have to install it from npm then we use

code be like --
<!-- ---------------------------------------------------------------------------------------------------HERE we have code of Gemini free api -->
    

    Now we are going to setup the backend server --
    and do some request from frontend using postman --
    code be like -- 

    first we create server ussing express -- 

    const express = require('express');
const main = require('./llm');

const app = express();
app.use(express.json());

app.post("/chat" , async (req , res)=>{

    try{
        const msg = req.body.msg;
        const answer =  await main(msg);
         res.status(201).send(answer);

    }catch(err){
        console.log("error " + err.message);
    }
})


app.listen(1000 , (req , res)=>{
    console.log("Server is listening at port no : 1000  : ")
})

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey:YOUR_API_KEY_HERE
});

async function main(msg) {
    const interaction = await ai.interactions.create({
        model: "gemini-3.6-flash",
        input : msg

    return interaction.output_text;
}

// main();

module.exports = main;
    NOTE --

    like u are using 
    we know async await return us promise 
    we remember itss code -- new Promisses resolved and reject but here we are not using any promisse
    so whatever it is returning it wrap up as Promise REMEMBER it 


    Now how to store history of chat in server--
    like frontend have to send all the prev chat again and again or backend have to do this
    obviously baackend have to do this 

    for this we have to options --

    either from frontend -- we send history + new ques everytime 

    second which is secure , optimised way --
    we store all the history in the database 
    at the time of new ques we take hisstory from db + new quesstion 
    and give it to LLMs

    that is how the real app to work 

    also if we use frontend side --
    then we have so much big data -
    everytime we send that much of token which include high bills

    the big message we give to llm 
    the more token it burn the more bill it have --
    Becaussse we know it count input and output both token and charge us bassed on thaat -- 

    so backend option is safe because there we can optmised token too -- 

    How the architecture look like --

    frontend -------------------------- backend ----db attach(store history) -----------llm(connect)

    our backend taaake new ques + old history or we can attach an llm for summaary of hisstory of daaata
    so every time we dont need to sssend the full daaataa
    or laater we discusss aabout vector db it is also a optmissed waay to get summary of old hisstory 

    right we are not implement optimissed waay we take full hisstory + new quesstions 

    U can learn aall thesse thingss by own like we get probelm sso we get vector db -- 
    thaat is how ssystem build aand design 

    alsso we can set token on output like -- only usse 200 token for answer 
    otherwissses it generate long detaailed aansswer which generaaate lot token and getting billss

    alsso we haave to maintaain the user experience aand profit of compaany aas well 

    right now we sstory history in backend not in db --
    code be like --
    alsso we haave to mention id as well to uniqely optimise --
    code be like --

    const id = req.body.id ;
    const msg = req.body.msg;

    const chathistory = {};

    const (!chathistory[id]){
        chathistory[id] = [];
    }

    const history = chathistory[id];
    const promptMessage = [...history , {
       type: "user_input",
       content: [
                    {
                        type: "text",
                        text: "Hello, my name is Khan. What's your name?"
                    }
                ]
    }]

    const answer = await main(promptMessage);
    console.log(answer);

    -- but in main we are passsing the sstring 
    but we can pass the array too --

    now here we are sstoring daataa in backend sserver
    but u caan store it in mongdb , redis db for faasst ressponsse

    alsso u can do one thing thaat iss 
    u caan optmisse it too
    like in reaal gpt if one window haave some hisstoy another window can't get thaat history --
    so we haave to optimisse for window too 
    so with id we caan sstore userwindow too --

    

    




