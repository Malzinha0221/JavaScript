//14. Criar uma função que receba como parâmetro um array de números e retorne um array contendo somente números positivos.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numerosPositivos(array) {
    var numerosPositivos = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            numerosPositivos.push(array[i]);
        }
    }
    return numerosPositivos;
}

var numeros = [10, -5, 20, -15, 30, -25];
var numerosPositivosArray = numerosPositivos(numeros);
console.log("Números positivos: " + numerosPositivosArray);