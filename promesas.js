let promesa = new Promise((resolve, reject) => {
	console.log('pensiente...');
	setTimeout(() => {
		resolve('Promesa resuelta');
	},200);

	setTimeout(() => {
		reject('ocurrio un error');
	},300);
});

promesa
	.then((response) =>{
		console.log('Response: ', response);
	})
	.catch((error)=>
{		console.log('error: ', error);
	})