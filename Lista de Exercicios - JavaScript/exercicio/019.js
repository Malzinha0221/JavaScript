//19. Retornar a maior string de um array
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function encontrarMaiorString(array) {
    var maiorString = "";

    for (var i = 0; i < array.length; i++) {
        if (array[i].length > maiorString.length) {
            maiorString = array[i];
        }
    }

    return maiorString;
}

rl.question("Digite as strings (separadas por espaço): ", function(input) {
    var strings = input.split(" ");
    var maior = encontrarMaiorString(strings);

    console.log("A maior string é: " + maior);
    rl.close();
});
