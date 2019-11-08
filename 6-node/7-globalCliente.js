require('./7-global');
console.log(MinhaApp.saudacao());
console.log(global.MinhaApp.saudacao());

MinhaApp.nome = 'eita';
console.log(MinhaApp.nome);