//desafio: Trazer a mulher que tem o menor salário, que mora na china, trazendo da url.
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

//filtrando as pessoas da china
const pais = f => f.pais === 'China';
//filtrando as mulheres
const genero = f => f.genero === 'F';
//traz o menor salario
//recebo por parâmetro, o acumulador e o elemento atual.
const menorSalario = (func, funcAtual) => {
	//retorna o salario se for menor que o salario do funcionario atual, senão retorna o funcionario atual
	return func.salario < funcAtual.salario ? func: funcAtual;
};

axios.get(url).then(response => {
	const funcionarios = response.data;
	//console.log(funcionarios);




	const func = funcionarios.filter(pais).filter(genero).reduce(menorSalario);
	console.log(func);


});
