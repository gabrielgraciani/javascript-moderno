const pessoa = {
	nome: 'Ana',
	idade: 5,
	endereco: {
		logradouro: 'rua abc',
		numero: 1000
	}
};

const {nome, idade} = pessoa;
console.log(nome, idade);

const {nome: n, idade: i } = pessoa;
console.log(n, i);

const {sobrenome, bemhumorada =true} = pessoa;
console.log(sobrenome, bemhumorada);

const {endereco: { logradouro, numero }} = pessoa;
console.log(logradouro, numero);