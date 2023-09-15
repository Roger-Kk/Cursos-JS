const cliente = {
nome: "João", 
idade: 24, 
email: 'Joao@dominio.com', 
telefone: ['41 11112222', '41 33334444'],

};

console.log(cliente); 

console.log(cliente.telefone); 

//Objetos aninhados (um dentro do outro)
cliente.endereco = {
rua: "R. É nóis na fita",
numero: 137,
apartamento: true,
complemento: "AP 795 - Bloco Z"
};

console.log(cliente['endereco']);


//Lista com vários objetos dentro de um objeto:

cliente.enderecos = [
{
rua: "R. É nóis na fita",
numero: 137,
apartamento: true,
complemento: "AP 795 - Bloco Z",
},
];

cliente.enderecos.push(
    {
        rua: "R. da cancão", 
        numero: 400,
        apartamento:false,
    }
);

console.log('\n' + cliente.enderecos);

//Função que filtra apartamento: 
const listaApenasApartamentos = cliente.enderecos.filter(
(enderecos) => enderecos.apartamento === true
);
console.log('\n'+listaApenasApartamentos);
