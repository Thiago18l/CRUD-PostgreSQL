CREATE DATABASE API;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email)
    VALUES ('thiago', 'thiago.lopes.dev@gmail.com'),
            ('João', 'joao.dev@hotmail.com');