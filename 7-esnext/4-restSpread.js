//operador ... rest(juntar)/ spread(espalhar)
//usar rest com parametros de função

//usar spred com objeto
const funcionario = {nome:'maria', salario: 12345.99};
const clone = {ativo: true, ...funcionario};
console.log(clone);

//usar spread com array
const grupoA = ['joao', 'pedro', 'maria'];
const grupoFinal = ['maria', 'rafaela', ...grupoA, 'teste'];
console.log(grupoFinal);