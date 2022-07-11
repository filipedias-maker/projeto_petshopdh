//**PROJETO PETSHOP EM ANDAMENTO**

const cachorros = require('./database/cachorros.json');
const fs = require('fs');
const path = require('path');
const { splice } = require('./settings/servicos');

// SALVAR

function salvar(cachorro){
    let arquivo = path.resolve('./database/cachorros.json');
    let json = JSON.stringify(cachorros,null,4);
    fs.writeFileSync(arquivo,json);
}

//**TESTE**
//salvar({"id": 8, "nome": "Bob", "castrado": false, "dataDeNascimento": "2020-04-05", "peso": 3, "sexo": "f"});
//console.table(cachorros);

//BUSCAR

function buscar(id){
    let cachorro = cachorros.find(cachorro => {
        return cachorro.id == id;
})
if (cachorro){
    return cachorro;
} else {
    return `Não existe cachorro com o id ${id}`;
}

}

//**TESTE**
//buscar (1);
//console.log(buscar(1));

// LISTAR

//    console.table(cachorros);

//DESCREVER
function descrever(id){
    let cachorro = buscar(id);
    if (cachorro){
        console.log(cachorro);
    } else {
        console.log(`Não existe cachorro com o id ${id}`);
    }

}

//**TESTE** 
//descrever(3);
//console.log(descrever(1));

let cachorro = {
    "nome": "Bob",
    "sexo": "m",
    "castrado": false,
    "dataDeNascimento": "2020-10-12",
    "peso": 3
 }

// ADICIONAR

function adicionar(cachorro){
let novoCachorro = cachorro;
    novoCachorro.id = cachorros.length +1;
    novoCachorro.vacinas = [];
    novoCachorro.servicos = [];
    cachorros.push(novoCachorro); 
}

//**TESTE**
//adicionar(cachorro);
//console.table(cachorros);

//Atribuir Serviço

let dadosDoServico = {"nome": "Maia", "data": "2022-07-04"};

function atribuicaoDeServico(id, dadosDoServico){
    let dadosDoDog = buscar(id);
    if (dadosDoDog.id){
        dadosDoDog.servicos.push(dadosDoServico);
    } else {
        return "Animal inexistente!"
    }
}

//atribuicaoDeServico(5,{"nome": "Banho","data": "2022-07-04"});
//   console.table(cachorros);
//    console.log(cachorros[4]);

let vacina = {"nome": "Adenovirose", "Data": "06-07-2022"}

function vacinar(id, vacina){
    let dadosDaVacina = buscar(id);
    if (dadosDaVacina.id){
        dadosDaVacina.vacinas.push(vacina);
    } else {
        return "Cachorro inexistente"
    }
}

//vacinar(5,{"nome": "Adenovirose", "Data": "06-07-2022"});
//console.table(cachorros);
//console.log(cachorros[4]);

let remov = {"id": 8, "nome": "Bob", "castrado": false, "dataDeNascimento": "2020-04-05", "peso": 3, "sexo": "f"}

function remover(id, remov){
    let removendoDaLista = buscar(id);
    if (removendoDaLista.id){
        removendoDaLista.remov.pop(remov)
    } else {
        return "Cachorro inexistente"
    }
}

//remover(8,{"id": 8, "nome": "Bob", "castrado": false, "dataDeNascimento": "2020-04-05", "peso": 3, "sexo": "f"});
//console.table(cachorros);
//console.log(cachorros[8]);

module.exports = {
        
}
