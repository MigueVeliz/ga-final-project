DROP TABLE IF EXISTS take_five;
DROP TABLE IF EXISTS numbers;
DROP TABLE IF EXISTS quick_draw;
DROP TABLE IF EXISTS pick10;
DROP TABLE IF EXISTS win4;

CREATE TABLE take_five(
	id SERIAL PRIMARY KEY,
	first_number INTEGER,
	second_number INTEGER,
	third_number INTEGER,
	fourth_number INTEGER,
	fifth_number INTEGER
);

INSERT INTO take_five(first_number, second_number, third_number, fourth_number, fifth_number) VALUES
(4, 23, 1, 5, 7),
(6, 21, 4, 7, 10);

CREATE TABLE numbers(
	id SERIAL PRIMARY KEY,
	first_digit INTEGER,
	second_digit INTEGER,
	third_digit INTEGER,
	wager_type VARCHAR,
	amount_per_wager DOUBLE PRECISION,
	draw_time VARCHAR,
	number_of_tickets INTEGER,
	number_of_days INTEGER
);

INSERT INTO numbers(first_digit, second_digit, third_digit, wager_type, amount_per_wager, draw_time, number_of_tickets, number_of_days) VALUES
(2, 5, 7, 'str', .50, 'day', 3, 2), 
(3, 6, 2, 'box', 1, 'eve', 5, 6);

CREATE TABLE quick_draw(
	id SERIAL PRIMARY KEY,
	spots INTEGER,
	numbers VARCHAR,
	how_much_per_draw INTEGER,
	quick_draw_extra VARCHAR,
	consecutive_draws INTEGER
);

INSERT INTO quick_draw( spots, numbers, how_much_per_draw, quick_draw_extra, consecutive_draws) VALUES
(6, '34 23 65 78 45 4', 4, 'yes', 3),
(8, '34 23 65 78 45 6 10 55', 2, 'no', 10);

CREATE TABLE pick10(
	id SERIAL PRIMARY KEY,
	numbers VARCHAR,
	days INTEGER
);

INSERT INTO pick10( numbers, days ) VALUES
('1 34 54 66 77 33 23 67 56 44', 3),
('1 34 54 66 77 33 23 67 56 44', 6);


CREATE TABLE win4(
	id SERIAL PRIMARY KEY,
	first_digit INTEGER,
	second_digit INTEGER,
	third_digit INTEGER,
	fourth_digit INTEGER,
	wager_type VARCHAR,
	amount_per_wager DOUBLE PRECISION,
	draw_time VARCHAR,
	number_of_tickets INTEGER,
	number_of_days INTEGER
);

INSERT INTO win4(first_digit, second_digit, third_digit, fourth_digit, wager_type, amount_per_wager, draw_time, number_of_tickets, number_of_days) VALUES
(3, 5, 6, 8, 'str', .50, 'both', 4, 2),
(6, 9, 1, 5, 'box', 1.00, 'eve', 2, 7);









