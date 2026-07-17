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

//PESQUISAR CURSO POR NOME
//http://localhost:3000/cursos/busca/node
server.get('/cursos/busca/:nome',(req,res)=>{

    connection.query(

        'SELECT * FROM cursos WHERE nome LIKE ?',

        ['%' + req.params.nome + '%'],

        (erro,resultados)=>{

            if(erro){
                return res.status(500).json({
                    erro:erro.message
                });
            }

            res.json(resultados);

        }

    );

});

//CADASTRAR CURSO
server.post('/cursos',(req,res)=>{

    const{

        nome,
        carga_horaria,
        vagas,
        vagas_minimas

    } = req.body;


    connection.query(

        `

        INSERT INTO cursos

        (

            nome,

            carga_horaria,

            vagas,

            vagas_minimas

        )

        VALUES

        (?,?,?,?)

        `,

        [

            nome,

            carga_horaria,

            vagas,

            vagas_minimas

        ],

        (erro,resultado)=>{

            if(erro){

                return res.status(500).json({
                    erro:erro.message
                });

            }

            res.json({

                mensagem:'Curso cadastrado com sucesso!',

                id:resultado.insertId

            });

        }

    );

});
//EDITAR CURSO
server.put('/cursos/:id',(req,res)=>{

    const{

        nome,
        carga_horaria,
        vagas,
        vagas_minimas

    } = req.body;

    connection.query(

        `

        UPDATE cursos

        SET

            nome=?,

            carga_horaria=?,

            vagas=?,

            vagas_minimas=?

        WHERE id=?

        `,

        [

            nome,

            carga_horaria,

            vagas,

            vagas_minimas,

            req.params.id

        ],

        (erro)=>{

            if(erro){

                return res.status(500).json({
                    erro:erro.message
                });

            }

            res.json({

                mensagem:'Curso atualizado com sucesso.'

            });

        }

    );

});

//EXCLUIR CURSO

server.delete('/cursos/:id',(req,res)=>{

    connection.query(

        'DELETE FROM cursos WHERE id=?',

        [req.params.id],

        (erro)=>{

            if(erro){

                return res.status(500).json({
                    erro:erro.message
                });

            }

            res.json({

                mensagem:'Curso removido com sucesso.'

            });

        }

    );

});

//=========================================================
// LOGIN
//=========================================================

server.post('/login',(req,res)=>{

    const {login,senha} = req.body;

    connection.query(

        'SELECT * FROM usuarios WHERE login=? AND senha=?',

        [login,senha],

        (erro,resultados)=>{

            if(erro){

                return res.status(500).json({

                    sucesso:false,

                    mensagem:erro.message

                });

            }

            if(resultados.length==0){

                return res.json({

                    sucesso:false,

                    mensagem:'Login ou senha inválidos.'

                });

            }

            res.json({

                sucesso:true,

                usuario:resultados[0]

            });

        }

    );

});

const PORT = 3025

server.listen(PORT , () => {

    console.log(`Servidor rodando na porta: ${PORT}`)

});