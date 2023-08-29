//22. Criar uma função para inverter um array
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inverterArray(array) {
    var arrayInvertido = [];
    for (var i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
}

rl.question("Digite os elementos do array (separados por espaço): ", function(input) {
    var elementos = input.split(" ").map(Number);
    var arrayInvertido = inverterArray(elementos);

    console.log("Array original: " + elementos);
    console.log("Array invertido: " + arrayInvertido);
    rl.close();
});
