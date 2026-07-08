async function listarCursos(){

    const resposta = await fetch('http://localhost:3025/cursos');
    const cursos = await resposta.json();

    const lista = document.getElementById('lista');
    lista.innerHTML='';

    cursos.forEach(curso => {
        lista.innerHTML += `
            <li>
                ${curso.id} - ${curso.nome}
                <button onclick="editarCurso(${curso.id}, '${curso.nome}')">Editar</button>
                <button onclick="excluirCurso(${curso.id})">Excluir</button>
            </li>
        `;
    });
}

//---------------------------------------------------------
// CADASTRAR CURSO
//---------------------------------------------------------

async function cadastrarCurso(){

    // Obtém o valor digitado no campo "nome"
    const nome = document.getElementById('nome').value;
    
    // Verifica se o campo está vazio
    if(nome === ''){
        // Exibe uma mensagem para o usuário
        alert('Digite o nome do curso.');

        // Encerra a função para evitar o envio da requisição
        return;
    }

    // Envia uma requisição HTTP POST para a API
    const resposta = await fetch('http://localhost:3025/cursos',{

        // Define o método da requisição
        method:'POST',

        // Informa que os dados serão enviados em formato JSON
        headers:{'Content-Type':'application/json'},

        // Converte o objeto JavaScript em uma string JSON
        body:JSON.stringify({nome})
    });

    // Converte a resposta da API para um objeto JavaScript
    const dados = await resposta.json();

    // Exibe a mensagem retornada pelo servidor
    alert(dados.mensagem);

    // Limpa o campo de texto após o cadastro
    document.getElementById('nome').value='';

    // Atualiza a lista de cursos exibida na tela
    listarCursos();

}

async function editarCurso(id , nomeAtual){

    const novoNome = prompt('Digite o novo nome:', nomeAtual);

    if(!novoNome) return;

    await fetch(`http://localhost:3025/cursos/${id}`,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({nome:novoNome})
    });

    listarCursos();

}

async function excluirCurso(id){

    if(!confirm('Deseja realmente excluir este curso?')) return;

    await fetch(`http://localhost:3025/cursos/${id}`,{
        method:'DELETE'
    });

    listarCursos();

}