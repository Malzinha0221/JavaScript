// Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function InverterNumero(){
    rl.question("Digite um número: ",function(num){
        var numero= parseInt(num);
        var numeroInvertido = parseInt(numero.toString().split('').reverse().join(''));
        console.log("O numero invertido: "+ numeroInvertido);
        rl.close();
    });
}

InverterNumero();