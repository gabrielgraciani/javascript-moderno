const produtos = [
	{nome: 'notebook', preco: 2399, fragil: true},
	{nome: 'ipad', preco: 4199, fragil: true},
	{nome: 'copo de vidro', preco: 12.49, fragil: true},
	{nome: 'copo de plastico', preco: 18.49, fragil: false}
];

console.log(produtos.filter(function(p){
	return p.preco > 2500;
}));


const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil === true;

console.log(produtos.filter(caro).filter(fragil));
