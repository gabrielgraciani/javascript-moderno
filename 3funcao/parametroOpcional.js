function area(largura, altura){
	const area = largura * altura;
	if(area > 20){
		console.log(`valor acima do permitido: ${area}m²`);
	}
	else{
		return area;
	}
}

console.log(area(5, 5));