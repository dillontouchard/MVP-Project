DROP TABLE gamescores IF EXISTS;

CREATE TABLE gamescores (
    gameID serial PRIMARY KEY NOT NULL,
    username varchar(40),
    score INT,
    incorrect_answers INT
);

