//closure é o escopo criado quando uma função é declarada
//esse escopo permite a função acessar e manupular variáveis externas à função

//contexto léxico em ação

const x = 'global';

function fora(){
	const x = 'local';
	function dentro(){
		return x;
	};
	return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());