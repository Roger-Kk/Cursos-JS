
// Curso Objetos
const listaCPF = [111111, 222222, 333333];

const infoPessoas = ["nome", "Jose", "idade", 32, "CPF", "111222333"];

console.log(infoPessoas);


//Declarando um objeto

const cliente = {
    nome: "André",
    idade: 32, 
    cpf: "111222333444",
    email: 'andre@dominio.com'
};

console.log(cliente);

console.log(cliente.nome);

console.log(
    `O nome do cliente é ${cliente.nome} e tem ${cliente.idade} anos.`
);

//Acesso de propriedados com colchetes:
console.log(
    `O nome do cliente é ${cliente['nome']} e tem ${cliente['idade']} anos.`
);

//

const chaves = ['nome', 'idade', 'cpf', 'email'];
 chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
 });























