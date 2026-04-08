alert('Boas vindas ao Jogo do Número Secreto');

let numeroMaximo = 200;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

//Exibe para o dev o num secreto
console.log(numeroSecreto);

//Enquanto o número não for igual ao número secreto, faça
while(chute != numeroSecreto){

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    
    
    //Se o chute for igual ao número secreto
    if(chute == numeroSecreto){
        break;
    } else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
alert(`Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);


