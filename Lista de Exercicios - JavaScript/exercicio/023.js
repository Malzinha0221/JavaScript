/*Crie uma função com o objeto abaixo que retorne o seguinte conteúdo: O usuário mora em Cuiabá / MT, no bairro Jardim cuiabá, na Av do CPA, nº 1293.
var endereco = {
rua: "Av do CPA",
numero: 1293,
bairro: "Jardim Cuiabá",
cidade: "Cuiabá",
uf: "MT"
};*/
function formatarEndereco(endereco) {
    var conteudo = `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na ${endereco.rua}, nº ${endereco.numero}.`;
    return conteudo;
}

var endereco = {
    rua: "Av do CPA",
    numero: 1293,
    bairro: "Jardim Cuiabá",
    cidade: "Cuiabá",
    uf: "MT"
};

var conteudoEndereco = formatarEndereco(endereco);
console.log(conteudoEndereco);
