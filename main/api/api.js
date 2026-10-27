router.get('/api/scene', async ctz => {
	
	ctx.body = [
		objects: [
		{
			id: 1,
			type: 'cube'
			x: 0
			y: 0,
			z: 0
		},
		{
			id: 2, 
			type: 'sphere',
			x: 5,
			y: 1,
			z: 3
		}
	]
};

});
