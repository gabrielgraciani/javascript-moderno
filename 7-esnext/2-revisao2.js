//arrow function
const soma = (a,b) => a + b;
console.log(soma(3,4));

//arrow function (this)
const lexico1 = () => console.log(this === exports);
lexico1();

//parametros default
function log(texto = 'node') {
	console.log(texto);
}
log();
log('wqeqw');

//operador rest
function total(...numeros){
	let total = 0;
	numeros.forEach(n => total += n)
	return total;
}
console.log(total(2,3,4,5));