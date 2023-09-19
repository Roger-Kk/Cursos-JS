import chalk from 'chalk';
import fs from 'fs';

console.log(chalk.blue('Executando arquivo index.js'));

//Texto guardado numa variável para testes antes de buscar no arquivo: 
/*
const textoTeste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'
*/

async function pegaArquivo (caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return(extraiLinks(texto));
    } catch (erro){
        trataErro(erro)
    }
}

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]; //método de manipulação de string
    //const capturas = regex.exec(texto); //método de regex
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados.length !== 0 ? resultados : "Não há links no arquivo";
}

function trataErro(erro){
    console.log(erro);
    throw new Error (chalk.red(erro.code, 'Não há arquivo no diretório'));
}

//pegaArquivo('./arquivos/texto.md');

export default pegaArquivo;


//Para pegar o erro no código: 
//pegaArquivo('./Arquivos/textossssss.md'); //erro



// Regex para identificar tudo que está entre colchetes: 
// \[[^[\]]*?\]
// Regex para identificar o que está entre parênteses: 
// \(https?:\/\/[^\s?#.].[^\s]*\)
// Regex completo para selecionar o Título + URL: 
// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)


 //OBS: os (...) é um simbolo na linguagem que funciona como um "espalhador", visando retornar em uma string o conteúdo de um objeto iterável. Neste caso produzido pelo método string matchAll()



/*-------------------------------------------- */

// Promises con then()
//function pegaArquivo(caminhoDoArquivo){
//    const encoding = 'utf-8';
//    fs.promises
//    .readFile(caminhoDoArquivo, encoding)
//    .then((texto) => console.log(chalk.green(texto)))
//    .catch((erro) => trataErro(erro))
//}


// function pegaArquivo (caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }


//Artigo sobre promisses: 
//https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar