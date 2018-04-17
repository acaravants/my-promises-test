const http = require('http');
const fs = require('fs');

 fs.readFile('./index.html',(error, html) =>{
	http.createServer((request,response) => {
		response.writeHeader(200, {'Content-Type': 'text/html'});
		response.write(html);
		response.end();
	}).listen(8080);
});

