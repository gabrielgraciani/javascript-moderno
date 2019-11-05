const notas = [6.7, 7.4, 8.5, 2.3, 5.5];

for(i in notas){
	console.log(i, notas[i]);
}

const pessoa = {
	nome: 'ana',
	sobrenome: 'silva',
	idade: 29
};

for(atributo in pessoa){
	console.log(`${atributo} = ${pessoa[atributo]}`);
}