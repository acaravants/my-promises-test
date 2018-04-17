const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {

	if(request.url.indexOf('favicon.ico') > 0){ return; }

	console.log('==================\n\n');
	console.log(request);
	console.log('======================================\n\n');

	fs.readFile('./index.html', (error, html) => {
		let html_string = html.toString();
		const variables = html_string.match(/[^\{\}]+(?=\})/g);

		//if(request.)

		const name = "Alejandro";

		for(variable of variables){
			const value = eval(variable);
			html_string = html_string.replace(`{${variable}}`, value);
		}

		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(html_string);
		response.end();
	});
}).listen(8080);