// 13. Calcular a média de todos os números de um array.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const numeros = [5,10, 15, 20, 25, 30];

function calcularMedia(array){
    var soma = 0;
    for(var i = 0; i<array.length;i++){
        soma+=array[i];
    }
    var media = soma / array.length;
    return media;
}
var mediaTotal = calcularMedia(numeros);
console.log("A média dos números é: "+ mediaTotal);