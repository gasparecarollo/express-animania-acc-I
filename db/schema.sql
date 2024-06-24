-- drop database -- step one: incase there is a db already
DROP DATABASE IF EXISTS animania_dev;

-- create database - step two

CREATE DATABASE animania_dev;

--connect to database - step three
\c animania_dev;

--create table
CREATE TABLE animes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL
)