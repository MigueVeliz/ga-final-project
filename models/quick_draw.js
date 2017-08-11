const db = require('../db/config');

const QuickDraw = {

	findAll: (user_id) => db.manyOrNone('SELECT * FROM quick_draw WHERE user_id = $1', [user_id]),

	create: (user_id, spots, numbers, how_much_per_draw, quick_draw_extra, consecutive_draws) => {
		return db.one(
			`INSERT INTO quick_draw (user_id, spots, numbers, how_much_per_draw, quick_draw_extra, consecutive_draws) VALUES ($1, $2, $3, $4, $5, $6) returning id`,
			[user_id, spots, numbers, how_much_per_draw, quick_draw_extra, consecutive_draws]
		);
	},

	delete: (id) => db.none('DELETE FROM quick_draw WHERE id = $1', [id])



};


module.exports = QuickDraw;