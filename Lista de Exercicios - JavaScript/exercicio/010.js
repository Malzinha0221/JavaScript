// Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em uma string.Tanto o caractere quanto a string devem ser fornecidos pelo usuário.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ContarCaractere(string, caractere){
        var contador = 0;
        for (var i = 0; i < string.length; i++){
            if (string[i]=== caractere){
                contador++;
            }
        }
        return contador;
    }

    rl.question("Digite uma string: ", function(string){
        rl.question("Digite um caractere: ",function(caractere){
            var quantidade = ContarCaractere(string, caractere);
            console.log(`O caractere "${caractere}" aparece ${quantidade} vezes na string "${string}".`);
            rl.close();
        });
    });