const router = require('express').Router(),
	Numbers = require('../models/numbers');

	router.post('/', (req, res) => {
		console.log("Posting This:", req.body)
		const {first_digit, second_digit, third_digit, wager_type, amount_per_wager, draw_time, number_of_tickets, number_of_days} = req.body

		Numbers.create( first_digit, second_digit, third_digit, wager_type, amount_per_wager, draw_time, number_of_tickets, number_of_days)
			.then((data) => {
				res.json(data);
			})
			.catch(err => console.log("Controller POST Error: ", err));
	});


	router.get('/', (req, res) => {
		Numbers.findAll()
			.then((data) => {
				res.json(data);
			})
			.catch(err => console.log('Controller get error:', err ));
	});


	router.delete('/:id', (req, res) => {
		const id = req.params.id;

		Numbers.delete(id)
			.then((data) => {
				res.send('Deleted from DB.');
			})
			.catch(err => console.log('Controller Delete Error:', err));
	});




	module.exports = router;
