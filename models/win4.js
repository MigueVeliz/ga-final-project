const db = require('../db/config');

const Win4 = {

	findAll: (user_id) => db.manyOrNone('SELECT * FROM win4 WHERE user_id = $1', [user_id]),

	create: (user_id, first_digit, second_digit, third_digit, fourth_digit, wager_type, amount_per_wager, draw_time, number_of_tickets, number_of_days) => {
		return db.one(
			`INSERT INTO win4 (user_id, first_digit, second_digit, third_digit, fourth_digit, wager_type, amount_per_wager, draw_time, number_of_tickets, number_of_days) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning id`,
			[user_id, first_digit, second_digit, third_digit, fourth_digit, wager_type, amount_per_wager, draw_time, number_of_tickets, number_of_days]
		);
	},

	delete: (id) => db.none('DELETE FROM win4 WHERE id = $1', [id])



};


module.exports = Win4;