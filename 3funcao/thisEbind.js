const pessoa = {
	saudacao: 'Bom dia!',
	falar(){
		console.log(this.saudacao);
	}
};
pessoa.falar();

//bind amarra um objeto para que seja o dono de um objeto
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();