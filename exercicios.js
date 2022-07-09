//Exercício 8
function calculaAno() {
  // Cria o prompt
  var ano = prompt('Informe um ano');
  //Obtem a data atual
  var anoAtual = new Date().getFullYear();
  //Calcula o resultado fazendo parse do valor obtido pelo prompt
  var resultado = anoAtual - parseInt(ano);
  //Exibe o resultado
  alert('O resultado é: ' + resultado);
}

//Exercício 9
//Obter a tag p que armazena o resultado
var resultado = document.getElementById('resultado');
//Função responsável por incrementar o contador
function incrementar() {
  //obter o valor que está no <p>
  var valor = resultado.textContent;
  //Efetua o incremento e adiciona esse novo valor ao <p>
  resultado.innerText = parseInt(valor) + 1;
}
//Função responsável por decrementar o contador
function decrementar() {
  //obter o valor que está no <p>
  var valor = resultado.textContent;
  //Efetua o decremento e adiciona esse novo valor ao <p>
  resultado.innerText = parseInt(valor) - 1;
}

//Exercício 10
function alterarTitulo() {
  // Obtem a tag h1 que exibe o texto
  var titulo = document.getElementById('titulo');
  // Obtem o valor do input
  var inputValue = document.getElementById('inputTitulo').value;
  // Define o valor do input para o h1
  titulo.innerText = inputValue;
}
