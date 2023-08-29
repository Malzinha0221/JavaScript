//12. Calcular a soma dos números de um array.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function CalcularSoma(array){
    var soma = 0;
    for (var i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}


rl.question("Digite um número: ", function(numero1) {
    rl.question("Digite outro numero: ", function(numero2){
        var numeroDigitados = [parseInt(numero1), parseInt(numero2)];
        var somaDigitados = CalcularSoma(numeroDigitados);
        console.log("O resultado: "+ somaDigitados);
        rl.close();
    });
});