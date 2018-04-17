const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port=8080

const html = fs.readFileSync('./index.html',(error, html) =>{
	const server = http.createServer((request,response) => {
		response.write(html);
		response.end();
	});

	server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:{$port}/`);
	});

});

