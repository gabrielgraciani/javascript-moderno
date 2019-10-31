//usando es2015
function soma3(a = 1, b =1, c=1){
	return a + b + c;
}
console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0));