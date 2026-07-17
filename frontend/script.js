const usuario = JSON.parse(localStorage.getItem("usuario"));

if(!usuario){

    window.location.href="login.html";

}

listarCursos();

async function listarCursos(){

    const resposta =
        await fetch('http://localhost:3025/cursos');

    const cursos =
        await resposta.json();

    montarTabela(cursos);

}


function montarTabela(cursos){

    const tabela =
        document.getElementById('tabelaCursos');

    tabela.innerHTML='';

    cursos.forEach(curso=>{

        tabela.innerHTML += `

        <tr>

            <td>${curso.id}</td>

            <td>${curso.nome}</td>

            <td>${curso.carga_horaria} h</td>

            <td>${curso.vagas}</td>

            <td>${curso.vagas_minimas}</td>

            <td>

                <button
                    onclick="editarCurso(${curso.id})">

                    Editar

                </button>

                <button
                    onclick="excluirCurso(${curso.id})">

                    Excluir

                </button>

            </td>

        </tr>

        `;

    });

}   

async function cadastrarCurso(){

    const nome =
        document.getElementById('nome').value;

    const carga_horaria =
        document.getElementById('carga_horaria').value;

    const vagas =
        document.getElementById('vagas').value;

    const vagas_minimas =
        document.getElementById('vagas_minimas').value;

    if(nome==''){

        alert('Informe o nome.');

        return;

    }

    if(carga_horaria==''){

        alert('Informe a carga horária.');

        return;

    }

    if(vagas==''){

        alert('Informe as vagas.');

        return;

    }

    if(vagas_minimas==''){

        alert('Informe as vagas mínimas.');

        return;

    }

    const resposta =
        await fetch(

        'http://localhost:3025/cursos',

        {

            method:'POST',

            headers:{

                'Content-Type':'application/json'

            },

            body:JSON.stringify({

                nome,

                carga_horaria,

                vagas,

                vagas_minimas

            })

        }

    );

    const dados =
        await resposta.json();

    alert(dados.mensagem);

    limparCampos();

    listarCursos();

}

async function editarCurso(id){

    const resposta =
        await fetch(

            `http://localhost:3025/cursos/${id}`

        );

    const curso =
        await resposta.json();

    const nome =
        prompt('Nome',curso.nome);

    if(nome==null) return;

    const carga =
        prompt(

            'Carga Horária',

            curso.carga_horaria

        );

    if(carga==null) return;

    const vagas =
        prompt(

            'Quantidade de vagas',

            curso.vagas

        );

    if(vagas==null) return;

    const minimo =
        prompt(

            'Vagas mínimas',

            curso.vagas_minimas

        );

    if(minimo==null) return;

    await fetch(

        `http://localhost:3025/cursos/${id}`,

        {

            method:'PUT',

            headers:{

                'Content-Type':'application/json'

            },

            body:JSON.stringify({

                nome,

                carga_horaria:carga,

                vagas,

                vagas_minimas:minimo

            })

        }

    );

    listarCursos();

}

async function excluirCurso(id){

    const resposta = confirm(

        'Deseja excluir este curso?'

    );

    if(!resposta) return;

    await fetch(

        `http://localhost:3025/cursos/${id}`,

        {

            method:'DELETE'

        }

    );

    listarCursos();

}

function limparCampos(){

    document.getElementById('nome').value='';

    document.getElementById('carga_horaria').value='';

    document.getElementById('vagas').value='';

    document.getElementById('vagas_minimas').value='';

}