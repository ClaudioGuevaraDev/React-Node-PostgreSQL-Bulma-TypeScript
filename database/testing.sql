INSERT INTO users (username, email, password, createdAt, updatedAt)
    VALUES ('ChichaDios', 'chichadioss23@gmail.com', '123', current_date, current_date);

INSERT INTO users (username, email, password, createdAt, updatedAt)
    VALUES ('Claudio Guevara', 'claudio.guevara.dev@gmail.com', '1234', current_date, current_date);

SELECT * FROM users;

INSERT INTO videogames (title, image, createdAt, updatedAt)
    VALUES ('League of Legends', 'imagen01.png', current_date, current_date);

INSERT INTO videogames (title, image, createdAt, updatedAt)
    VALUES ('FIFA', 'image02.png', current_date, current_date);

SELECT * FROM videogames;

INSERT INTO reviews (comment, createdAt, updatedAt, userId, videogamesId)
    VALUES ('Me cago la vida', current_date, current_date, 1, 1);

SELECT * FROM reviews;

SELECT U.username, R.comment, VG.title, R.createdAt FROM reviews as R 
	JOIN videogames AS VG ON R.videogamesId = VG.id
	JOIN users AS U ON R.userId = U.id;