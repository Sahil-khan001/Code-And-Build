const mongoose = require('mongoose');

async function main() {
    // Fixed: Database name should be before query params
   await mongoose.connect("mongodb+srv://communication981171_db_user:mongodb@cluster01.lfcg0o2.mongodb.net" , {
    dbName : "Store",
   });
    // const bookSchema = new Schema({
    //     // username: { type: String, required: true },
    //     // age: { type: Number, required: true },
    //     // bookName: { type: String, required: true },
    //     // id: { type: Number, required: true },  

    //     username: String,
    //     age: Number,
    //     bookName: String ,
    //     id: Number , 
    // });

    // const User = mongoose.model("BookStore", bookSchema);

    // let user1 = new User({
    //     username: "sahil",
    //     age: 23,
    //     bookName: "DeathNote",
    //     id: 1 
    // });
    // await user1.save();
    // console.log("User saved successfully!"); %40

    // await  User.create({username : "hitesh" , age : 24 , bookName : "friends" , id : 2});
    


    // await User.insertMany([{username : "sharique" , age : 34} , {age : 53}  , {bookName : "the last rap"}]);

    // const Documents = await User.find({});
    // console.log(Documents);

    
    // const Specific = await User.find({username : "sahil"});
    // console.log(Specific);

}

// main()
//     .then(() => { console.log("Mongoose is connecting with the database") })
//     .catch((err) => { console.log(err) });

module.exports = main;

