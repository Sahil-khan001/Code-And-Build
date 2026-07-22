const mongoose = require('mongoose');

async function main(){
     mongoose.connect('mongodb+srv://communication981171_db_user:mongodb@cluster01.lfcg0o2.mongodb.net/Twitter')
}


module.exports = main;
