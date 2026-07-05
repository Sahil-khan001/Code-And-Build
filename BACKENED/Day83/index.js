const fs = require('fs');


console.log("this is file reading");

fs.readFile("./data.json", "utf-8" , (err, res)=>{
    console.log(res);
})


