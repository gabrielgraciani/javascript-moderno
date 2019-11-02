function meuObjeto(){}
console.log(meuObjeto.prototype);

const obj1 = new meuObjeto;
const obj2 = new meuObjeto;
console.log(obj1.__proto__ === obj2.__proto__);
console.log(meuObjeto.prototype === obj1.__proto__);

meuObjeto.prototype.nome = 'anonimo';
meuObjeto.prototype.falar = function(){
	console.log(`bom dia, meu nome é ${this.nome}`);
};

obj1.falar();
obj2.nome = 'rafael';
obj2.falar();

const obj3 = {};
obj3.__proto__ = meuObjeto.prototype;
obj3.nome = 'obj3';
obj3.falar();