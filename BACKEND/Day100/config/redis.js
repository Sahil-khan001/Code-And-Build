const redis = require('redis');
const redisClient = redis.createClient({
    username: 'default',
    password: '1avduhfvws4xI9jVIqx64Oy2ZJ2z3ihK',
    socket: {
        host: 'mom-reassuring-appealing-80205.db.redis.io',
        port: 12443
    }
});

//to connect to the redis DB we have to use this in anywhere to connect with DB
// redisClient.connect();

module.exports = redisClient;




