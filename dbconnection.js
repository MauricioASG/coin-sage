// dbconnection.js
const knex = require('knex');

const db = knex({
    client: 'mysql2',
    connection: {
        host: 'mysql', 
        user: 'user_coinsage',
        password: '12345',
        database: 'coinsage'
    }
});

module.exports = db;
