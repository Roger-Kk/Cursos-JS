
//Aula 1: 
//Mesclando listas ordenadas
const {edGalho, edFolha} = require('./04_arrays.js');

function juntaListas(lista1, lista2){
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0;

    while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length){
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];
        //console.log(`Comparando ${produtoAtualLista1.titulo} com ${produtoAtualLista2.titulo}: `);

        if (produtoAtualLista1.preco < produtoAtualLista2.preco){
            listaFinal[atual] = produtoAtualLista1;
            posicaoAtualLista1++;
        } else {
            listaFinal[atual] = produtoAtualLista2;
            posicaoAtualLista2++;
        }
        atual ++;
    }
    while(posicaoAtualLista1 < lista1.length){
    listaFinal[atual] = lista1[posicaoAtualLista1];
    posicaoAtualLista1++;
    atual++;
    }
    while(posicaoAtualLista2 < lista2.length){
    listaFinal[atual] = lista2[posicaoAtualLista2];
    posicaoAtualLista2++;
    atual++;
    }

    return listaFinal;
}

console.log('Mesclando listas ordenadas: \n');
console.log(juntaListas(edGalho, edFolha));
console.log('\n');


//Aula 2: 
//Mesclando listas desordenadas - método mergeSort(), ou RECURSÃO: 

const listaLivros= require('./04_array.js');

function mergeSort(array, nivelAninhamento = 0){

    //console.log(`Nível de aninhamento: ${nivelAninhamento}`);
    //console.log(array);

    if (array.length > 1){
        const meio  = Math.floor(array.length/2);
        const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento ++);
        const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento ++); 
        array = ordena(parte1, parte2);
    }
    return array;
}

function ordena(parte1, parte2){
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];
    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        let produtoAtualParte2 = parte2[posicaoAtualParte2];

        if(produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1);
            posicaoAtualParte1++;
        }else{
            resultado.push(produtoAtualParte2);
            posicaoAtualParte2++;
        }
    }
    return resultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2)); 
}
console.log('Mesclando listas desordenadas: \n');
console.log(mergeSort(listaLivros));
console.log('\n');

//AULA 3: 
// Função para encontrar menores valores num array

function encontraMenores(pivo, array){
let menores = 0;
for (let atual = 0; atual < array.length; atual ++){
    let produtoAtual = array[atual];
    if(produtoAtual.preco< pivo.preco){
        menores++;
    }
}
    trocaLugar(array, array.indexOf(pivo), menores);
    return array;
}

function trocaLugar(array, de, para){
    const elem1 = array[de]
    const elem2 = array[para]

    array[para] = elem1
    array[de] = elem2
}

function divideNoPivo(array){
    let pivo = array[Math.floor(array.length/2)];
    encontraMenores(pivo, array);
    let valoresMenores = 0;
    for(let analisando = 0; analisando < array.length; analisando++){
        let atual = array[analisando];
        if(atual.preco < pivo.preco && atual !== pivo){
            trocaLugar(array, analisando, valoresMenores);
            valoresMenores++;
        }
    }
    return array;
}

console.log('Separando menores e maiores valores: (teste) ')
console.log(encontraMenores(listaLivros[2], listaLivros)); 
console.log('\n'); 

console.log('Separando menores e maiores valores: ')
console.log(divideNoPivo(listaLivros)); 
console.log('\n'); 
