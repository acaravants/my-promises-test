let promesa1 = new Promise((resolve, reject) => {
    resolve('Primera promeso resuelta');
});

let promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Segunda promeso resuelta');
    }, 1000);
});

let promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Error fatal en la Tercera promeso resuelta');
    }, 500);
});

let promesa4 = new Promise((resolve, reject) => {
    setTimeout(() => { 
        reject('Primera promeso resuelta');
    }, 1500);
});

Promise.all([promesa2, promesa3, promesa4])
    .then((response) => {
        console.log('Los valores son: ', response);
    })
    .catch((error) => {
        console.log('Error: ', error);
    })