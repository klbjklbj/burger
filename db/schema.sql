DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(45) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Veggie', 0);
INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese', 0);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon', 0);



