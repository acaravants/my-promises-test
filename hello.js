const http = require('http');

const manejador = (solicitud, respuesta) => {
	console.log('Hola mundo');
	respuesta.end('hola mundo');
};

const servidor = http.createServer(manejador);

servidor.listen(8080);