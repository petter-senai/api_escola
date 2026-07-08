const express = require('express');
const cors = require('cors');
const connection = require('./db');
const server = express();
server.use(cors());
server.use(express.json());


const cursos = ['Node JS', 'JavaScript', 'React Native'];


//Método HTTP: GET
//LISTAR TODOS OS CURSOS    
//localhost:3000/cursos
server.get('/cursos', (req, res) => {

    const sql = 'SELECT * FROM cursos';

    connection.query(sql, (erro , resultados) => {

        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        return res.json(resultados);
    });

});

//Método HTTP: GET
//LISTAR UM UNICO CURSO
//localhost:3000/curso/2
server.get('/cursos/:id' , (req, res) => {

        const { id } = req.params;
        const sql = 'SELECT * FROM cursos WHERE id = ?';

        connection.query(sql, [id], (erro , resultados) => {

        if (erro) {
            return res.status(500).json({ erro:erro.message });
        }

        return res.json(resultados[0]);
        
        });

});


//Método HTTP: POST
//CRIAR UM NOVO CURSO
//localhost:3000/cursos
//{ "name": "Curso de Python" }
server.post('/cursos', (req, res)=> {
    const { nome } = req.body;

    const sql = 'INSERT INTO cursos (nome) VALUES (?)';

    connection.query(sql, [nome], (erro,resultado) => {

        if (erro) {
            return res.status(500).json({ erro:erro.message });
                }

        return res.json({
            mensagem: 'Curso cadastrado com sucesso',
            id: resultado.insertId,
            nome: nome
        });
        });  
});

//Método HTTP: PUT
//ATUALIZAR UM CURSO
//localhost:3000/cursos/0
server.put('/cursos/:id', (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    const sql = 'UPDATE cursos SET nome = ? WHERE id = ?';
    connection.query(sql, [nome , id], (erro , resultado) => {

    if (erro) {
    return res.status(500).json({ erro:erro.message });
    }

    return res.json({
            mensagem:'Curso atualizado com sucesso',
            nome: nome,
            id: id

        });
    });
});

//Método HTTP: DELETE
//DELETAR UM CURSO
//localhost:3000/cursos/1
server.delete('/cursos/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM cursos WHERE id = ?';

    connection.query(sql, [id] , (erro) => {

        if (erro) {
            return res.status(500).json({ erro:erro.message });
        }

        return res.json({
            mensagem:'Curso removido com sucesso',
            id: id
        });
    });
});

const PORT = 3025

server.listen(PORT , () => {

    console.log(`Servidor rodando na porta: ${PORT}`)

});