let primeraPromesa = new Promise((resolve, reject) => {
    resolve('Primera promesa resuelta!');
});

let segundaPromesa = new Promise((resolve, reject) => {
    resolve('segunda promesa resuelta!');
});

let terceraPromesa = new Promise((resolve, reject) => {
    resolve('tercera promesa resuelta!');
});

let ultimaPromesa = new Promise((resolve, reject) => {
    resolve('cuarta promesa resuelta!');
});

primeraPromesa
    .then(
        response => {
            console.log(response);
            return segundaPromesa;
        }
    )

    .then(
        valorSegundaPromesa => {
            console.log(valorSegundaPromesa);
            return ultimaPromesa;
        }
    )
    .then(
        valorUltimaPromesa => {
            console.log(valorUltimaPromesa);
        }
    )
    .catch(
        error => {
            console.log('error: ', error);
        })

//.catch(error => console.log('error: ',error));