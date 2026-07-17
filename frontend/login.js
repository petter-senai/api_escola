async function entrar(){

    const login =
    document.getElementById('login').value;

    const senha =
    document.getElementById('senha').value;

    if(login==""){

        alert("Informe o login.");

        return;

    }

    if(senha==""){

        alert("Informe a senha.");

        return;

    }

    const resposta = await fetch(

        'http://localhost:3025/login',

        {

            method:'POST',

            headers:{

                'Content-Type':'application/json'

            },

            body:JSON.stringify({

                login,

                senha

            })

        }

    );

    const dados = await resposta.json();

    if(dados.sucesso){

        localStorage.setItem(

            'usuario',

            JSON.stringify(dados.usuario)

        );

        window.location.href="principal.html";

    }

    else{

        alert(dados.mensagem);

    }

}