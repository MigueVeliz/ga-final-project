const router = require('express').Router(),
	TakeFive = require('../models/take_five');

	router.post('/', (req, res) => {
		console.log("Posting This:", req.body)
		const {first_number, second_number, third_number, fourth_number, fifth_number} = req.body

		TakeFive.create( first_number, second_number, third_number, fourth_number, fifth_number)
			.then((data) => {
				res.json(data);
			})
			.catch(err => console.log("Controller POST Error: ", err));
	});


	router.get('/', (req, res) => {
		TakeFive.findAll()
			.then((data) => {
				res.json(data);
			})
			.catch(err => console.log('Controller get error:', err ));
	});


	router.delete('/:id', (req, res) => {
		const id = req.params.id;

		TakeFive.delete(id)
			.then((data) => {
				res.send('Deleted from DB.');
			})
			.catch(err => console.log('Controller Delete Error:', err));
	});




	module.exports = router;
