//usando a notação literal
const obj1 = {};
console.log(obj1);

//object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

//funções construtoras
function Produto(nome, preco, desc){
	this.nome = nome;
	this.getPrecoComDesconto = () =>{
		return preco * (1 - desc);
	}
}

const p1 = new Produto('caneta', 6.99, 0.15);
const p2 = new Produto('caneta2', 633.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//função factory
function criarFuncionario(nome, salarioBase, faltas){
	return{
		nome,
		salarioBase,
		faltas,
		getSalario(){
			return (salarioBase / 30) * (30 - faltas);
		}
	}
}

const f1 = criarFuncionario('joao', 7888, 4);
const f2 = criarFuncionario('maria', 5000, 1);
console.log(f1.getSalario(), f2.getSalario());

//object.create
const filha = Object.create(null);
filha.nome = 'ana';
console.log(filha);