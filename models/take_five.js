const db = require('../db/config');

const TakeFive = {
	findAll: () => db.manyOrNone('SELECT * FROM take_five'),

	create: (first_number, second_number, third_number, fourth_number, fifth_number) => {
		return db.one(
			'INSERT INTO take_five (first_number, second_number, third_number, fourth_number, fifth_number) VALUES ($1, $2, $3, $4, $5) returning id',
			[first_number, second_number, third_number, fourth_number, fifth_number]
		);
	}



};


module.exports = TakeFive;