//map transforma um array em outro
const nums = [1,2,3,4,5];
console.log(nums);

let resultado = nums.map(function(e){
	return e * 2;
});
console.log(resultado);

const soma10 = e => e +10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`;

resultado = nums.map(soma10);
console.log(resultado);

resultado = nums.map(triplo);
console.log(resultado);

resultado = nums.map(paraDinheiro);
console.log(resultado);

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
