'use-strict'

const Router = require('koa-router');

const router = new Router();

router.get('/api/scene', async ctx => {
	
	ctx.body = [
	{
		id: 1, 
		type: 'cube',
		pos_x: 0,
		pos_y: 0,
		pos_z: 0
	}
];