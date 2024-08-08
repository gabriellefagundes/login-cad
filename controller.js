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
var dadosLista = [];
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

}