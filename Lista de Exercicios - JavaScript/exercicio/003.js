// Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit(F) para Celsius(C).
// Dica: para converter uma temperatura em F para C, subtraia 32 da temperatura e multiplique o resultado por 0,5556(ou 5/9)

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Calculartemperatura(){
    rl.question("Digite um número: ",function(num){
        var temp = (parseFloat(num)-32)*(5/9);
        console.log("O resultado da conversão é: "+ temp);
        rl.close();
    });
}

Calculartemperatura();