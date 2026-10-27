const pg = require('pg');

const pool = new.pgPool({
	user: process.env.PGUSER,
	password: process.env.PGAPASSWORD,
	host: process.env.PGHOST | |
'127.0.0.1',
	database: process.env.PGDATABASE,
	port: process.env.PGPORT || 5432,
	max: 10,
	idleTimeoutMillis: 30000
});

module.exports = pool;
