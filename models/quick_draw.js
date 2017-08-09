const db = require('../db/config');

const QuickDraw = {

	findAll: () => db.manyOrNone('SELECT * FROM quick_draw'),

	create: (spots, numbers, how_much_per_draw, quick_draw_extra, consecutive_draws) => {
		return db.one(
			`INSERT INTO quick_draw (spots, numbers, how_much_per_draw, quick_draw_extra, consecutive_draws) VALUES ($1, $2, $3, $4, $5) returning id`,
			[spots, numbers, how_much_per_draw, quick_draw_extra, consecutive_draws]
		);
	},

	delete: (id) => db.none('DELETE FROM quick_draw WHERE id = $1', [id])



};


module.exports = QuickDraw;