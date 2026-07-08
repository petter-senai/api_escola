CREATE DATABASE escola;
USE escola;

CREATE TABLE cursos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

INSERT INTO cursos(nome)
VALUES
('Node JS'),
('JavaScript'),
('React Native');