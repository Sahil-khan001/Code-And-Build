const { createClient }  = require('redis');
require('dotenv').config();

const redisClient = createClient({
     username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'brick-gigantic-rosemary-13627.db.redis.io',
        port: 11542
    }
});

module.exports = redisClient;