//função para criar um elemento, que recebe o nome da tag que eu quero criar e o nome da classe que eu quero aplicar e retornar o elemento
function novoElemento(tagName, className){
	const elem = document.createElement(tagName);
	elem.className = className;
	return elem;
}

//função para criar a barreira
function Barreira(reversa = false){
	//crio um elemento feito da função acima
	this.elemento = novoElemento('div', 'barreira');

	//verifico se vou adicionar a borda ou o corpo primeiro e crio os elementos
	const borda = novoElemento('div', 'borda');
	const corpo = novoElemento('div', 'corpo');
	//se for uma barreira reversa, primeiro ele aplica o corpo, senão, aplica a borda
	this.elemento.appendChild(reversa ? corpo : borda);
	//se for uma barreira reversa, primeiro ele aplica a borda, senão, aplica o corpo
	this.elemento.appendChild(reversa ? borda : corpo);

	//falo que a altura vai receber a altura que recebeu por parâmetro terminando com px
	this.setAltura = altura => corpo.style.height = `${altura}px`;
}

//crio as barreiras em si, recebendo a altura, a abertura entre uma barreira e outra, e a posição x que eu quero colocar
function ParDeBarreiras(altura, abertura, x){
	//crio o elemento
	this.elemento = novoElemento('div', 'par-de-barreiras');

	//a barreira superior é uma barreira reversa
	this.superior = new Barreira(true);
	//a barreira inferior não é uma barreira reversa
	this.inferior = new Barreira(false);

	//vou adicionar dentro da div parDeBarreiras o elemento superior ou inferior criado a partir da linha 11
	this.elemento.appendChild(this.superior.elemento);
	this.elemento.appendChild(this.inferior.elemento);

	//crio a função para sortear a aparição da abertura, para ela não ficar sempre na mesma posição
	this.sortearAbertura = () =>{
		//a altura superior recebe um calculo randomico de 0 a 1 e multiplicado a altura - a abertura
		const alturaSuperior = Math.random() * (altura - abertura);
		//a altura inferior é simplesmente um resultado da altura superior, sendo a altura do jogo - a abertura - a alturaSuperior
		const alturaInferior = altura - abertura - alturaSuperior;

		//seto a altura de ambas as partes
		this.superior.setAltura(alturaSuperior);
		this.inferior.setAltura(alturaInferior);
	};

	//quero saber em que posição o par de barreiras está, pegando o o style left do elemento em px
	this.getX = () => parseInt(this.elemento.style.left.split('px')[0]);
	//seto o x, para setar a poição da barreira de acordo com o movimento
	this.setX = x => this.elemento.style.left = `${x}px`;
	//preciso saber a altura do elemento
	this.getLargura = () => this.elemento.clientWidth;

	//sorteio a abertura automaticamente gerando um valor aleatório
	this.sortearAbertura();
	//seto o x de acordo com o parâmetro recebido
	this.setX(x);
}
/*const b = new ParDeBarreiras(700, 200, 400);
document.querySelector('.flappy').appendChild(b.elemento);*/
