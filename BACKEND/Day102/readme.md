lets talk about MCP -- 

Model Context Protocol -- 

we know we have to provide previous context to the LLMs 
so that it can generate accurate next context/token

it is very imp. to send the prev context 
we alreaady did this with our project too 
we store history of prev context 
when ask for new ques we give history + new quess then saave it too in history and cycle repeaat

so that what mcp says like we have to give prev context to model with some protocol
other wise he is not able to answer

suppose u ask for current delhi weather 
he is not able to answer it
because he doesn't have context relaated to it like delhi live weather 

but because of mcp now it can give uss current delhi weaather as well
but not earlier
how is he doing like -- web search but until when
like we have a code for this llm so like we have to take a pause until he doing web search
no LLMs codes are in gbs and run in ram so this method will not work then -- 

--2nd option -
we can't edit in llms code to input api service becausse of it if it will pause then it takes memory which increase bills
so we can't do it 

--3rd
we can't put api service in backend too it will not understand simple english context 
so this is not right method -- 

what we did iss -- we make another llm parallel to backend what it does is 
suppose there is a request from frontend how is the Delhi weather write now --
so backend give it too llm and tell llm to tell it just tell me its INTENT
but give me in JSON FORMAT --
{
    "" : ""
}

intent --- weather -- {intent : Weaather , Data : 18}
          google search --  {intent : google , Data : 18}
          cryptocurreny --  {intent : crypto , Data : bitcoin}
          wikipediaa -- {intent : wikipedia , Data : 18}

          BASICALLY backend have all thesse api like for Weather , for Google Search , Check Cryptocurrency , Wikipedia Search 
          they have access of all these api's that 

then we can check if intent == weather then fetch from weather API'
if intent == google search then do google search

when backend got data in json now he know he can fetch data from weather api easily
and taake context like -- 18 deg Celcius

now he have data as well --
now backend give quesstion asked by frontend "how is delhi weaather " + own fetch daata (18 celisuss)  give it to LLMs

now LLms add some extra line from it aand give this dataa
that whaat he do exactly instead of web search --

ans by llm be like -- the delhi weather is too cold make sure u wear the jacket before coming outside the weaather is 18 deg celcius 

in this way he give context to frontend at LAST -- 

note -- if u write a wrong word to llm then it will corrected it by themself
so no need to worry about it 

Now where this Mcp server used --
we did our whole work using backened and aanother llm
but the issue iss 
we know in backend we have different code for diff API
one code for weaather 
one code for google seaarch
one code for google wikipediaa
and there are lot more code too for different usecase

so it becomes too complex to put whole code into this -- 
so what we do is --

like u can put whole code into thiss 
but can we give thiss to someone other 
we want to use backend only for api , authentication one 

so all this work done by MCP
we dont want to put load on backend apart from sign in , sign out , aauthenticaation , and normal Api 

apart from this whatever come we give to MCP --
the architecture of MCP be like -- 

frontend --- backend(it only takes normal api , authorization that's it)
---connected to MCP Server 

Mcp server---------Db(it store the prev history of data as well)
it is connected to --------------llm as well(when ever mcp gets ques he give to that llm and take intent in json format to fetch data from particular Api)








