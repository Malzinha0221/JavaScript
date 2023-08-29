// Escreva uma função que encontre a área de um triangulo, a partir dos valores de base e altura fornecidos.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function CalcularTriangulo(){
    rl.question("Digite a base do triangulo: ",function(num1){
        rl.question("Digite a altura do triangulo: ", function(num2){
        var base = parseFloat(num1);
        var altura = parseFloat(num2);
        var area = (base*altura)/2
        console.log("O resultado da area: "+ area);
        rl.close();
    });
    });
}

CalcularTriangulo();