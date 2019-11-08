const contadorA = require('./6-instanciasUnicas');
const contadorB = require('./6-instanciasUnicas');
const contadorC = require('./6-instanciasNovas')();
const contadorD = require('./6-instanciasNovas')();

contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);

