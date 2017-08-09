const router = require('express').Router(),
	Pick10 = require('../models/pick10');

	router.post('/', (req, res) => {
		console.log("Posting This:", req.body)
		const {numbers, days} = req.body

		Pick10.create( numbers, days )
			.then((data) => {
				res.json(data);
			})
			.catch(err => console.log("Controller POST Error: ", err));
	});


	router.get('/', (req, res) => {
		Pick10.findAll()
			.then((data) => {
				res.json(data);
			})
			.catch(err => console.log('Controller get error:', err ));
	});


	router.delete('/:id', (req, res) => {
		const id = req.params.id;

		Pick10.delete(id)
			.then((data) => {
				res.send('Deleted from DB.');
			})
			.catch(err => console.log('Controller Delete Error:', err));
	});




	module.exports = router;
