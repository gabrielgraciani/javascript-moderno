const alunos = [
	{nome: 'joao', nota: 6.3, bolsista: false},
	{nome: 'maria', nota: 9, bolsista: true},
	{nome: 'pedro', nota: 9.5, bolsista: false}
];

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
	console.log(acumulador, atual);
	return acumulador + atual;
});