-- =========================================================
-- BANCO DE DADOS
-- =========================================================

CREATE DATABASE escola_saep;
USE escola_saep;

-- =========================================================
-- TABELA DE USUÁRIOS
-- =========================================================

CREATE TABLE usuarios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    login VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL
);

INSERT INTO usuarios(nome, login, senha)
VALUES
('Administrador','admin','123'),
('Maria','maria','123'),
('João','joao','123');


-- =========================================================
-- TABELA DE CURSOS
-- =========================================================

CREATE TABLE cursos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    carga_horaria INT NOT NULL,
    vagas INT NOT NULL,
    vagas_minimas INT NOT NULL
);

INSERT INTO cursos
(nome,carga_horaria,vagas,vagas_minimas)

VALUES

('Node.js',40,30,5),
('JavaScript',60,25,5),
('React Native',80,20,3);


-- =========================================================
-- TABELA DE MOVIMENTAÇÕES
-- =========================================================

CREATE TABLE movimentacoes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    curso_id INT NOT NULL,
    usuario_id INT NOT NULL,
    tipo ENUM('MATRICULA','CANCELAMENTO') NOT NULL,
    quantidade INT NOT NULL,
    data_movimentacao DATE NOT NULL,
    FOREIGN KEY(curso_id) REFERENCES cursos(id),
    FOREIGN KEY(usuario_id) REFERENCES usuarios(id)

);


INSERT INTO movimentacoes
(curso_id,usuario_id,tipo,quantidade,data_movimentacao)

VALUES
(1,1,'MATRICULA',2,'2026-07-10'),
(2,2,'MATRICULA',1,'2026-07-11'),
(3,3,'CANCELAMENTO',1,'2026-07-12');