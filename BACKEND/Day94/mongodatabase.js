// getting-started.js
const mongoose = require('mongoose');
const {schema} = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    //schema be like --
    
    
}
main()
.then(()=> console.log("Mongoose is connecting with mongodb"))
.catch(err => console.log(err));