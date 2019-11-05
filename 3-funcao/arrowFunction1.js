let dobro = function(a){
	return 2 * a;
};

//sobrescrevendo a função acima em função arrow
dobro = (a) => {
	return 2 * a;
};


//minificando caso só tenha um parâmetro e retorna só uma coisa;
dobro = a => 2 * a; //return implícito
console.log(dobro(22));


let ola = function(){
	return 'olá';
};

//sobrescrevendo a função acima em função arrow
ola = () => 'olá';
console.log(ola());

