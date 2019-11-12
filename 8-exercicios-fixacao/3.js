function temHabilidade(skills) {
	if (skills.indexOf('Javascript') >= 0) {
		return true;
	};
};

var skills = ['Javascript', 'ReactJS', 'React Native'];

if (temHabilidade(skills)) {
	console.log('true')
}else{
	console.log('false');
}