const cliente = {
    nome: "João", 
    idade: 24, 
    email: 'Joao@dominio.com', 
    telefone: ['41 11112222', '41 33334444'],
    };

    cliente.enderecos = [
        {
        rua: "R. É nóis na fita",
        numero: 137,
        apartamento: true,
        complemento: "AP 795 - Bloco Z",
        },
    ];

    for(let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo != 'object' && tipo != 'function'){
    console.log(`A ${chave} tem o valor ${cliente[chave]}`);
    }
    }

const chavesDoObjeto = Object.keys(cliente);
//retorna array das chaves de um objeto

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")){
    console.error('Erro. É necessário ter um endereço cadastrado.');
}


//Espalhamento

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}
console.log(encomenda);
