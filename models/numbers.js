const db = require('../db/config');

const Numbers = {

	findAll: () => db.manyOrNone('SELECT * FROM numbers'),

	create: (first_digit, second_digit, third_digit, wager_type, amount_per_wager, draw_time, number_of_tickets, number_of_days) => {
		return db.one(
			`INSERT INTO numbers (first_digit, second_digit, third_digit, wager_type, amount_per_wager, draw_time, number_of_tickets, number_of_days) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning id`,
			[first_digit, second_digit, third_digit, wager_type, amount_per_wager, draw_time, number_of_tickets, number_of_days]
		);
	},

	delete: (id) => db.none('DELETE FROM numbers WHERE id = $1', [id])



};


module.exports = Numbers;