CREATE DATABASE ng_chollos_db;

USE ng_chollos_db;

CREATE TABLE chollos(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    url VARCHAR(200),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE chollos;