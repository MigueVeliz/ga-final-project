const db = require('../db/config');

const TakeFive = {

	findAll: (user_id) => db.manyOrNone('SELECT * FROM take_five WHERE user_id = $1', [user_id]),

	create: (user_id, first_number, second_number, third_number, fourth_number, fifth_number) => {
		return db.one(
			`INSERT INTO take_five (user_id, first_number, second_number, third_number, fourth_number, fifth_number) VALUES ($1, $2, $3, $4, $5, $6) returning id`,
			[user_id, first_number, second_number, third_number, fourth_number, fifth_number]
		);
	},

	delete: (id) => db.none('DELETE FROM take_five WHERE id = $1', [id])



};


module.exports = TakeFive;