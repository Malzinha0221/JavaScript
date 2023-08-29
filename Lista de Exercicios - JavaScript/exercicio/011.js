/* 11. Escreva uma função que verifica se um número fornecido pelo usuário em um prompt é primo ou não.*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function primo(num){
    if (num <= 1){
        return false;
    }
    for (var i = 2; i<=Math.sqrt(num);i++){
        if (num % i ===0){
            return false;
        }
    }
    return true;
}
rl.question("Digite um número: ", function(numero){
    var nume = parseInt(numero);
    if(primo(nume)){
        console.log(nume + " é um numero primo.");
    }else{
        console.log(nume + " não é um número primo.");
    }
    rl.close();
});
primo();