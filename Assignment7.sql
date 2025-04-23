
-- ASSIGNMENT 7: MOVIE DATABASE

-- STEP 1: CREATE TABLES

CREATE TABLE actors (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    gender CHAR(1),
    date_of_birth DATE
);

CREATE TABLE directors (
    director_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    date_of_birth DATE,
    nationality VARCHAR(50)
);

CREATE TABLE movies (
    movie_id SERIAL PRIMARY KEY,
    movie_name VARCHAR(100),
    movie_length INT,
    movie_lang VARCHAR(30),
    release_date DATE,
    age_certificate VARCHAR(10),
    director_id INT REFERENCES directors(director_id)
);

CREATE TABLE movie_revenues (
    revenue_id INT PRIMARY KEY,
    movie_id INT REFERENCES movies(movie_id),
    domestic_takings DECIMAL(10,1),
    international_takings DECIMAL(10,1)
);

CREATE TABLE movies_actors (
    actor_id INT REFERENCES actors(actor_id),
    movie_id INT REFERENCES movies(movie_id)
);

-- STEP 3: PART A QUERY
SELECT COUNT(*) FROM actors
UNION ALL
SELECT COUNT(*) FROM directors
UNION ALL
SELECT COUNT(*) FROM movies
UNION ALL
SELECT COUNT(*) FROM movie_revenues
UNION ALL
SELECT COUNT(*) FROM movies_actors;

-- STEP 4: PART B QUERIES
SELECT movie_name, release_date FROM movies;

SELECT first_name, last_name FROM directors WHERE nationality = 'American';

SELECT first_name, last_name FROM actors
WHERE gender = 'M' AND date_of_birth > '1970-01-01';

SELECT movie_name FROM movies
WHERE movie_length > 90 AND movie_lang = 'English';

-- STEP 5: PART C QUERIES
SELECT movie_name, movie_lang FROM movies
WHERE movie_lang IN ('English', 'Spanish', 'Korean');

SELECT first_name, last_name FROM actors
WHERE last_name LIKE 'M%' AND date_of_birth BETWEEN '1940-01-01' AND '1969-12-31';

SELECT first_name, last_name FROM directors
WHERE nationality IN ('British', 'French', 'German')
AND date_of_birth BETWEEN '1950-01-01' AND '1980-12-31';
