//18. Criar uma função que retorno um valor booleano informando se o número enviado como parâmetro é um número primo.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function verificarNumeroPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
rl.question("Digite um número: ", function(numero) {
    var ehPrimo = verificarNumeroPrimo(parseInt(numero));
    if (ehPrimo) {
        console.log(numero + " é um número primo.");
    } else {
        console.log(numero + " não é um número primo.");
    }
    rl.close();
});
