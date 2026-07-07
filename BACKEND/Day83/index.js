const fs = require('fs');


console.log("we are reading a json file using libuv through os");

fs.readFile("./data.json", "utf-8" , (err, res)=>{
    console.log(res);
})


