DROP TABLE IF EXISTS take_five;

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