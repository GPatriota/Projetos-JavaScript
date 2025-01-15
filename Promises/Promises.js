const promiseOfAnyNumber = new Promise((resolve, reject) => {
    const number = parseInt(Math.random() * 100);
    resolve(number);
});

promiseOfAnyNumber
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('Finalizou!');
    });