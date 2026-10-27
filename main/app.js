'use-strict'

const koa = require('koa');

global.app = new Koa();

global.dbpool = require('./db');

require('.\routers');

app.listen(3000, () => {
	console.log(
		'koa-pg-3d server listening on port 3000'
	);
});