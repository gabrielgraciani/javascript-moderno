console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function(){
	return this.split('').reverse().join('');
};
console.log('escola coder'.reverse());

Array.prototype.first = function(){
	return this[0];
};
console.log([1,2,4,5,6].first());