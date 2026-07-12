const auth = (req,res, next)=>{
     //Admin Authentication here
    //we have to authenticate that admin is real or not , right now we just use simple logic later we do 
    // this is Dummy Code 
    const token = "ABCDEF";
    const Access = token === "ABCDEF" ? 1:0;

    if(!Access){
        res.status(403).send("Permission Denied");
    }

    next();
}

module.exports = {auth};