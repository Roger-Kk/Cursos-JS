//chamando o OBJ Clientes: 
const clientes = require("./03_clientes.json");


//Função para encontrar na lista de clientes, um valor de uma chave
function encontrar(lista, chave, valor){
return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");
console.log(encontrado); 

const encontrado2 = encontrar(clientes, "telefone", "1918820860");
console.log(encontrado2); 


// Função para filtrar a lista de clientes que tenham apartamento mas estejam sem complemento
function filtrarApartamentosSemComplemento(clientes){
    return clientes.filter((cliente) =>{
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados = filtrarApartamentosSemComplemento(clientes);
console.log(filtrados); 


//Função para ordenar uma lista de objetos: 
function ordenar(lista, propriedade){
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]){
            return -1;
        }
        if (a[propriedade] > b[propriedade]){
            return 1;
        }
        else return 0;
    });
    return resultado;
}

const ordenadoNome = ordenar(clientes, "nome");
console.log(ordenadoNome);