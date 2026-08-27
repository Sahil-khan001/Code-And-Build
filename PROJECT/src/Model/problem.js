const {mongoose , Schema} = require('mongoose');

const problemSchema  = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    difficulty : {
        type : String,
        enum : ['easy' , 'medium' , 'hard'],
        required : true,
    },
    tags : {
        type: String,
        enum : ['Array' , 'Linkedlist' , 'Dp' , 'Graph']
    },
    visibleTestCases: [
         {
            input:{
                type : String,
                required : true
            },
            output : {
                type : String,
                required : true
            },
            explanation : {
                type : String,
                required : true
            }
         }

    ],
    hiddenTestCases: [
         {
            input:{
                type : String,
                required : true
            },
            output : {
                type : String,
                required : true
            }
         }

    ],
    startCode : [ 
        {
            language : {
                type : String,
                required : true
            },
            initialCode : {
                type : String,
                require : true
            }
        }
    ], 
    referenceSolution : [
        {
             language : {
                type : String,
                required : true
            },
            completeCode : {
                type : String,
                require : true
            }
        }
    ],
    problemCreator : {
        type : Schema.Types.ObjectId,
        ref : 'user',
        required : true
    }
})

const Problem = mongoose.model('problem' , problemSchema);
module.exports = Problem;