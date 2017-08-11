DROP TABLE IF EXISTS take_five;
DROP TABLE IF EXISTS numbers;
DROP TABLE IF EXISTS quick_draw;
DROP TABLE IF EXISTS pick10;
DROP TABLE IF EXISTS win4;

DROP TABLE If EXISTS users;


CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL,
  token VARCHAR NOT NULL
);

-- INTEGER INTO users(name, email, password_digest, token) VALUES
-- ("Angel", "lol@gmail.com", "fsdfsd", "dsfsdfsdfsd");





CREATE TABLE take_five(
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(id),
	first_number INTEGER,
	second_number INTEGER,
	third_number INTEGER,
	fourth_number INTEGER,
	fifth_number INTEGER
);

-- INSERT INTO take_five(first_number, second_number, third_number, fourth_number, fifth_number, user_id) VALUES
-- (4, 23, 1, 5, 7, 1),
-- (6, 21, 4, 7, 10, 1);

CREATE TABLE numbers(
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(id),
	first_digit INTEGER,
	second_digit INTEGER,
	third_digit INTEGER,
	wager_type VARCHAR,
	amount_per_wager DOUBLE PRECISION,
	draw_time VARCHAR,
	number_of_tickets INTEGER,
	number_of_days INTEGER
);

-- INSERT INTO numbers(first_digit, second_digit, third_digit, wager_type, amount_per_wager, draw_time, number_of_tickets, number_of_days, user_id) VALUES
-- (2, 5, 7, 'str', .50, 'day', 3, 2, 1), 
-- (3, 6, 2, 'box', 1, 'eve', 5, 6, 1);

CREATE TABLE quick_draw(
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(id),
	spots INTEGER,
	numbers VARCHAR,
	how_much_per_draw INTEGER,
	quick_draw_extra VARCHAR,
	consecutive_draws INTEGER
);

-- INSERT INTO quick_draw( spots, numbers, how_much_per_draw, quick_draw_extra, consecutive_draws, user_id) VALUES
-- (6, '34 23 65 78 45 4', 4, 'yes', 3, 1),
-- (8, '34 23 65 78 45 6 10 55', 2, 'no', 10, 1);

CREATE TABLE pick10(
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(id),
	numbers VARCHAR,
	days INTEGER
);

-- INSERT INTO pick10( numbers, days, user_id) VALUES
-- ('1 34 54 66 77 33 23 67 56 44', 3, 1),
-- ('1 34 54 66 77 33 23 67 56 44', 6, 1);


CREATE TABLE win4(
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(id),
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


-- INSERT INTO win4(first_digit, second_digit, third_digit, fourth_digit, wager_type, amount_per_wager, draw_time, number_of_tickets, number_of_days, user_id) VALUES
-- (3, 5, 6, 8, 'str', .50, 'both', 4, 2, 1),
-- (6, 9, 1, 5, 'box', 1.00, 'eve', 2, 7, 1);




