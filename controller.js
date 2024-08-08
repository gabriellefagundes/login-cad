// Função para validar o acesso.

function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos.")
    }else{
        // alert("Campos preenchidos com sucesso!");
        window.location.href = 'cadastro.html';
    }
}

// Função para armazenar os nomes em ARRAY
var dadosLista = []; //Está em branco porque assim cabe mais coisas.

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
    }else{
        alert("Favor, informe um nome para cadastro.");
    }
}
// Função para criar uma lista de usuários
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário.</th><th>Ações.</th></tr>"; //Código pego no cadastro.html
    for(let i=0;i <= (dadosLista.length -1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td></td></tr>";
    }

}