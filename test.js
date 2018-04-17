const http = require('http');
const fs = require('fs');

http.createServer((require, response) => {
	fs.readFile('./index.html', (error, html) => {

		response.writeHead(200, {'Content-Type': 'application/plain'});
		response.write(JSON.stringify({nombre: "alejandro", username: "alejo"}));
		response.end();
	});
}).listen(8080);