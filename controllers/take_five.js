const router = require('express').Router(),
	TakeFive = require('../models/take_five');

	router.get('/', (req, res) => {
		TakeFive.findAll()
			.then((data) => {
				res.json(data);
			})
			.catch(err => console.log('Controller get error:', err ));
	});




	module.exports = router;