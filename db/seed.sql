DROP TABLE IF EXISTS take_five;
DROP TABLE IF EXISTS numbers;

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