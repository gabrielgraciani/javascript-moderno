const tecnologias = new Map();
tecnologias.set('react', {framework: false});
tecnologias.set('angula', {framework: true});
console.log(tecnologias.get('react').framework);

const chavesVariadas = new Map([
	[function () {}, 'funcao'],
	[{}, 'objeto'],
	[123, 'numero'],
]);
chavesVariadas.forEach((vl, ch) => {
	console.log(ch, vl);
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);
