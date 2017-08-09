const router = require('express').Router(),
	QuickDraw = require('../models/quick_draw');

	router.post('/', (req, res) => {
		console.log("Posting This:", req.body)
		const {spots, numbers, how_much_per_draw, quick_draw_extra, consecutive_draws} = req.body

		QuickDraw.create(spots, numbers, how_much_per_draw, quick_draw_extra, consecutive_draws)
			.then((data) => {
				res.json(data);
			})
			.catch(err => console.log("Controller POST Error: ", err));
	});


	router.get('/', (req, res) => {
		QuickDraw.findAll()
			.then((data) => {
				res.json(data);
			})
			.catch(err => console.log('Controller get error:', err ));
	});


	router.delete('/:id', (req, res) => {
		const id = req.params.id;

		QuickDraw.delete(id)
			.then((data) => {
				res.send('Deleted from DB.');
			})
			.catch(err => console.log('Controller Delete Error:', err));
	});




	module.exports = router;
