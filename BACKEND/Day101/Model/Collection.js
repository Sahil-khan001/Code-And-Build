const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },

    content: {
        type: Array,
        required: true
    }
});

const Aischema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },

    messages: {
        type: [MessageSchema],
        default: []
    }
});

const AiDb = mongoose.model("LLmDb", Aischema);

module.exports = AiDb;