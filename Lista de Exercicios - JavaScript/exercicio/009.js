// Escreva uma função que calcule e retorne o fatorial de um número inteiro fornecido pelo usuário.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calcularFatorial(numero){
    if (numero===0 || numero===1){
        return 1;
    } else{
        return numero * calcularFatorial(numero-1);
    }
}
function fatorial(){
    rl.question("Digite um numero: ",function(num){
        var numero = parseInt(num);
        var resultado = calcularFatorial(numero);
        console.log("O fatorial de " + numero + " é: "+ resultado);
        rl.close();
    });
}

fatorial();