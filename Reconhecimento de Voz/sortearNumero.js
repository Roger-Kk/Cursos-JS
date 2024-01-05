/*************** Variáveis *********************/
const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();
const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');


console.log('Número Secreto: ', gerarNumeroAleatorio()); 
elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;


//************ Funções ************************/
function gerarNumeroAleatorio (){
    return parseInt(Math.random() * maiorValor + 1)
}

