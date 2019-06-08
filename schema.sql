DROP DATABASE IF EXISTS bradenPortfolio;
CREATE DATABASE bradenPortfolio;
USE bradenPortfolio;

CREATE TABLE visitors
(
    id INTEGER
    AUTO_INCREMENT NOT NULL,
  first_name VARCHAR
    (50),
  last_name VARCHAR
    (100),
  user_email VARCHAR
    (1065),
  PRIMARY KEY
    (id)
);

    INSERT INTO visitors
        (id, first_name, last_name, user_email)
    VALUES
        (1, "Braden", "Flory", "bradenflory93@gmail.com");