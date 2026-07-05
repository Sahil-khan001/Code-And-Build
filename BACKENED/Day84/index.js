const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.end("hey this is default page");
    }
    else if(req.url === "/contact"){
        res.end("this is contact page");
    }
    else{
        res.end("this is error page");
    }
})

const listen = server.listen(4000 , ()=>{
    console.log("server is running ....");
})

//to run this go to broswer and run localhost:4000



