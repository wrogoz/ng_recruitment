CREATE TABLE movies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(255) NOT NULL,
    Released DATE,
    Genre VARCHAR(100) NOT NULL,
    Directory VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW(),
    user_id INT UNIQUE
);