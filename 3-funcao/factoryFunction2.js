function criarProduto(nome, preco){
	return{
		nome: nome,
		preco: preco,
		desconto: 5
	}
}

console.log(criarProduto('gabriel', 45));