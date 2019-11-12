function pares(x, y){
	let contador = 1;
	for(let i = x; i <= y; i++){
		if(i % 2 == 0){
			console.log(i);
			contador++
		}
	}
}

pares(32, 321);