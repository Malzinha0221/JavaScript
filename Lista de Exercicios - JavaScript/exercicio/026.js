/* 26. Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos){
// código aqui
}
var anosEstudo = 9;
experiencia(anosEstudo);
// De 0-1 ano: Junior
// De 1-3 anos: Pleno
// De 3-6 anos: Senior
// De 7 acima: Grão Mestre Jedi */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function experiencia(anos) {
    if (anos >= 0 && anos <= 1) {
        return "Junior";
    } else if (anos <= 3) {
        return "Pleno";
    } else if (anos <= 6) {
        return "Senior";
    } else {
        return "Grão Mestre Jedi";
    }
}

rl.question("Digite o total de anos de estudo: ", function(anosEstudo) {
    var nivelExperiencia = experiencia(parseInt(anosEstudo));
    console.log("Nível de experiência: " + nivelExperiencia);
    rl.close();
});
