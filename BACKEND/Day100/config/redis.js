const { createClient }  = require('redis');

const redisClient = createClient({
     username: 'default',
    password: 'E4RKwyirVYWgU0TSXGJN75XAalvKP2Bg',
    socket: {
        host: 'brick-gigantic-rosemary-13627.db.redis.io',
        port: 11542
    }
});

module.exports = redisClient;