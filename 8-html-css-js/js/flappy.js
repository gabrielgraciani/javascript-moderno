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


function Barreiras(altura, largura, abertura, espaco, notificarPonto){
	//crio 4 pares de barreiras para ficar reutilizando elas ao invés de cirar várias
	this.pares = [
		//largura = exatamente a largura do jogo, ou seja, vai começar fora do jogo
		new ParDeBarreiras(altura, abertura, largura),
		//largura = a largura do jogo + o espaço entre as barreiras
		new ParDeBarreiras(altura, abertura, largura + espaco),
		//largura = a largura do jogo + o espaço entre as barreiras x2
		new ParDeBarreiras(altura, abertura, largura + espaco * 2),
		//largura = a largura do jogo + o espaço entre as barreiras x3
		new ParDeBarreiras(altura, abertura, largura + espaco * 3)
	];

	//de quantos em quantos px vai ser o deslocamento da barreiras;
	const deslocamento = 3;
	//função que será utilizada para fazer a animação do pássaro e das barreiras
	this.animar = () =>{
		//passo por cada um dos pares, fazendo com que eles se desloquem
		this.pares.forEach(par => {
			//pego o x atual - o deslocamento e setando para o x novo
			par.setX(par.getX() - deslocamento);

			//quando o elemento sair da área do jogo
			if(par.getX() < -par.getLargura()){
				//mudo de posição, fazendo com que ele vá para o final na direita.
				par.setX(par.getX() + espaco * this.pares.length);
				//sorteio a posição da barreira para não ficar iguais
				par.sortearAbertura();
			}

			const meio = largura / 2;
			//se o x do par + o deslocamento for maior ou igual o meio e a posição x sem o deslocamento for menor que o meio, significa
			//que ele cruzou o meio
			const cruzouOMeio = par.getX() + deslocamento >= meio
				&& par.getX() < meio;
			//se ele cruzou o meio, precisa notificar o usuário
			if(cruzouOMeio) notificarPonto();
		});
	}
}

function Passaro(alturaJogo){
	let voando = false;

	//crio o elemento do passaro
	this.elemento = novoElemento('img', 'passaro');
	this.elemento.src = 'imgs/passaro.png';

	//seto a altura do passaro
	this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]);
	this.setY = y => this.elemento.style.bottom = `${y}px`;

	//se for teclado algo, o voando vira true
	window.onkeydown = e => voando = true;
	window.onkeyup = e => voando = false;

	//faço a animação do passaro
	this.animar = () => {
		const novoY = this.getY() + (voando ? 8 : -5.5);
		const alturaMaxima = alturaJogo - this.elemento.clientHeight;

		if(novoY <= 0){
			this.setY(0);
		}
		else if(novoY >= alturaMaxima){
			this.setY(alturaMaxima);
		}
		else{
			this.setY(novoY);
		}
	}
	this.setY(alturaJogo / 2);
}

function Progresso(){
	this.elemento = novoElemento('span', 'progresso');
	this.atualizarPontos = pontos =>{
		this.elemento.innerHTML = pontos;
	}
	this.atualizarPontos(0);
}

function estaoSobrepostos(elementoA, elementoB){
	const a = elementoA.getBoundingClientRect();
	const b = elementoB.getBoundingClientRect();

	const horizontal = a.left + a.width >= b.left
		&& b.left + b.width >= a.left;

	const vertical = a.top + a.height >= b.top
		&& b.top + b.height >= a.top;
	return horizontal && vertical;
}

function colidiu(passaro, barreiras){
	let colidiu = false;
	barreiras.pares.forEach(parDeBarreiras => {
		if(!colidiu){
			const superior = parDeBarreiras.superior.elemento;
			const inferior = parDeBarreiras.inferior.elemento;
			colidiu = estaoSobrepostos(passaro.elemento, superior) || estaoSobrepostos(passaro.elemento, inferior);
		}
	});

	return colidiu;
}

function FlappyBird(){
	let pontos = 0;

	const areaDoJogo = document.querySelector('.flappy');
	const altura = areaDoJogo.clientHeight;
	const largura = areaDoJogo.clientWidth;

	const progresso = new Progresso();
	const barreiras = new Barreiras(altura, largura, 200, 400, () => progresso.atualizarPontos(++pontos));
	const passaro = new Passaro(altura);

	areaDoJogo.appendChild(progresso.elemento);
	areaDoJogo.appendChild(passaro.elemento);
	barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento));

	this.start = () => {
		//loop do jogo
		const temporizador = setInterval(() => {
			barreiras.animar();
			passaro.animar();

			if(colidiu(passaro, barreiras)){
				clearInterval(temporizador);
			}
		}, 20)
	}
}

new FlappyBird().start();

