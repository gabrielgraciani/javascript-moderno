//Object.preventExtensions
const produto = Object.preventExtensions({
	nome: 'qualquer',
	preco: 1,
	tag: 'promoção'
});

console.log('extensivel: ', Object.isExtensible(produto));

produto.nome = 'borracha';
produto.descricao = 'borracha escolar branca';
delete produto.tag;
console.log(produto);


//Object.seal
const pessoa = {
	nome: 'juliana',
	idade: 35
};

Object.seal(pessoa);
console.log('selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = 'silva';
pessoa.nome = 'oi';
delete pessoa.nome;
console.log(pessoa);