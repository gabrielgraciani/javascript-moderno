const alunos = [
	{nome: 'joao', nota: 6.3, bolsista: false},
	{nome: 'maria', nota: 9, bolsista: true},
	{nome: 'pedro', nota: 9.5, bolsista: false},
	{nome: 'teste', nota: 9.5, bolsista: true}
];

//todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));


//algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));

