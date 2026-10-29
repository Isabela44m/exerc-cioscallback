
function processarNumero(numero, callback) {
    callback(numero);
}

processarNumero(3, numero => {
    console.log("Triplo:", numero * 3);
});

processarNumero(10, numero => {
    console.log("Triplo:", numero * 3);
});

processarNumero(15, numero => {
    console.log("Triplo:", numero * 3);
});
