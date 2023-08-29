//21. Contar a quantidade de palavras em um texto

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarPalavras(texto) {
    var palavras = texto.split(" ");
    return palavras.length;
}

rl.question("Digite um texto: ", function(texto) {
    var quantidadePalavras = contarPalavras(texto);
    console.log("Quantidade de palavras: " + quantidadePalavras);
    rl.close();
});
