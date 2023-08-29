//16. Calcular a soma de todos os dígitos de um número inteiro positivo
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularSomaDigitos(numero) {
    var soma = 0;
    while (numero > 0) {
        var digito = numero % 10;
        soma += digito;
        numero = Math.floor(numero / 10);
    }
    return soma;
}

rl.question("Digite números (separados por espaço): ", function(input) {
    var numeros = input.split(" ").map(Number);
    var somaTotal = 0;
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] >= 0) {
            somaTotal += calcularSomaDigitos(numeros[i]);
        }
    }

    console.log("A soma dos dígitos dos números positivos é: " + somaTotal);
    rl.close();
});
