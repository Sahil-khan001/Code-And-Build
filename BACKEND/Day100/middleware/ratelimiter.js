
const redisClient = require('../Config/Redis');
//expire time that is windowSize
const windowSize = 3600;  //that is 60min
const maxReq = 2;

const rateLimiter = async (req , res , next)=>{
    try{
    
     const key = `IP${req.ip}`;
     const current_time = Date.now()/1000;
     const window_time = current_time - windowSize;

     await redisClient.zRemRangeByScore(key , 0 , window_time);

     const numberOfRequests = await redisClient.zCard(key);
     //it tell us total no of value 

     if(numberOfRequests > maxReq){
        throw new Error("User limit Exceeded");
     }

     await redisClient.zAdd(key , [{score: current_time , value : `${current_time} : Math.random()`}]);

     await redisClient.expire(key , windowSize);
     next();
    }catch(err){
        console.log("error " + err.message);
    }
}

module.exports = rateLimiter;