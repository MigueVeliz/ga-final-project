const db = require('../db/config');

const Pick10 = {

	findAll: (user_id) => db.manyOrNone('SELECT * FROM pick10 WHERE user_id = $1', [user_id]),

	create: (user_id, numbers, days) => {
		return db.one(
			`INSERT INTO pick10 (user_id, numbers, days) VALUES ($1, $2, $3) returning id`,
			[user_id, numbers, days]
		);
	},

	delete: (id) => db.none('DELETE FROM pick10 WHERE id = $1', [id])



};


module.exports = Pick10;