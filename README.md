# CADASTRO DE USUÁRIOS.

## Começando 🚀
Nesse projeto, foi criado uma Tela de Login e uma tela de Cadastro de Usuários na seguinte matéria:
* Programação Web I.

## Sobre o projeto 📋 

Esse projeto é composto por 2 páginas, uma contendo a Tela de Login e a outra a tela de Cadastro de Usuários. Neste README inclui o uso de fotos pois assim fica de uma forma mais fácil de ser entendido, não sendo uma leitura muito complexa e o site tornando-se bem fácil de ser utilizado.

## Código JavaScript da Tela de Login.
* ``let`` : Declara uma variável local na extensão do bloco atual, opcionalmente iniciando-a com um valor.
* ``loginSenha`` : ``loginSenha`` e ``loginEmail`` são id´s (identificadores) que utilizo para chamar no js, assim, consigo editar o código. 
* ``document.getElementById`` : Retorna a referência do elemento através do seu ID.
* ``value`` : ``value`` é o valor do input.
* ``if & else`` : A condicional if é uma estrutura que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.
* ``window.location.href`` : O window.location.href é usado para redirecionar o usuário para uma nova página após a conclusão bem-sucedida de um envio de vídeo.




































## Código JavaScript do E-mail
* ``document.forms[0].email.value == ""``: Verifica se o campo de e-mail está vazio.
* ``document.forms[0].email.value.indexOf("@") == -1``: Verifica se o caractere @ está presente no e-mail.
* ``document.forms[0].email.value.indexOf(".") == -1``: Verifica se o caractere . está presente no e-mail.
As verificações são feitas no primeiro formulário ``(forms[0])`` da página, acessando o campo de e-mail ``(email)``.
* ``alert("Por favor, informe um e-mail válido");return false;``: Se qualquer uma das verificações falhar, uma mensagem de alerta é exibida informando que o e-mail é inválido. A função retorna ``false``, o que normalmente interrompe o envio do formulário (se a função estiver associada a um evento de submissão).
Se todas as verificações passarem, uma mensagem de sucesso é exibida. O código então seleciona o elemento com o ``id`` ``email`` e atualiza seu conteúdo HTML com o valor do e-mail inserido.

### Validação de E-mail:
![](telaemail.png)

Assim que se abre o site, você verá a imagem acima, nesse campo voce irá colocar o seu E-mail. LEMBRANDO: Sempre coloque seu E-mail por completo, senão irá aparecer a seguinte notificação:

 ![](mensagemerro.png)

Quando você completar seu E-mail da forma certa sua validação estará pronta! Exemplo: larissa@gmail.com (E-mail fictício)


![](emailcerto.png)

### Validação de CPF: 
![](telacpf.png)

A tela de início da validação do CPF é praticamente igual a tela inicial da validação de E-mail. Uma tela bem fácil de se entender. Conforme descrito, você irá colocar o seu CPF no campo que há na tela inicial.

![](cpfinvalido.png)

Caso falte números no CPF, a mensagem em vermelho aparecerá. Porém quando você escrever de forma certa aparecerá assim:

![](cpfvalido.png)

DUAS OBSERVAÇÕES IMPORTANTES: Esse CPF do print é falso, usei um gerador de CPF's no Google. Se você colocar seu CPF sem pontuação/traço irá dar certo da mesma forma!

## Técnicas e Tecnologias utilizadas 🔨
* Visual Studio Code 
* Git Bash
* Git Hub
* HTML5
* CSS3
* JavaScript
* Live Server (A extensão Live Server permite criar um servidor local através do VSCode. Com ele é cortado a necessidade de sempre que fizer uma alteração no código atualizar o navegador.)

## Autores ✍🏻
| [<img loading="eu.jpeg" src="eu.jpeg" width=115><br><sub>Larissa Gabrielle Fagundes Andrade.</sub>](https://github.com/gabriellefagundes) |
| :---: 
## Meu LinkedIn:
|  [<img loading="linkedin.png" src="linkedin.png" width=115><br><sub>LinkedIn.</sub>](https://www.linkedin.com/in/larissa-gabrielle-a74a272b3/)
| :---: 






FONTE https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let : let - JavaScript