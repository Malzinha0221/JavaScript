/* Escreva uma função que informe o retorno de um investimento(montante) com base nos valores do capital inicial, tempo em meses etaxa de juros mensal, fornecidos pelo usuário.
Use a fóruma: M = C*(1+i)^t
Onde: C = Capital inicial investido; i = Taxa de juros, em percentual; t = tempo do investimento, em meses
Exiba o resultado com duas casas decimais*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function retornoInvestimento(c, i, t){
    var m = c * (1+i) ** t;
    return m;
}
function Invertimento(){
    rl.question("Digite um capital: ",function(num1){
        rl.question("Digite taxa de juros: ", function(num2){
            rl.question("Digite o periodo: ",function(num3){
                var capital = parseFloat(num1);
                var txJuros = parseFloat(num2)/100;
                var periodo = parseFloat(num3);
                var montante = retornoInvestimento(capital, txJuros, periodo);
            console.log("Montante a resgatar: "+ montante.toFixed(2));
            rl.close();
            });
        });
    });
}

Invertimento();