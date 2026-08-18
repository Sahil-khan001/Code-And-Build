Lets talk about LLMs --
from first thought principle 

Large Language Models

ChatGpt -- chat generative Pre-trained Transformed

--behind the scenes 

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
may be it work like on some combination , some values , some patterns

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
in backend we do -- authentication  , other things

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






