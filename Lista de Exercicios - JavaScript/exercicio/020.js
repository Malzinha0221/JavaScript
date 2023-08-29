//20. Criar uma função que junte dois arrays e retorno o resultado como um novo array

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function juntarArrays(array1, array2) {
    var novoArray = array1.concat(array2);
    return novoArray;
}

rl.question("Digite os elementos do primeiro array (separados por espaço): ", function(input1) {
    var array1 = input1.split(" ").map(Number);

    rl.question("Digite os elementos do segundo array (separados por espaço): ", function(input2) {
        var array2 = input2.split(" ").map(Number);

        var novoArray = juntarArrays(array1, array2);

        console.log("Novo array: " + novoArray);
        rl.close();
    });
});
