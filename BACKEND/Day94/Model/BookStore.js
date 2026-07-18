const {mongoose ,Schema} = require('mongoose');

 const bookSchema = new Schema({
        username: String,
        age: Number,
        bookName: String ,
        id: Number , 
    });

 const User = mongoose.model("BookStore", bookSchema);

 module.exports = User;
