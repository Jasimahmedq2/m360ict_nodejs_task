-- create user table
CREATE TABLE users (
    id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL
);

-- create artists TABLE
CREATE TABLE artists (
    id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL
);

-- create album TABLESPACE

CREATE TABLE albums (
    id SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, release_year INTEGER NOT NULL, genre VARCHAR(255) NOT NULL
);

-- create albums table with relations with artist & album

CREATE TABLE albums_artists (
    id SERIAL PRIMARY KEY, album_id INTEGER UNSIGNED, artist_id INTEGER UNSIGNED, FOREIGN KEY (album_id) REFERENCES albums (id), FOREIGN KEY (artist_id) REFERENCES artists (id)
);

-- create songs table

CREATE TABLE songs (
    id SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, duration INTEGER NOT NULL, album_id INTEGER UNSIGNED, FOREIGN KEY (album_id) REFERENCES albums (id)
);