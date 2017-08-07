const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL || 'postgres://angelveliz@localhost:5432/lotto');

module.exports = db;