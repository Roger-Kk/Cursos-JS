//Uso de laços de repetição em arrays: 
const numeros = [10, 20, 30, 40, 50, 60];
for(let indice = 0; indice < numeros.length; indice++){
    console.log(`Ex. arrayFor: ${numeros[indice]}`);
}

// Media com FOR: 
const notas = [7, 8.5, 8, 9.5, 10];
let somaNotas = 0;
for(let i = 0; i<notas.length;i++){
    somaNotas += notas[i];
}
const media = somaNotas / notas.length;
console.log(`Ex arrayFor-Media: ${media} `); 

//Outro exemplo. Calculando a média geral de 3 salas - For dentro de For: 
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media2 = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media2 += notasGerais[i][j]/notasGerais[i].length;
  }
}
media2 = media2/notasGerais.length;
console.log(`Ex arrayFor-Media2: ${media2}`); 


//FOR OF é uma sintaxe mais simples do for: 
let somaDasNotas = 0; 
for(let nota of notas){
    somaDasNotas += nota;
}

const media3 = somaDasNotas/notas.length;
console.log(`Ex arrayFor-of: A media das notas é: ${media3}.`); 


//FOR EACH: 
//Quando uma função é um parâmetro de outra chama-se Função CallBack
somaDasNotas = 0;
notas.forEach(function(nota){
  somaDasNotas += nota;
});

const media4 = somaDasNotas/notas.length;
console.log(`Ex. arrayFor-Each: A média das notas é ${media4}`);

//Arrow Function
//A função callback pode ser escrita na forma de arrow function: 
notas.forEach((nota) => {
  somaDasNotas += nota;
});
console.log(`Ex. arrayArrowFunction: Soma notas = ${somaDasNotas}`); 


//Usando a função callback escrevendo-a fora do ForEach
function imprimeNota(nota){
  console.log(nota);
}

notas.forEach(imprimeNota); 


// Método map: 
// Adicionar 1,5 ponto para cada nota de um array
const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota +1;
});

console.log(notasAtualizadas);


//Reescrever array de string com o método map(): 
const nomes = ['AnA', 'bruna', 'Carla', 'DÉBORA'];

const nomesPadronizados = nomes.map((nome) => {
  return nome.toUpperCase();
}); 
//Outra forma de escrever a arrow function: 
const nomesPadronizados2 = nomes.map((nome) => nome.toUpperCase()); 

console.log(nomesPadronizados); 
console.log(nomesPadronizados2); 



















