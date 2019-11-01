const notas = [7.7, 6.5, 3.3, 1.1, 6.3];

//sem callback
const notasBaixas = [];
for(let i in notas){
	if(notas[i] < 7){
		notasBaixas.push(notas[i]);
	}
}
console.log(notasBaixas);

//com callback
const notasBaixas2 = notas.filter(function(nota){
	return nota < 7;
});
console.log(notasBaixas2);

//com arrow
const notasBaixas3 = notas.filter(nota => nota < 7);
console.log(notasBaixas3);

//pra ficar bonito
const notasMenorQue7 = nota => nota < 7;
const notasBaixas4 = notas.filter(notasMenorQue7);
console.log(notasBaixas4);