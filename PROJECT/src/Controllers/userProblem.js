const {getLanguageById , submitBatch} = require("../utils/problemutility");


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
            const submissions = visibleTestCases.map((input , output)=>({
             source_code : completeCode,
             language_id : LanguageId,
             stdin : input,
             expected_output : output
            }))

            //now we have to submit the submission to Judge0 and it give token and later answwer
            const submitResult = await submitBatch(submissions);

        }

    }catch(err){
        console.log("error " + err.message);
    }
}