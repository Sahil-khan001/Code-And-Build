const redis = require('redis');
const redisClient = redis.createClient({
    username: 'default',
    password: '1avduhfvws4xI9jVIqx64Oy2ZJ2z3ihK',
    socket: {
        host: 'mom-reassuring-appealing-80205.db.redis.io',
        port: 12443
    }
});

const connectReddis = async () =>{
await redisClient.connect();
console.log("Connected to Reddis");
}
connectReddis();


