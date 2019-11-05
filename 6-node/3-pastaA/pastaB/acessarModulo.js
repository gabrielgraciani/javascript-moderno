const moduloA = require('../../1-moduloA');
console.log(moduloA.ola);

//como é um módulo interno do node, não precisa informar um caminho
/*const http = require('http');
http.createServer((req, res) => {
	res.write('bomdia');
	res.end();
}).listen(8080);*/

//não precisa colocar o nome do arquivo porque por padrão ele sempre procura o arquivo index.js
const moduloC = require('./pastaC');
console.log(moduloC.ola2);