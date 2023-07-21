
// Calculando media sem array. Ex: 

/*const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;

const media  = (nota1 + nota2 + nota3 + nota4)/4;

console.log(media);*/


//Criando um array: 
const notas = [10, 6.5, 8, 7.5];
const media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;
console.log(`Ex array: ${notas}`);
console.log (`Ex media: ${media}`);


//Adicionando elemento: 
notas.push(220);
console.log(`Ex array.push: ${notas}`);

//Removendo elemento: 
notas.pop();
console.log(`Ex array.pop: ${notas}`); 

//Mais métodos de manipulação de Arrays: 
/*
concat()
Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.EX: */
const array1 = [0,1,2,3];
const array2 = [4,5,6,7];
const array3 = array1.concat(array2);
console.log(`Ex array.concat: ${array3}`);

/*
filter()
Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.
*/
const alunos = ['Ana', 'Bruna', 'Carla', 'Débora'];
const medias = [7, 6, 5, 8];
const reprovados = alunos.filter((aluno, indice) =>{
    return  medias[indice] < 7;
});

console.log(`Ex array.filter: Reprovados =  ${reprovados}`); 


/*
find()
Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.

findIndex()
Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.

lastIndexOf()
É igual o findIndex() porém começa do último elemento, não no primeiro.

forEach()
Executa uma função em cada elemento do array de forma individual.
Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.

pop()
Retira o último elemento do array.
Altera o array original removendo o elemento.

shift()
Retira o primeiro elemento do array.
Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.

push()
Adiciona o elemento passado como parâmetro do array, porém na última posição.
Altera o array original com o novo valor.

unshift()
Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
Altera o array original com o novo valor.

reduce()
Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.*/
const notaSala1 = [7,8,8,10,6.5,4,5.5];
const notaSala2 = [6,5,8,9,4,7];
const notaSala3 = [7,3.5,,6.5,9];

function calculaMedia(notasDasSalas){
    const somaDasNotas = notasDasSalas.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

    //outra forma de escrever a arrow function: 
    //  const somaDasNotas = notasDasSalas.reduce((acumulador, nota) => acumulador + nota, 0);

    const media = somaDasNotas / notasDasSalas.length;
    return media; 
}

console.log(`Ex array.reduce: Média da sala1 = ${calculaMedia(notaSala1)}`);
console.log(`Ex array.reduce: Média da sala2 = ${calculaMedia(notaSala2)}`);
console.log(`Ex array.reduce: Média da sala3 = ${calculaMedia(notaSala3)}`);


/*
reduceRight()
Funciona igual o reduce() porém começa do final do array e segue até o início.

reverse()
Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.

slice()
Copia uma parte do array para outro array. EX:*/
const nomes = ['João', 'Paulo', 'Carlos', 'Luba', 'Celso', 'Carla', 'Paula', 'Zão', 'Débora', 'André']
const nomes1 = nomes.slice(0,nomes.length/2);
const nomes2 = nomes.slice(nomes.length/2);
console.log(`Ex array.slice: ${nomes1}`);
console.log(`Ex array.slice: ${nomes2}`);


/*sort()
Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.

splice()
Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido. EX: */
nomes.splice(1,2, "novo nome"); //Remove os itens da posição 1 e 2 e inclui um novo nome. 
console.log(`Ex array.splice: ${nomes}`);


//Duas listas dentro de uma: 
const lista1 = ['Ana', 'Bruna', 'Carla', 'Débora'];
const lista2 = [6.5, 8, 7.2, 9];
const listas = [lista1, lista2];
console.log(`Ex array de listas: ${listas}`);


//Selecionando elemento de uma lista de listas: 
console.log(`A aluna 2 da lista de alunos é: ${listas[0][1]} e sua nota é ${listas[1][1]}`);


//Função pra procurar aluno de uma lista e verificar sua nota no array acima: 
function exibeNomeENota(aluno){
    if(listas[0].includes(aluno)){
        console.log(`Ex funcao acharElementoNoArray: O aluno ${aluno} está cadastrado.`);

        //Desestruturação de listas: 
        // Pode-se nomear as listas dentro de uma lista dessa forma: 
        //const alunos = listas[0];
        //const medias = listas[1];

        //Ou ainda dessa forma: 
        const [alunos, medias] = listas;

        const indice = alunos.indexOf(aluno);
        console.log(`E sua nota é ${medias[indice]}.`);
    } else{
        console.log(`O aluno ${aluno} não foi encontrado.`);
    }
}
exibeNomeENota('Débora');
exibeNomeENota('João');


//Operador de espalhamento de array:
const novasNotas = [...notas];
novasNotas.push('TESTE');
//ou ainda; 
//novasNotas = [...notas, 'TESTE'];

console.log(`As notas originais são ${notas}`);
console.log(`As novas notas são ${novasNotas}`);


//Set(): 
const nomesRepetidos = ['Ana', 'Ana', 'Ana', 'Bruna', 'Bruna']; 
const meuSet = new Set(nomesRepetidos);
const nomesAtualizados = [...meuSet];
console.log(nomesAtualizados); 

