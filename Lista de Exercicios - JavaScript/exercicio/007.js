/* Escreva uma função que permite contar o número de vogais contidas em uma strig fornecida pelo usuário. Por exemplo informa a strig "Beterraba" e a função retorna o número 4 (há 4 vogais nessa palavra).
Obs: Ignore vogais acentuadas, para simplificar.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ContarVogais(){
    rl.question("Digite uma palavra: ",function(palavra){
        var contadorVogais = 0;
        for (var i = 0; i < palavra.length; i++){
            var letra = palavra[i].toLowerCase();
            if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
                contadorVogais++;
            }
        }
        console.log("contar numeros de vogais: "+ contadorVogais);
        rl.close();
    });
}

ContarVogais();