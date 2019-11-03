let aprovados = new Array('bia', 'carlos', 'ana');
console.log(aprovados);

aprovados = ['bia', 'carlos', 'ana'];
console.log(aprovados);
console.log(aprovados[0]);

aprovados[3] = 'paulo';
console.log(aprovados[3]);

aprovados.push('abia');
console.log(aprovados);
console.log(aprovados.length);

aprovados.sort();
console.log(aprovados);

delete aprovados[1];
console.log(aprovados);


aprovados = ['bia', 'paulo', 'ana'];
aprovados.splice(1, 1);
console.log(aprovados);
aprovados.splice(1, 0, 'ghabriel', 'joao');
console.log(aprovados);