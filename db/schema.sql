DROP TABLE IF EXISTS stickyNotesDB;

CREATE DATABASE stickyNotesDB;

USE stickyNotesDB;

CREATE TABLE notes
(
	id INT NOT NULL auto_increment PRIMARY KEY,
	title VARCHAR(50) NOT NULL,
  message VARCHAR(250) NOT NULL,
);