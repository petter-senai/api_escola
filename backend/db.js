const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'escola'
});

connection.connect((erro) => {
if (erro) {
    console.log('Erro ao conectar:', erro);
    return;
    }

console.log('Banco conectado com sucesso!');
});

//serve para exportar a variável connection, permitindo que ela seja utilizada em outros arquivos do projeto.
module.exports = connection;