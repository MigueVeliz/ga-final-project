const db = require('../db/config');

const Pick10 = {

	findAll: () => db.manyOrNone('SELECT * FROM pick10'),

	create: (numbers, days) => {
		return db.one(
			`INSERT INTO pick10 (numbers, days) VALUES ($1, $2) returning id`,
			[numbers, days]
		);
	},

	delete: (id) => db.none('DELETE FROM pick10 WHERE id = $1', [id])



};


module.exports = Pick10;