/* 27. Dado o seguinte vetor de objeto:
var usuarios = [{
    nome:"Douglas",
    habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
    nome: "Elton",
    habilidades: ["PHP", "Ruby on Rails", "Laravel"]
}];
 Escreva uma funçãpo que retorne o seguinte resultado:
O Cleocimar possui as habilidades: Javascript, ReactJS, Redux.
O Juranildo possui as habilidades: PHP, Ruby on Rails, Laravel
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var usuarios = [{
    nome:"Douglas",
    habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
    nome: "Elton",
    habilidades: ["PHP", "Ruby on Rails", "Laravel"]
}];

function listarHabilidades(usuarios, nomeBuscado){
    for (var i = 0; i< usuarios.length; i++){
        var usuario = usuarios[i];
        if (usuario.nome === nomeBuscado){
            var habilidades = usuario.habilidades.join(', ');
        console.log("O " + usuario.nome + " posuui as habilidades: " + habilidades + ".");
        break;
        }
    }
    rl.close();

}

usuarios[0].nome = "Cleocimar";
usuarios[1].nome = "Juranildo"
rl.question("Digite o nome: ",function(nome){
    listarHabilidades(usuarios, nome);
});