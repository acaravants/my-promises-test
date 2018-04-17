const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
	fs.readFile('./index.html', (error, html) => {

		let html_string = html.toString();

		//Expresion regular to find into html file {x} character
		const variables = html_string.match(/[^\{\}]+(?=\})/g);

		const nombre = 'mi primer variable reemplaza';

		// variable ['nombre']
		for(const variable of variables){
			//run js code to get a value of varible
			const value = eval(variable);

			//replace the content inside from {}
			html_string = html_string.replace(`{${variable}}`, value);
		}

		//send the content 
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(html_string);
		response.end();
	});
}).listen(8080);