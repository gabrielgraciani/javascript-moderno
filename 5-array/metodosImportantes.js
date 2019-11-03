const pilotos = ['vettel', 'allonso', 'raikonnen', 'massa'];
pilotos.pop(); //remove o ultimo elemento do array
console.log(pilotos);

pilotos.push('verstappen'); //adiciona um novo elemento na ultima posição
console.log(pilotos);

pilotos.shift(); //remove o primeiro
console.log(pilotos);

pilotos.unshift('hamilton'); //adiciona um elemento na primeira posição
console.log(pilotos);

pilotos.splice(2, 0, 'bottas', 'massa'); //adiciona ou remover elementos no array
console.log(pilotos);

pilotos.splice(3, 1);//remover elementos
console.log(pilotos);

const algunsPilotos = pilotos.slice(2); //retorna um novo array
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4); //vai retornar os elementos do 1 ao 3, o 4 não retorna
console.log(algunsPilotos2);