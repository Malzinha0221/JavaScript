// Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function CalcularCirculo(){
    rl.question("Digite um número: ",function(num){
        var raio = parseFloat(num);
        var area = 3.14*(raio**2);
        var perimetro = 2*3.14*raio;
        console.log("O resultado da area: "+ area);
        console.log("O resultado do perimetro: "+ perimetro);
        rl.close();
    });
}

CalcularCirculo();