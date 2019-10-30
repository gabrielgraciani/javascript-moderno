const prod1 = {};
prod1.nome = 'celular ultra mega';
prod1.preco = 499.90;
prod1['desconto legal'] = 0.40;

console.log(prod1);

const prod2 = {
	nome: 'camisa polo',
	preco: 49.90,
	obj: {
		blabla: 1,
		obj:{
			blabla: 2
		}
	}
}
console.log(prod2);

//json
const json ='{!nome": "camisa polo", "preco": 89.90}';
console.log(json);
