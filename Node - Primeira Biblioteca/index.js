import chalk from 'chalk';
import fs from 'fs';

console.log(chalk.blue('Olá mundo'));

function trataErro(erro){
    console.log(erro);
    throw new Error (chalk.red(erro.code, 'Não há arquivo no diretório'));
}
//async/await
/*async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(texto);
}*/

async function pegaArquivo (caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto))
    } catch (erro){
        trataErro(erro)
    }
}


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

pegaArquivo('./Arquivos/texto.md');
pegaArquivo('./Arquivos/textossssss.md'); //erro
