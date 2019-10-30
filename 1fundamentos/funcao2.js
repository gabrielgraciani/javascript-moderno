//armazenando uma função em uma variavel
const imprimirSoma = function(a,b){
	console.log(a+b);
};

imprimirSoma(2,3);

//armazenando uma função arrow em uma variavel
const soma = (a,b) =>{
	return a+b;
};
console.log(soma(3,4));

//retorno implícito
const subtracao = (a,b) => a-b;
console.log(subtracao(5,3));

const imprimir2 = a => console.log(a);
imprimir2(5);