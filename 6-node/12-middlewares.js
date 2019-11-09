//middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => {
	ctx.valor1 = 'mid';
	next();
};

const passo2 = (ctx, next) => {
	ctx.valor2 =  'mid2';
	next();
};

const passo3 = ctx => ctx.valor = 'mid3';

const exec = (ctx, ...middlewares) =>{
	const execPasso = indice =>{
		middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1));
	};
	execPasso(0);
};

const ctx ={};
const ctx2 ={};
exec(ctx, passo1, passo2, passo3);
console.log(ctx);
exec(ctx2, passo1, passo3);
console.log(ctx2);
