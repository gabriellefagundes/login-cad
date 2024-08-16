// Função para armazenar os nomes e emails em ARRAY
var dadosLista = []; // Array para armazenar os dados dos usuários (nome e email)

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;

    if(nomeUser && emailUser){
        dadosLista.push({nome: nomeUser, email: emailUser});
        criaLista();
        document.getElementById('nomeUser').value = ""; // Limpa o campo "Nome" após salvar
        document.getElementById('emailUser').value = ""; // Limpa o campo "Email" após salvar
    }else{
        alert("Favor, informe um nome e um email para cadastro.");
    }
}

// Função para criar uma lista de usuários
function criaLista(){
    let tabela = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>";
    for(let i=0; i < dadosLista.length; i++){
        tabela += `<tr>
                      <td>${dadosLista[i].nome}</td>
                      <td>${dadosLista[i].email}</td>
                      <td>
                          <button type='button' onclick='editar(${i})'>Editar</button>
                          <button type='button' onclick='excluir(${i})'>Excluir</button>
                      </td>
                   </tr>`;
    }
    document.getElementById('tabela').innerHTML = tabela;
}

// Função para editar os nomes e emails das listas
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[i].nome;
    document.getElementById('emailUser').value = dadosLista[i].email;
    excluir(i);  // Exclui o item atual para permitir a edição e posterior salvamento
}

// Função para excluir o nome e email da lista
function excluir(i){
    dadosLista.splice(i, 1); // Remove o usuário do array
    criaLista();  // Atualiza a tabela
}
