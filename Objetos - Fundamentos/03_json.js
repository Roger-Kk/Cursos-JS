//Chama um Objeto JSON de diretório: 
const dados = require("./03_cliente.json");
console.log(dados);
console.log(typeof dados);

//Transforma OBJETO em STRING:
const clienteEmString = JSON.stringify(dados);
console.log('\n' + clienteEmString);
console.log(typeof clienteEmString);

//Transforma STRING em OBJETO: 
const objetoCliente = JSON.parse(clienteEmString);
console.log('\n' + objetoCliente); 



