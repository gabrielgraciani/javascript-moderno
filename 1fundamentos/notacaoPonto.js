console.log(Math.ceil(6.1));

const obj1 = {}
obj1.nome = "bola";
console.log(obj1.nome);

function Obj(nome){
	//cria um atributo publico com o this
	this.nome = nome;
	this.exec = function(){
		console.log('Exec...');
	}
}

const obj2 = new Obj('cadeira');
const obj3 = new Obj('mesa');
console.log(obj2);
console.log(obj3);
obj3.exec();