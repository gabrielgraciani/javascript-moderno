const filhas = ['valesca', 'cibalena'];
const filhos = ['washinton', 'ueslei'];
const todos = filhas.concat(filhos, 'fulano');
console.log(todos, filhas, filhos);

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));