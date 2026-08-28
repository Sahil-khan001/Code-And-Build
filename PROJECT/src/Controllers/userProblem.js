const {getLanguageById , submitBatch , submitToken} = require("../utils/problemutility");
const Problem = require('../Model/problem');

const CreateProblem = async (req , res) => {
    
    const {title , description , difficulty , tags , visibleTestCases , hiddenTestCases , startCode , referenceSolution , problemCreator} = req.body;

    try{

        for(const {language , completeCode} of referenceSolution){

            //format of Judge0 for submission of code 
            //source_code:
            //language_Id:
            //setin:
            //expected_output:

            const LanguageId = getLanguageById(language);

            //here we are creating batch submission same code with diff testcases
            const submissions = visibleTestCases.map((testcase)=>({
             source_code : completeCode,
             language_id : LanguageId,
             stdin : testcase.input,
             expected_output : testcase.output
            }))

            //now we have to submit the submission to Judge0 and it give token and later answwer
            const submitResult = await submitBatch(submissions);

            const resulttoken = submitResult.map((value)=> value.token);
            //this line gives us ["kgjkfjdsslkfjdslkfj" , "fkjdfdsflkdlkfsdjlkjfldksj" , "kjfsdkjdskfjsdflksdjdskfj"]

            const testResult = await submitToken(resulttoken);
            //this testResult get an array with the objects having status_id > 2

            for(const test of testResult){
                if(test.status_id != 3){
                    return res.status(400).send("Error Occured");
                }
            }


        }

        //one by one new lan come into this if it is approved 
        //then we can store the reference solution in our db

    const userProblem = await Problem.create({
    ...req.body,
    problemCreator: req.result._id
});

        res.status(201).send("Problem Saved Successfully");
    }catch(err){
        console.log("error " + err.message);
    }
}

module.exports = CreateProblem;