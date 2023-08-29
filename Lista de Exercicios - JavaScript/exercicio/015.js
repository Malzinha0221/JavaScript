//15. Localizar o maior valor dentro de um array de números
function encontrarMaiorValor(array) {
    var maiorValor = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > maiorValor) {
            maiorValor = array[i];
        }
    }
    return maiorValor;
}

var numeros = [10, 25, 5, 40, 15, 30];
var maiorValor = encontrarMaiorValor(numeros);
console.log("O maior valor é: " + maiorValor);