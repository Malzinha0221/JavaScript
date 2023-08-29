/*25. Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade “Javascript” e retorna um booleano true/false caso exista ou não.
function temHabilidade(skills){
// código aqui
}
var skills = ["Javascript", "ReactJS", "React Native", "Angular"];
temHabilidade(skills); // true ou false */

function temHabilidade(skills) {
    return skills.includes("Javascript");
}

var skills = ["Javascript", "ReactJS", "React Native", "Angular"];
var possuiHabilidade = temHabilidade(skills);

console.log(possuiHabilidade);